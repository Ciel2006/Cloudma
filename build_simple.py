#!/usr/bin/env python3
"""
Simple PyInstaller build script for Cloudma
Creates a single executable with minimal dependencies
"""

import PyInstaller.__main__
import os
import shutil
import sys

# Get the current directory
current_dir = os.path.dirname(os.path.abspath(__file__))

# Clean previous builds
for folder in ['dist', 'build']:
    if os.path.exists(folder):
        shutil.rmtree(folder)
        print(f"Cleaned {folder}/")

# Build command arguments - single file mode
args = [
    'main.py',  # Main entry point
    '--name=Cloudma',  # Executable name
    '--onefile',  # Single executable file
    '--windowed',  # No console window
    '--clean',  # Clean build
    
    # Add data files (templates and static folders)
    '--add-data=templates;templates',
    '--add-data=static;static',
    
    # Exclude problematic/large packages not needed for the app
    '--exclude-module=transformers',
    '--exclude-module=torch',
    '--exclude-module=tensorflow',
    '--exclude-module=PyQt6',
    '--exclude-module=PySide2',
    '--exclude-module=PySide6',
    '--exclude-module=matplotlib',
    '--exclude-module=sklearn',
    '--exclude-module=pandas',
    '--exclude-module=numpy',
    '--exclude-module=scipy',
    '--exclude-module=IPython',
    '--exclude-module=jedi',
    '--exclude-module=pytest',
    '--exclude-module=pygame',
    
    # Hidden imports for Flask and dependencies
    '--hidden-import=flask',
    '--hidden-import=werkzeug',
    '--hidden-import=jinja2',
    '--hidden-import=markupsafe',
    '--hidden-import=itsdangerous',
    '--hidden-import=click',
    '--hidden-import=webview',
    '--hidden-import=screeninfo',
    '--hidden-import=requests',
    '--hidden-import=deep_translator',
    '--hidden-import=urllib3',
    '--hidden-import=charset_normalizer',
    '--hidden-import=certifi',
    '--hidden-import=idna',
    
    # Webview hidden imports
    '--hidden-import=webview.platforms.winforms',
    '--hidden-import=pythonnet',
    '--hidden-import=clr',
    
    # Output directory
    '--distpath=dist',
    '--workpath=build',
    
    # Spec file path
    '--specpath=.',
]

# Run PyInstaller
print("\nBuilding Cloudma executable...")
print("This may take a few minutes...\n")

PyInstaller.__main__.run(args)

print("\n" + "=" * 50)
print("Build complete!")
print("=" * 50)
print(f"\nExecutable location: {os.path.join(current_dir, 'dist', 'Cloudma.exe')}")
print("\nTo distribute:")
print("1. Copy Cloudma.exe from the 'dist' folder")
print("2. Users can run it directly - no Python installation needed")
print("\nNote: The first run may take longer as it extracts files.")
