import json
import os
import sys
from datetime import datetime

# Get the base directory for config and reports
# When frozen, use the directory where the executable is located
if getattr(sys, 'frozen', False):
    # Running as compiled executable - use executable's directory
    base_dir = os.path.dirname(sys.executable)
else:
    # Running as normal Python script - use script's directory
    base_dir = os.path.dirname(os.path.abspath(__file__))

CONFIG_FILE = os.path.join(base_dir, 'cloudma_config.json')
REPORTS_FILE = os.path.join(base_dir, 'cloudma_reports.json')
REPORTS_DIR = os.path.join(base_dir, 'reports')

# Create reports directory if it doesn't exist
if not os.path.exists(REPORTS_DIR):
    os.makedirs(REPORTS_DIR)

def load_config():
    """Load configuration from file"""
    if os.path.exists(CONFIG_FILE):
        try:
            with open(CONFIG_FILE, 'r') as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading config: {e}")
    return {
        'ollama_url': 'http://localhost:11434',
        'ollama_api_key': '',
        'last_model': ''
    }

def save_config(config):
    """Save configuration to file"""
    try:
        with open(CONFIG_FILE, 'w') as f:
            json.dump(config, f, indent=2)
        return True
    except Exception as e:
        print(f"Error saving config: {e}")
        return False

def load_reports():
    """Load saved reports from file"""
    if os.path.exists(REPORTS_FILE):
        try:
            with open(REPORTS_FILE, 'r', encoding='utf-8') as f:
                return json.load(f)
        except Exception as e:
            print(f"Error loading reports: {e}")
    return []

def save_report(location, model, prediction):
    """Save a new report"""
    reports = load_reports()
    
    # Generate timestamp
    timestamp = datetime.now()
    date_str = timestamp.strftime('%Y-%m-%d')
    time_str = timestamp.strftime('%H-%M-%S')
    
    # Create safe filename
    safe_location = "".join(c for c in location if c.isalnum() or c in (' ', '-', '_')).rstrip()
    safe_location = safe_location.replace(' ', '_')
    
    report_id = len(reports) + 1
    filename = f"{safe_location}_{date_str}_{time_str}_{report_id}.txt"
    filepath = os.path.join(REPORTS_DIR, filename)
    
    # Save to individual text file
    try:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(f"Location: {location}\n")
            f.write(f"Model: {model}\n")
            f.write(f"Date: {date_str}\n")
            f.write(f"Time: {time_str}\n")
            f.write(f"Report ID: {report_id}\n")
            f.write("=" * 50 + "\n\n")
            f.write(prediction)
    except Exception as e:
        print(f"Error saving report file: {e}")
        return None
    
    report = {
        'id': report_id,
        'location': location,
        'model': model,
        'prediction': prediction,
        'timestamp': timestamp.isoformat(),
        'date': date_str,
        'time': time_str,
        'filename': filename
    }
    
    reports.insert(0, report)  # Add to beginning (newest first)
    
    # Keep only last 100 reports
    reports = reports[:100]
    
    # Save to JSON file
    try:
        with open(REPORTS_FILE, 'w', encoding='utf-8') as f:
            json.dump(reports, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"Error saving reports JSON: {e}")
    
    return report

def delete_report(report_id):
    """Delete a report by ID"""
    reports = load_reports()
    report_to_delete = next((r for r in reports if r['id'] == report_id), None)
    
    if report_to_delete:
        # Delete the text file
        if 'filename' in report_to_delete:
            filepath = os.path.join(REPORTS_DIR, report_to_delete['filename'])
            if os.path.exists(filepath):
                try:
                    os.remove(filepath)
                except Exception as e:
                    print(f"Error deleting report file: {e}")
    
    reports = [r for r in reports if r['id'] != report_id]
    
    # Reassign IDs
    for i, report in enumerate(reports):
        report['id'] = i + 1
    
    try:
        with open(REPORTS_FILE, 'w', encoding='utf-8') as f:
            json.dump(reports, f, indent=2, ensure_ascii=False)
        return True
    except Exception as e:
        print(f"Error deleting report: {e}")
        return False

def clear_all_reports():
    """Clear all reports"""
    # Delete all files in reports directory
    try:
        for filename in os.listdir(REPORTS_DIR):
            filepath = os.path.join(REPORTS_DIR, filename)
            if os.path.isfile(filepath):
                os.remove(filepath)
    except Exception as e:
        print(f"Error clearing report files: {e}")
    
    # Clear JSON file
    try:
        with open(REPORTS_FILE, 'w', encoding='utf-8') as f:
            json.dump([], f)
        return True
    except Exception as e:
        print(f"Error clearing reports: {e}")
        return False

def get_report_file_path(report_id):
    """Get the file path for a specific report"""
    reports = load_reports()
    report = next((r for r in reports if r['id'] == report_id), None)
    
    if report and 'filename' in report:
        return os.path.join(REPORTS_DIR, report['filename'])
    return None
