import sys
import os
from flask import Flask, render_template, jsonify, request
import requests
import json
from datetime import datetime, timedelta
from config import load_config, save_config, load_reports, save_report, delete_report, clear_all_reports

# Get the base directory (handles both normal and PyInstaller frozen mode)
if getattr(sys, 'frozen', False):
    # Running as compiled executable
    base_dir = sys._MEIPASS
else:
    # Running as normal Python script
    base_dir = os.path.dirname(os.path.abspath(__file__))

# Create Flask app with correct template and static folders
template_dir = os.path.join(base_dir, 'templates')
static_dir = os.path.join(base_dir, 'static')
app = Flask(__name__, template_folder=template_dir, static_folder=static_dir)

OPEN_METEO_URL = "https://api.open-meteo.com/v1/forecast"
GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search"
REVERSE_GEOCODING_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

# Load config on startup
config = load_config()
ollama_config = {
    'url': config.get('ollama_url', 'http://localhost:11434'),
    'api_key': config.get('ollama_api_key', '')
}

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/weather')
def get_weather():
    lat = request.args.get('lat', type=float)
    lon = request.args.get('lon', type=float)
    
    if not lat or not lon:
        return jsonify({'error': 'Latitude and longitude required'}), 400
    
    params = {
        'latitude': lat,
        'longitude': lon,
        'current': ['temperature_2m', 'relative_humidity_2m', 'apparent_temperature', 
                    'precipitation', 'weather_code', 'wind_speed_10m', 'wind_direction_10m',
                    'pressure_msl', 'cloud_cover'],
        'hourly': ['temperature_2m', 'precipitation_probability', 'weather_code'],
        'daily': ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 
                  'precipitation_sum', 'wind_speed_10m_max'],
        'timezone': 'auto'
    }
    
    try:
        response = requests.get(OPEN_METEO_URL, params=params, timeout=10)
        response.raise_for_status()
        return jsonify(response.json())
    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/historical')
def get_historical():
    lat = request.args.get('lat', type=float)
    lon = request.args.get('lon', type=float)
    
    if not lat or not lon:
        return jsonify({'error': 'Latitude and longitude required'}), 400
    
    # Get past 10 days of data
    end_date = datetime.now()
    start_date = end_date - timedelta(days=10)
    
    params = {
        'latitude': lat,
        'longitude': lon,
        'start_date': start_date.strftime('%Y-%m-%d'),
        'end_date': end_date.strftime('%Y-%m-%d'),
        'daily': ['weather_code', 'temperature_2m_max', 'temperature_2m_min', 
                  'temperature_2m_mean', 'precipitation_sum', 'wind_speed_10m_max',
                  'relative_humidity_2m_mean', 'pressure_msl_mean'],
        'timezone': 'auto'
    }
    
    try:
        response = requests.get(OPEN_METEO_URL, params=params, timeout=10)
        response.raise_for_status()
        return jsonify(response.json())
    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/search')
def search_location():
    query = request.args.get('q', '')
    
    if not query:
        return jsonify({'error': 'Search query required'}), 400
    
    params = {
        'name': query,
        'count': 10,
        'language': 'en',
        'format': 'json'
    }
    
    try:
        response = requests.get(GEOCODING_URL, params=params, timeout=10)
        response.raise_for_status()
        return jsonify(response.json())
    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/reverse-geocode')
def reverse_geocode():
    lat = request.args.get('lat', type=float)
    lon = request.args.get('lon', type=float)
    
    if not lat or not lon:
        return jsonify({'error': 'Latitude and longitude required'}), 400
    
    params = {
        'latitude': lat,
        'longitude': lon,
        'localityLanguage': 'en'
    }
    
    try:
        response = requests.get(REVERSE_GEOCODING_URL, params=params, timeout=10)
        response.raise_for_status()
        data = response.json()
        
        # Extract location name from response
        location_name = data.get('city') or data.get('locality') or data.get('principalSubdivision') or 'Unknown Location'
        
        return jsonify({
            'name': location_name,
            'country': data.get('countryName', ''),
            'region': data.get('principalSubdivision', '')
        })
    except requests.RequestException as e:
        return jsonify({'error': str(e)}), 500

