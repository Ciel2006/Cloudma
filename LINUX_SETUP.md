# Linux Setup Guide for Cloudma

This guide helps you set up Cloudma on Linux systems.

## Prerequisites

### System Requirements
- Python 3.11 or higher
- GTK3 libraries
- WebKit2GTK
- Ollama (for AI features)

### Install System Dependencies

#### Ubuntu/Debian
```bash
sudo apt update
sudo apt install python3-gi python3-gi-cairo gir1.2-gtk-3.0 gir1.2-webkit2-4.0
```

#### Fedora
```bash
sudo dnf install python3-gobject gtk3 webkit2gtk3
```

#### Arch Linux
```bash
sudo pacman -S python-gobject gtk3 webkit2gtk
```

## Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ciel2006/Cloudma.git
   cd Cloudma
   ```

2. **Create virtual environment (recommended)**
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. **Install Python dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Install Ollama (for AI features)**
   ```bash
   curl -fsSL https://ollama.com/install.sh | sh
   ```

5. **Pull an AI model**
   ```bash
   ollama pull llama2
   # or
   ollama pull mistral
   ```

6. **Run the application**
   ```bash
   python3 main.py
   ```

## Troubleshooting

### Issue: "No module named 'gi'"
**Solution**: Install GTK bindings
```bash
sudo apt install python3-gi python3-gi-cairo
```

### Issue: "TemplateNotFound: index.html"
**Solution**: Make sure you're running from the project root directory
```bash
cd /path/to/Cloudma
python3 main.py
```

### Issue: Webview window doesn't open
**Solution**: Install WebKit2GTK
```bash
sudo apt install gir1.2-webkit2-4.0
```

### Issue: "Cannot open display"
**Solution**: If running over SSH, enable X11 forwarding
```bash
ssh -X user@host
```

## Alternative: Run in Browser

If you have issues with the desktop window, you can run just the Flask server:

```bash
python3 -c "from app import app; app.run(host='0.0.0.0', port=5000)"
```

Then open http://localhost:5000 in your browser.

## Building Executable on Linux

To create a Linux executable:

```bash
pip install pyinstaller
python3 build_simple.py
```

The executable will be in `dist/Cloudma`.

## Notes

- The application uses GTK3 for the desktop window on Linux
- Make sure you have a display server running (X11 or Wayland)
- For headless servers, use the browser mode instead
