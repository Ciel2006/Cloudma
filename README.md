# Cloudma - AI-Powered Weather Application

**Cloudma** is an open-source desktop weather application that combines real-time weather data from Open-Meteo with AI-powered weather predictions using Ollama. Built for the Ollama contest, this application demonstrates how local AI models can enhance traditional weather forecasting by analyzing historical patterns and predicting future conditions.

![Cloudma Screenshot]

## Gallery

### Main Interface
![Main Interface](https://media.discordapp.net/attachments/982480951965794335/1466275019033280532/cloudma1.png?ex=697c2686&is=697ad506&hm=d4336a7cde476864a87052ca893c237c47a674288b3338c5caa420901e32dd04&=&format=webp&quality=lossless&width=1919&height=1160)
*The main Cloudma interface showing the interactive map and current weather display*

### AI Prediction Window
![AI Prediction](https://media.discordapp.net/attachments/982480951965794335/1466275018307670076/cloudma2.png?ex=697c2686&is=697ad506&hm=09fff3907f4ff5fe69d8ff06a7f4bbcca864fa4845a521b0a1b93c5194970f2a&=&format=webp&quality=lossless&width=571&height=208)
*AI-generated weather prediction with translation support*

### Report History
![Report History](https://media.discordapp.net/attachments/982480951965794335/1466275017665810565/cloudma4.png?ex=697c2686&is=697ad506&hm=5d3eaefa272a8d85c1ae86e15bafaa11fe6c3ed44f50709d0235ec63602c4ecc&=&format=webp&quality=lossless&width=535&height=308)
*History panel showing saved AI predictions*

### AI Options Panel
![AI Options](https://media.discordapp.net/attachments/982480951965794335/1466275017300901952/cloudma5.png?ex=697c2686&is=697ad506&hm=68ac23c7743b88bb1188681cfd40fb6d9f08b21c81c7b89aa2da2c86c73c9572&=&format=webp&quality=lossless&width=2434&height=339)
*Ollama connection settings and model selection*

### Full report
![Dark Theme](https://media.discordapp.net/attachments/982480951965794335/1466275018022588528/cloudma3.png?ex=697c2686&is=697ad506&hm=1051dec1a526fa1f421f894adb9083dc4c095db639cdcb5a83c974bcc21747da&=&format=webp&quality=lossless&width=1921&height=1159)
*Full detailled rapport about your selected location*

## Table of Contents

- [Features](#features)
- [Architecture Overview](#architecture-overview)
- [How It Works](#how-it-works)
  - [Weather Data API Calls](#weather-data-api-calls)
  - [AI Prediction System](#ai-prediction-system)
  - [Translation System](#translation-system)
- [Installation](#installation)
- [Usage](#usage)
- [Technical Details](#technical-details)
- [File Structure](#file-structure)
- [Configuration](#configuration)
- [Building from Source](#building-from-source)
- [License](#license)

## Features

### Core Weather Features
- **Real-time Weather Data**: Current conditions including temperature, humidity, wind speed, pressure, and cloud cover
- **Interactive Map**: Click anywhere on the world map to get weather for that location
- **7-Day Forecast**: Daily weather predictions with temperature ranges and precipitation
- **Hourly Forecast**: Detailed hourly weather data for the next 24 hours
- **Geocoding**: Automatic city name lookup from coordinates using reverse geocoding

### AI-Powered Features (Ollama Integration)
- **Historical Analysis**: Fetches past 10 days of weather data for pattern analysis
- **AI Weather Predictions**: Uses local Ollama models to predict future weather trends
- **Multiple Model Support**: Compatible with any Ollama model (Llama, Mistral, GLM, etc.)
- **Customizable Prompts**: AI analyzes historical data and generates human-readable predictions
- **Report History**: Save and view past AI-generated weather reports

### User Interface Features
- **Professional Dark Theme**: Modern, sleek interface with dark mode
- **Draggable Windows**: AI prediction and history panels can be moved and positioned
- **Multi-language Support**: Translate AI reports to multiple languages using Google Translate
- **Responsive Design**: Adapts to different screen resolutions automatically
- **Desktop Application**: Runs in a dedicated window using pywebview

### Data Management
- **Persistent Configuration**: Saves API settings, model preferences, and window positions
- **Report Storage**: Saves AI predictions as text files for future reference
- **History Panel**: Browse and reopen past weather reports

## Architecture Overview

Cloudma uses a modern web-based architecture packaged as a desktop application:

```
┌─────────────────────────────────────────────────────────────┐
│                    Desktop Window (pywebview)               │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              Flask Web Application                   │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │   │
│  │  │   Weather   │  │     AI      │  │   Config    │ │   │
│  │  │   Routes    │  │   Routes    │  │   Routes    │ │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘ │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐ │   │
│  │  │  Open-Meteo │  │   Ollama    │  │   Reports   │ │   │
│  │  │     API     │  │     API     │  │   Storage   │ │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────┘
```

**Technology Stack:**
- **Backend**: Python 3.11, Flask
- **Frontend**: HTML5, CSS3, JavaScript, Leaflet.js (maps)
- **Desktop**: pywebview (creates native window)
- **AI**: Ollama API (local LLM inference)
- **Weather**: Open-Meteo API (free, no API key required)
- **Translation**: deep-translator (Google Translate)

## How It Works

### Weather Data API Calls

Cloudma fetches weather data from the **Open-Meteo API**, a free weather API that doesn't require an API key.

#### Current Weather Endpoint
```python
GET https://api.open-meteo.com/v1/forecast
Parameters:
  - latitude: float
  - longitude: float
  - current: [temperature_2m, relative_humidity_2m, apparent_temperature, 
              precipitation, weather_code, wind_speed_10m, wind_direction_10m,
              pressure_msl, cloud_cover]
  - hourly: [temperature_2m, precipitation_probability, weather_code]
  - daily: [weather_code, temperature_2m_max, temperature_2m_min, 
            precipitation_sum, wind_speed_10m_max]
  - timezone: auto
```

**Example API Call:**
```python
params = {
    'latitude': 46.8123,
    'longitude': -71.2145,
    'current': ['temperature_2m', 'relative_humidity_2m', ...],
    'hourly': ['temperature_2m', 'precipitation_probability', ...],
    'daily': ['weather_code', 'temperature_2m_max', ...],
    'timezone': 'auto'
}
response = requests.get(OPEN_METEO_URL, params=params, timeout=10)
```

#### Historical Weather Endpoint
For AI predictions, Cloudma fetches the past 10 days of weather data:

```python
GET https://archive-api.open-meteo.com/v1/archive
Parameters:
  - latitude: float
  - longitude: float
  - start_date: (today - 10 days)
  - end_date: (today - 1 day)
  - daily: [temperature_2m_max, temperature_2m_min, precipitation_sum, 
            wind_speed_10m_max, weather_code]
  - timezone: auto
```

**Historical Data Processing:**
The app processes 10 days of historical data to calculate:
- Average maximum/minimum temperatures
- Total precipitation
- Average wind speed
- Weather pattern frequency (sunny, cloudy, rainy, snowy)
- Temperature trends (rising, falling, stable)

### AI Prediction System

Cloudma uses **Ollama** to run local AI models for weather prediction. This is the core feature for the contest.

#### How AI Predictions Work

1. **Data Collection**: 
   - Fetch current weather from Open-Meteo
   - Fetch 10 days of historical weather data
   - Process data into a structured summary

2. **Prompt Engineering**:
   ```
   Based on the following weather data for [City]:
   
   Current Conditions:
   - Temperature: 15°C
   - Humidity: 65%
   - Wind: 12 km/h
   - Pressure: 1013 hPa
   
   Past 10 Days Analysis:
   - Average High: 18°C
   - Average Low: 8°C
   - Total Precipitation: 25mm
   - Weather Pattern: Mostly sunny with 2 rainy days
   - Temperature Trend: Rising (+3°C over the week)
   
   Predict the weather for the next 3-5 days. Include:
   - Expected temperature range
   - Precipitation probability
   - Wind conditions
   - Any notable weather patterns
   ```

3. **API Call to Ollama**:
   ```python
   # Try multiple endpoints for compatibility
   endpoints = [
       f"{ollama_url}/v1/chat/completions",  # OpenAI-compatible
       f"{ollama_url}/api/generate",          # Native Ollama
       f"{ollama_url}/api/chat"               # Alternative native
   ]
   
   payload = {
       "model": selected_model,
       "messages": [{"role": "user", "content": prompt}],
       "stream": False,
       "options": {
           "temperature": 0.7,
           "num_predict": 4000  # For models with thinking process
       }
   }
   ```

4. **Response Processing**:
   - Parse AI response
   - Display in draggable popup window
   - Allow translation to multiple languages
   - Save to history with manual save button

#### Multi-Endpoint Support

Cloudma supports multiple Ollama API endpoints for maximum compatibility:

| Endpoint | Format | Use Case |
|----------|--------|----------|
| `/v1/chat/completions` | OpenAI-compatible | Standard models |
| `/api/generate` | Native Ollama | Direct generation |
| `/api/chat` | Native Ollama | Chat-based models |

The app automatically tries each endpoint until one succeeds, making it compatible with different Ollama versions.

#### Model Support

Cloudma works with any Ollama model:
- **Llama 2/3** (Meta) - General purpose
- **Mistral** - Fast, efficient
- **GLM-4** (Zhipu AI) - With thinking process support
- **CodeLlama** - For technical users
- **Custom models** - Any model installed in Ollama

### Translation System

Cloudma uses **deep-translator** (Google Translate) to translate AI predictions:

```python
from deep_translator import GoogleTranslator

def translate_text(text, target_lang):
    translator = GoogleTranslator(source='auto', target=target_lang)
    return translator.translate(text)
```

**Supported Languages:**
- English (en)
- French (fr)
- Spanish (es)
- German (de)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Chinese (zh)
- Japanese (ja)
- Arabic (ar)

## Installation

### Option 1: Pre-built Executable

1. Download `Cloudma.exe` from the releases
2. **Important**: Place the executable in a dedicated folder (e.g., `C:\Cloudma\` or `D:\Cloudma\`)
3. Double-click to run
4. No installation required!

**Note**: The executable will create the following files/folders in the same directory:
- `cloudma_config.json` - User settings
- `cloudma_reports.json` - Report metadata
- `reports/` - Folder containing saved AI prediction text files

**Recommended folder structure:**
```
Cloudma/
├── Cloudma.exe          # The application
├── cloudma_config.json  # Auto-generated
├── cloudma_reports.json # Auto-generated
└── reports/             # Auto-generated folder
    ├── Quebec_2026-01-28_21-54-08_1.txt
    └── ...
```

### Option 2: Run from Source

**Prerequisites:**
- Python 3.11 or higher
- Ollama installed (for AI features)

**Steps:**
```bash
# Clone the repository
git clone https://github.com/Ciel2006/Cloudma.git
cd cloudma

# Install dependencies
pip install -r requirements.txt

# Run the application
python main.py
```

### Option 3: Build Executable

```bash
# Install PyInstaller
pip install pyinstaller

# Build executable
python build_simple.py

# Find executable in dist/Cloudma.exe
```

## Usage

### Getting Weather

1. **Click on the map** to select a location
2. Or use the search box to find a city
3. Current weather and forecast will display automatically

### Using AI Predictions

1. Click **"AI Options"** button
2. Configure Ollama connection:
   - URL: `http://localhost:11434` (default)
   - API Key: (optional, for authenticated setups)
3. Click **"Test Connection"** to verify
4. Select an AI model from the dropdown
5. Click **"Generate Prediction"**
6. AI will analyze 10 days of historical data and predict future weather

### Managing Reports

- **Save Report**: Click the save button in the AI prediction window
- **View History**: Open the History panel to see past reports
- **Reposition Windows**: Drag the AI and History windows to customize layout
- **Translate**: Select a language from the dropdown to translate predictions

### Configuration

Settings are automatically saved to `cloudma_config.json`:
- Ollama URL and API key
- Last used AI model
- Window positions
- Report history metadata

## Technical Details

### File Structure

```
cloudma/
├── main.py                 # Application entry point
├── app.py                  # Flask backend with API routes
├── config.py              # Configuration and report management
├── build_simple.py        # Build script for executable
├── requirements.txt       # Python dependencies
├── cloudma_config.json    # User settings (auto-generated)
├── cloudma_reports.json   # Report metadata (auto-generated)
├── reports/               # Saved report text files
│   └── [City]_[Date]_[ID].txt
├── templates/
│   └── index.html         # Main UI template
└── static/
    ├── style.css          # Dark theme styling
    └── app.js             # Frontend JavaScript
```

### Key Components

#### [`main.py`](main.py)
- Initializes Flask server in background thread
- Creates desktop window using pywebview
- Handles screen resolution detection
- Manages application lifecycle

#### [`app.py`](app.py)
**Flask Routes:**
- `/` - Main application page
- `/api/weather` - Current weather data
- `/api/forecast` - 7-day forecast
- `/api/geocode` - City name lookup
- `/api/historical` - Past 10 days data
- `/api/ollama/models` - List available AI models
- `/api/ollama/test` - Test Ollama connection
- `/api/predict` - Generate AI weather prediction
- `/api/translate` - Translate text
- `/api/reports/save` - Save report manually
- `/api/reports` - Get report list
- `/api/reports/<id>` - Get specific report
- `/api/reports/<id>/delete` - Delete report

#### [`config.py`](config.py)
- Manages configuration persistence
- Handles report storage (JSON + text files)
- Creates necessary directories
- Supports both frozen and development modes

#### [`static/app.js`](static/app.js)
- Leaflet.js map integration
- Weather data fetching and display
- AI prediction UI handling
- Draggable window management
- Translation functionality
- Report history management

#### [`static/style.css`](static/style.css)
- CSS variables for theming
- Dark theme implementation
- Responsive design
- Draggable window styling
- Animation effects

### API Endpoints Detail

#### Weather Endpoints

**GET /api/weather**
```json
Request: ?lat=46.8123&lon=-71.2145
Response: {
  "current": {
    "temperature_2m": 15.2,
    "relative_humidity_2m": 65,
    "wind_speed_10m": 12.5,
    ...
  },
  "daily": [...],
  "hourly": [...]
}
```

**GET /api/historical**
```json
Request: ?lat=46.8123&lon=-71.2145
Response: {
  "summary": {
    "avg_max_temp": 18.5,
    "avg_min_temp": 8.2,
    "total_precipitation": 25.3,
    "avg_wind_speed": 15.2,
    "weather_pattern": "Mostly sunny",
    "temp_trend": "rising"
  },
  "raw_data": {...}
}
```

#### AI Endpoints

**GET /api/ollama/models**
```json
Response: {
  "models": ["llama2", "mistral", "glm-4"],
  "ollama_url": "http://localhost:11434"
}
```

**POST /api/ollama/test**
```json
Request: {
  "url": "http://localhost:11434",
  "api_key": ""
}
Response: {
  "success": true,
  "models": ["llama2", "mistral"]
}
```

**POST /api/predict**
```json
Request: {
  "lat": 46.8123,
  "lon": -71.2145,
  "city": "Quebec City",
  "model": "llama2"
}
Response: {
  "success": true,
  "prediction": "AI-generated weather prediction text...",
  "model_used": "llama2",
  "timestamp": "2026-01-28T21:54:08"
}
```

**POST /api/translate**
```json
Request: {
  "text": "Weather prediction...",
  "target_lang": "fr"
}
Response: {
  "translated_text": "Prévision météo..."
}
```

#### Report Endpoints

**POST /api/reports/save**
```json
Request: {
  "city": "Quebec City",
  "prediction": "AI prediction text...",
  "model": "llama2"
}
Response: {
  "success": true,
  "report_id": 1,
  "filename": "Quebec_2026-01-28_21-54-08_1.txt"
}
```

**GET /api/reports**
```json
Response: {
  "reports": [
    {
      "id": 1,
      "city": "Quebec City",
      "date": "2026-01-28 21:54:08",
      "filename": "Quebec_2026-01-28_21-54-08_1.txt"
    }
  ]
}
```

## Configuration

### Ollama Setup

1. **Install Ollama**: https://ollama.com/download
2. **Pull a model**:
   ```bash
   ollama pull llama2
   # or
   ollama pull mistral
   # or
   ollama pull glm-4
   ```
3. **Start Ollama** (runs on localhost:11434 by default)
4. **Configure Cloudma**: Enter URL in AI Options panel

### Environment Variables

Optional environment variables for advanced configuration:

```bash
# Custom Ollama URL
export OLLAMA_URL=http://192.168.1.100:11434

# API Key (if using authenticated Ollama)
export OLLAMA_API_KEY=your-api-key
```

## Building from Source

### Requirements

- Python 3.11+
- Windows 10/11 (for executable build)
- PyInstaller

### Build Steps

```bash
# 1. Install dependencies
pip install -r requirements.txt

# 2. Install PyInstaller
pip install pyinstaller

# 3. Build executable
python build_simple.py

# 4. Find executable in dist/Cloudma.exe
```

### Build Script Details

The [`build_simple.py`](build_simple.py) script:
- Bundles all Python dependencies
- Includes templates and static files
- Excludes unnecessary packages (reduces size)
- Creates single executable file
- Handles both frozen and development modes

**Excluded Packages** (to reduce size):
- transformers, torch, tensorflow (AI/ML libraries not needed)
- PyQt6, PySide2, PySide6 (duplicate Qt bindings)
- matplotlib, pandas, numpy, scipy (data science libraries)
- IPython, jedi, pytest (development tools)

## Why Ollama?

Cloudma uses Ollama for several key advantages:

1. **Privacy**: All AI processing happens locally - no data sent to external AI services
2. **Cost**: Free to use - no API costs for predictions
3. **Customization**: Use any model that fits your needs
4. **Speed**: Local inference is fast for text generation
5. **Offline**: Works without internet connection (after initial setup)

## Contest Submission

This project was created for the **Ollama Contest** to demonstrate:

- **Practical AI Integration**: Real-world use of local LLMs
- **Weather Prediction**: Novel application of AI to meteorology
- **Open Source**: Fully transparent, modifiable code
- **User-Friendly**: Professional desktop application
- **Multi-Language**: Accessibility through translation

### Innovation Points

1. **Historical Analysis**: Uses 10 days of past data for context
2. **Multi-Model Support**: Works with any Ollama model
3. **Smart Prompting**: Structured prompts for consistent predictions
4. **Translation**: Makes AI predictions accessible globally
5. **Report History**: Persistent storage of predictions

## License

**MIT License** - 100% Open Source

```
Copyright (c) 2026 Cloudma Team

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

## Acknowledgments

- **Open-Meteo** for free weather data API
- **Ollama** for local AI model hosting
- **Leaflet.js** for interactive maps
- **pywebview** for desktop window creation
- **Flask** for lightweight web framework

## Contact & Contributions

This is an open-source project. Contributions are welcome!

- **Issues**: Report bugs or request features
- **Pull Requests**: Submit improvements
- **Fork**: Create your own version

---

**Made with love and uh sweet from my ass for the Ollama gtc Contest 2026**