@app.route('/api/ollama/config', methods=['GET', 'POST'])
def ollama_config_endpoint():
    """Get or update Ollama configuration"""
    global ollama_config
    
    if request.method == 'POST':
        data = request.get_json()
        if data:
            ollama_config['url'] = data.get('url', ollama_config['url'])
            ollama_config['api_key'] = data.get('api_key', ollama_config['api_key'])
            # Save to file
            save_config({
                'ollama_url': ollama_config['url'],
                'ollama_api_key': ollama_config['api_key'],
                'last_model': config.get('last_model', '')
            })
        return jsonify({'status': 'success', 'config': ollama_config})
    
    return jsonify(ollama_config)

@app.route('/api/ollama/models')
def get_ollama_models():
    """Get available Ollama models"""
    try:
        response = requests.get(f"{ollama_config['url']}/api/tags", timeout=5)
        response.raise_for_status()
        data = response.json()
        models = [model['name'] for model in data.get('models', [])]
        return jsonify({'models': models})
    except requests.RequestException as e:
        return jsonify({'error': f'Failed to connect to Ollama: {str(e)}', 'models': []}), 500

@app.route('/api/ollama/test', methods=['POST'])
def test_ollama_connection():
    """Test Ollama connection with provided URL"""
    data = request.get_json()
    url = data.get('url', 'http://localhost:11434')
    
    try:
        response = requests.get(f"{url}/api/tags", timeout=5)
        if response.status_code == 200:
            data = response.json()
            models = [model['name'] for model in data.get('models', [])]
            return jsonify({
                'status': 'connected',
                'message': 'Successfully connected to Ollama',
                'models': models
            })
        else:
            return jsonify({
                'status': 'error',
                'message': f'Ollama returned status {response.status_code}'
            }), 500
    except requests.RequestException as e:
        return jsonify({
            'status': 'error',
            'message': f'Failed to connect: {str(e)}'
        }), 500

