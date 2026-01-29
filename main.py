import threading
import webview
from app import app
import screeninfo

def get_screen_resolution():
    """Get the primary screen resolution"""
    try:
        screens = screeninfo.get_monitors()
        if screens:
            primary = screens[0]
            return primary.width, primary.height
    except:
        pass
    return 1400, 900  # Default fallback

def start_flask():
    app.run(host='127.0.0.1', port=5000, debug=False, use_reloader=False)

if __name__ == '__main__':
    # Get screen resolution
    screen_width, screen_height = get_screen_resolution()
    
    # Calculate window size (80% of screen, with min/max constraints)
    window_width = min(int(screen_width * 0.85), 1600)
    window_height = min(int(screen_height * 0.85), 1000)
    window_width = max(window_width, 1000)
    window_height = max(window_height, 700)
    
    # Start Flask server in a separate thread
    flask_thread = threading.Thread(target=start_flask, daemon=True)
    flask_thread.start()
    
    # Create desktop window with dynamic sizing
    window = webview.create_window(
        'Cloudma',
        'http://127.0.0.1:5000',
        width=window_width,
        height=window_height,
        min_size=(900, 650),
        resizable=True,
        maximized=False
    )
    
    webview.start()