@app.route('/api/ollama/predict', methods=['POST'])
def predict_weather():
    """Use Ollama AI to predict future weather based on historical data"""
    data = request.get_json()
    
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    historical_data = data.get('historical_data')
    model = data.get('model', 'llama2')
    location = data.get('location', 'Unknown Location')
    
    if not historical_data:
        return jsonify({'error': 'Historical data required'}), 400
    
    # Save last used model
    save_config({
        'ollama_url': ollama_config['url'],
        'ollama_api_key': ollama_config['api_key'],
        'last_model': model
    })
    
    # Format historical data for the AI
    daily_data = historical_data.get('daily', {})
    times = daily_data.get('time', [])
    max_temps = daily_data.get('temperature_2m_max', [])
    min_temps = daily_data.get('temperature_2m_min', [])
    precip = daily_data.get('precipitation_sum', [])
    wind = daily_data.get('wind_speed_10m_max', [])
    weather_codes = daily_data.get('weather_code', [])
    
    # Build the historical summary
    history_summary = []
    for i in range(len(times)):
        day_data = {
            'date': times[i],
            'max_temp': max_temps[i] if i < len(max_temps) else 'N/A',
            'min_temp': min_temps[i] if i < len(min_temps) else 'N/A',
            'precipitation': precip[i] if i < len(precip) else 'N/A',
            'wind_speed': wind[i] if i < len(wind) else 'N/A',
            'weather_code': weather_codes[i] if i < len(weather_codes) else 'N/A'
        }
        history_summary.append(day_data)
    
    # Create the prompt for the AI
    prompt = f"""You are a weather prediction expert. Analyze the following historical weather data for {location} and predict the weather for the next 7 days.

Historical Weather Data (Past 10 Days):
{json.dumps(history_summary, indent=2)}

Weather Code Reference:
0 = Clear sky
1 = Mainly clear
2 = Partly cloudy
3 = Overcast
45, 48 = Fog
51, 53, 55 = Drizzle
61, 63, 65 = Rain
71, 73, 75 = Snow
80, 81, 82 = Rain showers
95, 96, 99 = Thunderstorm

Please provide a detailed 7-day weather forecast prediction. For each day, predict:
1. Weather condition (clear, cloudy, rain, snow, etc.)
2. Expected temperature range (min/max in °C)
3. Precipitation probability and amount
4. Wind conditions
5. Any notable weather patterns or changes

IMPORTANT: Keep your thinking process concise (2-3 sentences per day maximum). Focus on delivering the actual predictions clearly.

Format your response as:

## Weather Prediction for {location} - Next 7 Days

### Day 1 (Tomorrow):
- **Condition**: [prediction]
- **Temperature**: [min-max°C]
- **Precipitation**: [prediction]
- **Wind**: [prediction]
- **Reasoning**: [brief analysis in 2-3 sentences]

[Continue for all 7 days...]

### Summary & Trends:
[Overall pattern analysis in 2-3 sentences]
"""

    try:
        # Clean up URL (remove trailing slash)
        base_url = ollama_config['url'].rstrip('/')
        
        headers = {'Content-Type': 'application/json'}
        if ollama_config.get('api_key'):
            headers['Authorization'] = f"Bearer {ollama_config['api_key']}"
        
        # Try OpenAI-compatible endpoint first (newer Ollama versions)
        # Increased max_tokens for thinking models
        openai_payload = {
            'model': model,
            'messages': [
                {
                    'role': 'system',
                    'content': 'You are a weather prediction expert. Analyze weather data and provide accurate forecasts. Be concise in your thinking process.'
                },
                {
                    'role': 'user',
                    'content': prompt
                }
            ],
            'temperature': 0.7,
            'top_p': 0.9,
            'max_tokens': 4000,
            'stream': False
        }
        
        try:
            print(f"Trying OpenAI-compatible endpoint at {base_url}/v1/chat/completions")
            response = requests.post(
                f"{base_url}/v1/chat/completions",
                json=openai_payload,
                headers=headers,
                timeout=120
            )
            
            print(f"OpenAI API response status: {response.status_code}")
            
            if response.status_code == 200:
                result = response.json()
                prediction = result.get('choices', [{}])[0].get('message', {}).get('content', '')
                
                if prediction:
                    return jsonify({
                        'prediction': prediction,
                        'model': model,
                        'location': location,
                        'historical_days': len(history_summary)
                    })
            elif response.status_code in [404, 405]:
                print("OpenAI endpoint not available, trying native Ollama endpoints")
                pass
            else:
                response.raise_for_status()
        except requests.exceptions.HTTPError as e:
            print(f"OpenAI API HTTP error: {e.response.status_code}")
            if e.response.status_code in [404, 405]:
                pass
            else:
                raise
        
        # Try the generate API (native Ollama)
        # Increased num_predict for thinking models
        generate_payload = {
            'model': model,
            'prompt': prompt,
            'stream': False,
            'options': {
                'temperature': 0.7,
                'top_p': 0.9,
                'num_predict': 4000
            }
        }
        
        try:
            print(f"Trying /api/generate at {base_url}")
            response = requests.post(
                f"{base_url}/api/generate",
                json=generate_payload,
                headers=headers,
                timeout=120
            )
            
            print(f"Generate API response status: {response.status_code}")
            
            if response.status_code == 200:
                result = response.json()
                prediction = result.get('response', 'No prediction generated')
                
                return jsonify({
                    'prediction': prediction,
                    'model': model,
                    'location': location,
                    'historical_days': len(history_summary)
                })
            elif response.status_code in [404, 405]:
                print("Generate API not available, trying chat API")
                pass
            else:
                response.raise_for_status()
        except requests.exceptions.HTTPError as e:
            print(f"Generate API HTTP error: {e.response.status_code} - {e.response.text[:200]}")
            if e.response.status_code in [404, 405]:
                pass
            else:
                raise
        
        # Try chat API as final fallback
        # Increased num_predict for thinking models
        print(f"Trying /api/chat at {base_url}")
        ollama_payload = {
            'model': model,
            'messages': [
                {
                    'role': 'system',
                    'content': 'You are a weather prediction expert. Analyze weather data and provide accurate forecasts. Be concise in your thinking process.'
                },
                {
                    'role': 'user',
                    'content': prompt
                }
            ],
            'stream': False,
            'options': {
                'temperature': 0.7,
                'top_p': 0.9,
                'num_predict': 4000
            }
        }
        
        response = requests.post(
            f"{base_url}/api/chat",
            json=ollama_payload,
            headers=headers,
            timeout=120
        )
        print(f"Chat API response status: {response.status_code}")
        response.raise_for_status()
        result = response.json()
        prediction = result.get('message', {}).get('content', '')
        
        if prediction:
            return jsonify({
                'prediction': prediction,
                'model': model,
                'location': location,
                'historical_days': len(history_summary)
            })
        else:
            return jsonify({'error': 'No prediction generated by the model'}), 500
        
    except requests.exceptions.ConnectionError:
        return jsonify({'error': 'Cannot connect to Ollama. Please check that Ollama is running and the URL is correct.'}), 503
    except requests.exceptions.Timeout:
        return jsonify({'error': 'Request to Ollama timed out. The model may be loading or the request is too complex.'}), 504
    except requests.exceptions.HTTPError as e:
        if e.response.status_code == 404:
            return jsonify({'error': f'Model "{model}" not found or API endpoint not available. Please check your Ollama installation.'}), 404
        elif e.response.status_code == 405:
            return jsonify({'error': 'Ollama API method not allowed. This may be a CORS issue or the API endpoint has changed. Try updating Ollama or check the API documentation.'}), 405
        else:
            return jsonify({'error': f'Ollama API error: {str(e)}'}), 500
    except Exception as e:
        return jsonify({'error': f'Unexpected error: {str(e)}'}), 500

@app.route('/api/ollama/status')
def ollama_status():
    """Get current Ollama connection status and last used model"""
    global config
    config = load_config()  # Reload config
    return jsonify({
        'url': ollama_config['url'],
        'last_model': config.get('last_model', '')
    })

@app.route('/api/reports')
def get_reports():
    """Get all saved reports"""
    reports = load_reports()
    return jsonify({'reports': reports})

@app.route('/api/reports/<int:report_id>')
def get_report(report_id):
    """Get a specific report by ID"""
    reports = load_reports()
    report = next((r for r in reports if r['id'] == report_id), None)
    
    if report:
        return jsonify(report)
    else:
        return jsonify({'error': 'Report not found'}), 404

@app.route('/api/reports/save', methods=['POST'])
def save_report_endpoint():
    """Save a report manually"""
    data = request.get_json()
    
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    location = data.get('location', 'Unknown Location')
    model = data.get('model', 'unknown')
    prediction = data.get('prediction', '')
    
    if not prediction:
        return jsonify({'error': 'No prediction provided'}), 400
    
    report = save_report(location, model, prediction)
    
    if report:
        return jsonify({
            'status': 'success',
            'report': report
        })
    else:
        return jsonify({'error': 'Failed to save report'}), 500

@app.route('/api/reports/<int:report_id>', methods=['DELETE'])
def delete_report_endpoint(report_id):
    """Delete a specific report by ID"""
    if delete_report(report_id):
        return jsonify({'status': 'success', 'message': 'Report deleted'})
    else:
        return jsonify({'error': 'Failed to delete report'}), 500

@app.route('/api/reports/clear', methods=['POST'])
def clear_reports():
    """Clear all reports"""
    if clear_all_reports():
        return jsonify({'status': 'success', 'message': 'All reports cleared'})
    else:
        return jsonify({'error': 'Failed to clear reports'}), 500

@app.route('/api/translate', methods=['POST'])
def translate_text():
    """Translate text using Google Translate API (free)"""
    data = request.get_json()
    
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    text = data.get('text', '')
    target_lang = data.get('target_lang', 'en')
    
    if not text:
        return jsonify({'error': 'No text provided'}), 400
    
    try:
        # Try using deep_translator (more reliable)
        from deep_translator import GoogleTranslator
        
        translator = GoogleTranslator(source='auto', target=target_lang)
        translated = translator.translate(text)
        
        return jsonify({
            'translated_text': translated,
            'source_lang': 'en',
            'target_lang': target_lang
        })
    except ImportError:
        # Try alternative: googletrans
        try:
            from googletrans import Translator
            
            translator = Translator()
            result = translator.translate(text, dest=target_lang)
            
            return jsonify({
                'translated_text': result.text,
                'source_lang': result.src,
                'target_lang': target_lang
            })
        except ImportError:
            # Fallback: return original text with note
            return jsonify({
                'translated_text': text,
                'source_lang': 'en',
                'target_lang': target_lang,
                'note': 'Translation service not available. Please install: pip install deep-translator'
            })
    except Exception as e:
        return jsonify({'error': f'Translation failed: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
