// Professional SVG weather icons
const weatherIcons = {
    0: { // Clear sky
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 1v2m0 18v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M1 12h2m18 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Clear sky'
    },
    1: { // Mainly clear
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 2v2m0 16v2M4.22 4.22l1.42 1.42m12.72 12.72l1.42 1.42M2 12h2m16 0h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M20 12a5 5 0 11-10 0 5 5 0 0110 0z" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.5"/></svg>`,
        desc: 'Mainly clear'
    },
    2: { // Partly cloudy
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" fill="none" stroke="currentColor" stroke-width="2"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M16 10a4 4 0 11-8 0 4 4 0 018 0z" fill="none" stroke="currentColor" stroke-width="1.5"/></svg>`,
        desc: 'Partly cloudy'
    },
    3: { // Overcast
        icon: `<svg viewBox="0 0 24 24"><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M8 14a4 4 0 118 0" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
        desc: 'Overcast'
    },
    45: { // Fog
        icon: `<svg viewBox="0 0 24 24"><path d="M4 14h16M4 18h16M4 10h16M4 6h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/></svg>`,
        desc: 'Fog'
    },
    48: { // Depositing rime fog
        icon: `<svg viewBox="0 0 24 24"><path d="M4 14h16M4 18h16M4 10h16M4 6h16" stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6"/><path d="M6 8l2-2m8 2l2-2M8 20l2 2m8-2l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        desc: 'Rime fog'
    },
    51: { // Light drizzle
        icon: `<svg viewBox="0 0 24 24"><path d="M8 14v4M12 14v4M16 14v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Light drizzle'
    },
    53: { // Moderate drizzle
        icon: `<svg viewBox="0 0 24 24"><path d="M7 14v4M10 14v4M13 14v4M16 14v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Moderate drizzle'
    },
    55: { // Dense drizzle
        icon: `<svg viewBox="0 0 24 24"><path d="M6 14v4M9 14v4M12 14v4M15 14v4M18 14v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Dense drizzle'
    },
    56: { // Light freezing drizzle
        icon: `<svg viewBox="0 0 24 24"><path d="M8 14v4M12 14v4M16 14v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 20l-2 2m4-2l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        desc: 'Freezing drizzle'
    },
    57: { // Dense freezing drizzle
        icon: `<svg viewBox="0 0 24 24"><path d="M7 14v4M10 14v4M13 14v4M16 14v4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10 20l-1 2m6-2l1 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        desc: 'Heavy freezing drizzle'
    },
    61: { // Slight rain
        icon: `<svg viewBox="0 0 24 24"><path d="M8 15v3M12 15v3M16 15v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Slight rain'
    },
    63: { // Moderate rain
        icon: `<svg viewBox="0 0 24 24"><path d="M7 15v3M10 15v3M13 15v3M16 15v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Moderate rain'
    },
    65: { // Heavy rain
        icon: `<svg viewBox="0 0 24 24"><path d="M6 15v3M9 15v3M12 15v3M15 15v3M18 15v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Heavy rain'
    },
    66: { // Light freezing rain
        icon: `<svg viewBox="0 0 24 24"><path d="M8 15v3M12 15v3M16 15v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M12 20l-2 2m4-2l2 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        desc: 'Freezing rain'
    },
    67: { // Heavy freezing rain
        icon: `<svg viewBox="0 0 24 24"><path d="M7 15v3M10 15v3M13 15v3M16 15v3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M10 20l-1 2m6-2l1 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`,
        desc: 'Heavy freezing rain'
    },
    71: { // Slight snow fall
        icon: `<svg viewBox="0 0 24 24"><circle cx="8" cy="16" r="1" fill="currentColor"/><circle cx="12" cy="18" r="1" fill="currentColor"/><circle cx="16" cy="16" r="1" fill="currentColor"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Slight snow'
    },
    73: { // Moderate snow fall
        icon: `<svg viewBox="0 0 24 24"><circle cx="7" cy="16" r="1" fill="currentColor"/><circle cx="11" cy="18" r="1" fill="currentColor"/><circle cx="15" cy="16" r="1" fill="currentColor"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="13" cy="14" r="1" fill="currentColor"/><circle cx="17" cy="18" r="1" fill="currentColor"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Moderate snow'
    },
    75: { // Heavy snow fall
        icon: `<svg viewBox="0 0 24 24"><circle cx="6" cy="16" r="1" fill="currentColor"/><circle cx="10" cy="18" r="1" fill="currentColor"/><circle cx="14" cy="16" r="1" fill="currentColor"/><circle cx="18" cy="18" r="1" fill="currentColor"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="12" cy="14" r="1" fill="currentColor"/><circle cx="16" cy="14" r="1" fill="currentColor"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Heavy snow'
    },
    77: { // Snow grains
        icon: `<svg viewBox="0 0 24 24"><circle cx="8" cy="16" r="0.8" fill="currentColor"/><circle cx="12" cy="17" r="0.8" fill="currentColor"/><circle cx="16" cy="16" r="0.8" fill="currentColor"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Snow grains'
    },
    80: { // Slight rain showers
        icon: `<svg viewBox="0 0 24 24"><path d="M8 15v2M12 15v2M16 15v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Rain showers'
    },
    81: { // Moderate rain showers
        icon: `<svg viewBox="0 0 24 24"><path d="M7 15v2M10 15v2M13 15v2M16 15v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Moderate showers'
    },
    82: { // Violent rain showers
        icon: `<svg viewBox="0 0 24 24"><path d="M6 15v2M9 15v2M12 15v2M15 15v2M18 15v2" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Heavy showers'
    },
    85: { // Slight snow showers
        icon: `<svg viewBox="0 0 24 24"><circle cx="8" cy="16" r="1" fill="currentColor"/><circle cx="12" cy="17" r="1" fill="currentColor"/><circle cx="16" cy="16" r="1" fill="currentColor"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Snow showers'
    },
    86: { // Heavy snow showers
        icon: `<svg viewBox="0 0 24 24"><circle cx="7" cy="16" r="1" fill="currentColor"/><circle cx="11" cy="17" r="1" fill="currentColor"/><circle cx="15" cy="16" r="1" fill="currentColor"/><circle cx="9" cy="14" r="1" fill="currentColor"/><circle cx="13" cy="14" r="1" fill="currentColor"/><circle cx="17" cy="18" r="1" fill="currentColor"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Heavy snow showers'
    },
    95: { // Thunderstorm
        icon: `<svg viewBox="0 0 24 24"><path d="M13 16l-4 6h6l-2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Thunderstorm'
    },
    96: { // Thunderstorm with slight hail
        icon: `<svg viewBox="0 0 24 24"><path d="M13 16l-4 6h6l-2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="9" cy="20" r="1" fill="currentColor"/><circle cx="17" cy="20" r="1" fill="currentColor"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Thunderstorm with hail'
    },
    99: { // Thunderstorm with heavy hail
        icon: `<svg viewBox="0 0 24 24"><path d="M13 16l-4 6h6l-2 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="8" cy="20" r="1" fill="currentColor"/><circle cx="12" cy="22" r="1" fill="currentColor"/><circle cx="16" cy="20" r="1" fill="currentColor"/><circle cx="18" cy="18" r="1" fill="currentColor"/><path d="M18 10h-1.26A8 8 0 105 16.25" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
        desc: 'Severe thunderstorm'
    }
};

// Theme management
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const themeText = document.getElementById('theme-text');

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    if (theme === 'light') {
        themeText.textContent = 'Dark';
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>';
    } else {
        themeText.textContent = 'Light';
        themeIcon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>';
    }
}

// Initialize map
let map;
let marker;
let currentLocation = null;

function initMap() {
    map = L.map('map').setView([40.7128, -74.0060], 5);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);
    
    map.on('click', function(e) {
        const { lat, lng } = e.latlng;
        document.getElementById('search-input').value = '';
        updateMarker(lat, lng);
        fetchWeather(lat, lng);
        fetchLocationName(lat, lng);
        currentLocation = { lat, lng, name: 'Selected Location' };
        updateAIControls();
    });
}

function updateMarker(lat, lng) {
    if (marker) {
        marker.setLatLng([lat, lng]);
    } else {
        marker = L.marker([lat, lng]).addTo(map);
    }
    map.setView([lat, lng], 10);
}

function getWeatherInfo(code) {
    return weatherIcons[code] || { 
        icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 8v8M8 12h8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`, 
        desc: 'Unknown' 
    };
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

function getDayName(dateStr) {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { weekday: 'short' });
}

async function fetchWeather(lat, lon) {
    showLoading();
    hideError();
    
    try {
        const response = await fetch(`/api/weather?lat=${lat}&lon=${lon}`);
        if (!response.ok) {
            throw new Error('Failed to fetch weather data');
        }
        
        const data = await response.json();
        displayWeather(data, lat, lon);
    } catch (error) {
        console.error('Error fetching weather:', error);
        showError();
    } finally {
        hideLoading();
    }
}

function displayWeather(data, lat, lon) {
    const current = data.current;
    const daily = data.daily;
    
    // Update location info
    document.getElementById('location-coords').textContent = 
        `Lat: ${lat.toFixed(4)}, Lon: ${lon.toFixed(4)}`;
    
    // Current weather
    const weatherInfo = getWeatherInfo(current.weather_code);
    
    document.getElementById('current-temp').textContent = Math.round(current.temperature_2m);
    document.getElementById('weather-icon').innerHTML = weatherInfo.icon;
    document.getElementById('weather-desc').textContent = weatherInfo.desc;
    document.getElementById('feels-like').textContent = `${Math.round(current.apparent_temperature)}°C`;
    document.getElementById('humidity').textContent = `${current.relative_humidity_2m}%`;
    document.getElementById('wind').textContent = `${current.wind_speed_10m} km/h`;
    document.getElementById('pressure').textContent = `${current.pressure_msl} hPa`;
    document.getElementById('precipitation').textContent = `${current.precipitation} mm`;
    document.getElementById('cloud-cover').textContent = `${current.cloud_cover}%`;
    
    // Show current weather card
    document.getElementById('current-weather').classList.remove('hidden');
    
    // Forecast
    const forecastList = document.getElementById('forecast-list');
    forecastList.innerHTML = '';
    
    for (let i = 0; i < daily.time.length; i++) {
        const dayWeather = getWeatherInfo(daily.weather_code[i]);
        const dayName = i === 0 ? 'Today' : getDayName(daily.time[i]);
        
        const forecastItem = document.createElement('div');
        forecastItem.className = 'forecast-item';
        forecastItem.innerHTML = `
            <span class="forecast-day">${dayName}</span>
            <span class="forecast-icon">${dayWeather.icon}</span>
            <div class="forecast-temps">
                <span class="temp-max">${Math.round(daily.temperature_2m_max[i])}°</span>
                <span class="temp-min">${Math.round(daily.temperature_2m_min[i])}°</span>
            </div>
        `;
        forecastList.appendChild(forecastItem);
    }
    
    // Show forecast card
    document.getElementById('forecast').classList.remove('hidden');
    
    // Show AI section
    document.getElementById('ai-section').classList.remove('hidden');
}

async function fetchLocationName(lat, lon) {
    try {
        const response = await fetch(`/api/reverse-geocode?lat=${lat}&lon=${lon}`);
        if (!response.ok) {
            throw new Error('Failed to fetch location name');
        }
        
        const data = await response.json();
        if (data.name) {
            document.getElementById('location-name').textContent = data.name;
            if (currentLocation) {
                currentLocation.name = data.name;
            }
        } else {
            document.getElementById('location-name').textContent = 'Selected Location';
        }
    } catch (error) {
        console.error('Error fetching location name:', error);
        document.getElementById('location-name').textContent = 'Selected Location';
    }
}

// Search functionality
let searchTimeout;

function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const searchResults = document.getElementById('search-results');
    
    searchInput.addEventListener('input', function() {
        clearTimeout(searchTimeout);
        const query = this.value.trim();
        
        if (query.length < 2) {
            searchResults.style.display = 'none';
            return;
        }
        
        searchTimeout = setTimeout(() => searchLocations(query), 300);
    });
    
    searchBtn.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query.length >= 2) {
            searchLocations(query);
        }
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value.trim();
            if (query.length >= 2) {
                searchLocations(query);
            }
        }
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            searchResults.style.display = 'none';
        }
    });
}

async function searchLocations(query) {
    const searchResults = document.getElementById('search-results');
    
    try {
        const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Search failed');
        }
        
        const data = await response.json();
        
        if (!data.results || data.results.length === 0) {
            searchResults.innerHTML = '<div class="search-result-item">No results found</div>';
            searchResults.style.display = 'block';
            return;
        }
        
        searchResults.innerHTML = '';
        data.results.forEach(result => {
            const item = document.createElement('div');
            item.className = 'search-result-item';
            item.innerHTML = `
                <div class="search-result-name">${result.name}</div>
                <div class="search-result-details">${result.admin1 || ''}, ${result.country}</div>
            `;
            item.addEventListener('click', function() {
                selectLocation(result);
                searchResults.style.display = 'none';
            });
            searchResults.appendChild(item);
        });
        
        searchResults.style.display = 'block';
    } catch (error) {
        console.error('Search error:', error);
    }
}

function selectLocation(location) {
    document.getElementById('location-name').textContent = location.name;
    document.getElementById('search-input').value = location.name;
    updateMarker(location.latitude, location.longitude);
    fetchWeather(location.latitude, location.longitude);
    currentLocation = { 
        lat: location.latitude, 
        lng: location.longitude, 
        name: location.name 
    };
    updateAIControls();
}

// AI Configuration
let ollamaConfig = {
    url: 'http://localhost:11434',
    apiKey: ''
};
let lastUsedModel = '';

async function loadSavedSettings() {
    try {
        const response = await fetch('/api/ollama/status');
        const data = await response.json();
        
        if (data.url) {
            ollamaConfig.url = data.url;
        }
        if (data.last_model) {
            lastUsedModel = data.last_model;
        }
        
        // Update input fields
        const urlInput = document.getElementById('ollama-url');
        const apiKeyInput = document.getElementById('ollama-api-key');
        if (urlInput) urlInput.value = ollamaConfig.url;
        if (apiKeyInput) apiKeyInput.value = ollamaConfig.apiKey;
        
    } catch (error) {
        console.error('Error loading saved settings:', error);
    }
}

function initAISettings() {
    const settingsToggle = document.getElementById('settings-toggle');
    const settingsPanel = document.getElementById('ai-settings-panel');
    const saveBtn = document.getElementById('save-ai-settings');
    const cancelBtn = document.getElementById('cancel-ai-settings');
    const testBtn = document.getElementById('test-ai-connection');
    const urlInput = document.getElementById('ollama-url');
    const apiKeyInput = document.getElementById('ollama-api-key');
    const testResult = document.getElementById('test-result');
    
    // Load saved settings from backend
    loadSavedSettings();
    
    settingsToggle.addEventListener('click', () => {
        settingsPanel.classList.toggle('hidden');
    });
    
    saveBtn.addEventListener('click', async () => {
        ollamaConfig.url = urlInput.value.trim() || 'http://localhost:11434';
        ollamaConfig.apiKey = apiKeyInput.value.trim();
        
        // Update backend config (saves to file)
        try {
            await fetch('/api/ollama/config', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(ollamaConfig)
            });
        } catch (error) {
            console.error('Failed to update backend config:', error);
        }
        
        settingsPanel.classList.add('hidden');
        
        // Only re-check if we don't already have a connection
        // (to avoid clearing models that were just fetched during testing)
        if (!ollamaConnected || availableModels.length === 0) {
            await checkOllamaStatus();
        }
    });
    
    cancelBtn.addEventListener('click', () => {
        urlInput.value = ollamaConfig.url;
        apiKeyInput.value = ollamaConfig.apiKey;
        testResult.classList.add('hidden');
        settingsPanel.classList.add('hidden');
    });
    
    testBtn.addEventListener('click', async () => {
        const url = urlInput.value.trim() || 'http://localhost:11434';
        testResult.classList.remove('hidden');
        testResult.textContent = 'Testing connection...';
        testResult.className = 'test-result';
        
        try {
            const response = await fetch('/api/ollama/test', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ url: url })
            });
            
            const data = await response.json();
            
            if (response.ok && data.status === 'connected') {
                testResult.textContent = `✓ Connected! Found ${data.models.length} models`;
                testResult.classList.add('success');
                
                // Update model dropdown in settings
                const aiModelSelect = document.getElementById('ai-model');
                aiModelSelect.innerHTML = '<option value="">Select model...</option>';
                data.models.forEach(model => {
                    const option = document.createElement('option');
                    option.value = model;
                    option.textContent = model;
                    // Select last used model if available
                    if (model === lastUsedModel) {
                        option.selected = true;
                    }
                    aiModelSelect.appendChild(option);
                });
                aiModelSelect.disabled = false;
                
                // Store models globally and mark as connected
                availableModels = data.models;
                ollamaConnected = true;
                
                // Update status indicator
                const statusDot = document.querySelector('.status-dot');
                const statusText = document.getElementById('ai-status-text');
                if (statusDot) {
                    statusDot.classList.add('connected');
                    statusDot.classList.remove('disconnected');
                }
                if (statusText) {
                    statusText.textContent = 'Connected';
                }
                
                // Update AI controls
                updateAIControls();
            } else {
                testResult.textContent = `✗ ${data.message || 'Connection failed'}`;
                testResult.classList.add('error');
            }
        } catch (error) {
            testResult.textContent = `✗ Connection failed: ${error.message}`;
            testResult.classList.add('error');
        }
    });
}

// AI Prediction functionality
let availableModels = [];
let ollamaConnected = false;

function initAI() {
    const aiPredictBtn = document.getElementById('ai-predict-btn');
    const aiModelSelect = document.getElementById('ai-model');
    
    aiPredictBtn.addEventListener('click', () => {
        if (currentLocation) {
            predictWeather();
        }
    });
    
    aiModelSelect.addEventListener('change', () => {
        updateAIControls();
    });
    
    // Check Ollama status on load
    checkOllamaStatus();
}

async function checkOllamaStatus() {
    const statusDot = document.querySelector('.status-dot');
    const statusText = document.getElementById('ai-status-text');
    const aiModelSelect = document.getElementById('ai-model');
    
    try {
        // First check if we can get models (this tests the connection)
        const response = await fetch('/api/ollama/models');
        const data = await response.json();
        
        if (response.ok && data.models && data.models.length > 0) {
            ollamaConnected = true;
            if (statusDot) {
                statusDot.classList.add('connected');
                statusDot.classList.remove('disconnected');
            }
            if (statusText) {
                statusText.textContent = 'Connected';
            }
            
            // Populate models
            availableModels = data.models;
            aiModelSelect.innerHTML = '<option value="">Select model...</option>';
            data.models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                // Select last used model if available
                if (model === lastUsedModel) {
                    option.selected = true;
                }
                aiModelSelect.appendChild(option);
            });
            aiModelSelect.disabled = false;
            
            // Update AI controls
            updateAIControls();
        } else {
            throw new Error('No models available');
        }
    } catch (error) {
        ollamaConnected = false;
        if (statusDot) {
            statusDot.classList.add('disconnected');
            statusDot.classList.remove('connected');
        }
        if (statusText) {
            statusText.textContent = 'Not Connected';
        }
        aiModelSelect.innerHTML = '<option value="">Connect to Ollama first</option>';
        aiModelSelect.disabled = true;
    }
}

async function fetchOllamaModels() {
    const aiModelSelect = document.getElementById('ai-model');
    
    try {
        const response = await fetch('/api/ollama/models');
        const data = await response.json();
        
        if (data.models && data.models.length > 0) {
            availableModels = data.models;
            
            // Populate dropdown
            aiModelSelect.innerHTML = '<option value="">Select model...</option>';
            data.models.forEach(model => {
                const option = document.createElement('option');
                option.value = model;
                option.textContent = model;
                // Select last used model if available
                if (model === lastUsedModel) {
                    option.selected = true;
                }
                aiModelSelect.appendChild(option);
            });
            
            aiModelSelect.disabled = false;
            
            // Update controls if last model was selected
            if (lastUsedModel) {
                updateAIControls();
            }
        } else {
            aiModelSelect.innerHTML = '<option value="">No models available</option>';
            aiModelSelect.disabled = true;
        }
    } catch (error) {
        console.error('Error fetching models:', error);
        aiModelSelect.innerHTML = '<option value="">Error loading models</option>';
        aiModelSelect.disabled = true;
    }
}

function updateAIControls() {
    const aiPredictBtn = document.getElementById('ai-predict-btn');
    const aiModelSelect = document.getElementById('ai-model');
    
    if (ollamaConnected && currentLocation && aiModelSelect.value) {
        aiPredictBtn.disabled = false;
    } else {
        aiPredictBtn.disabled = true;
    }
}

async function predictWeather() {
    if (!currentLocation) return;
    
    const aiModelSelect = document.getElementById('ai-model');
    const selectedModel = aiModelSelect.value;
    
    if (!selectedModel) {
        showAIError('Please select an AI model first');
        return;
    }
    
    showAILoading();
    hideAIError();
    hideAIPrediction();
    
    try {
        // First, fetch historical data
        const historicalResponse = await fetch(`/api/historical?lat=${currentLocation.lat}&lon=${currentLocation.lng}`);
        if (!historicalResponse.ok) {
            throw new Error('Failed to fetch historical data');
        }
        
        const historicalData = await historicalResponse.json();
        
        // Then, send to AI for prediction
        const predictionResponse = await fetch('/api/ollama/predict', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                historical_data: historicalData,
                model: selectedModel,
                location: currentLocation.name
            })
        });
        
        if (!predictionResponse.ok) {
            const errorData = await predictionResponse.json();
            throw new Error(errorData.error || 'Failed to get AI prediction');
        }
        
        const predictionData = await predictionResponse.json();
        displayAIPrediction(predictionData);
        
    } catch (error) {
        console.error('AI prediction error:', error);
        showAIError(error.message || 'Failed to generate AI prediction. Please try again.');
    } finally {
        hideAILoading();
    }
}

// Popup window state
let popupState = {
    isDragging: false,
    isMinimized: false,
    isMaximized: false,
    startX: 0,
    startY: 0,
    initialLeft: 0,
    initialTop: 0
};

// Store original prediction text for translation
let originalPredictionText = '';
let currentPredictionData = null;

function initPopupWindow() {
    const popup = document.getElementById('ai-prediction-popup');
    const header = document.getElementById('ai-popup-header');
    const closeBtn = document.getElementById('ai-popup-close');
    const minimizeBtn = document.getElementById('ai-popup-minimize');
    const maximizeBtn = document.getElementById('ai-popup-maximize');
    const saveBtn = document.getElementById('ai-popup-save');
    const translateBtn = document.getElementById('ai-translate-btn');
    const languageSelect = document.getElementById('ai-language');
    
    if (!popup || !header) return;
    
    // Save button functionality
    if (saveBtn) {
        saveBtn.addEventListener('click', async () => {
            if (!currentPredictionData) {
                alert('No prediction to save');
                return;
            }
            
            saveBtn.disabled = true;
            saveBtn.innerHTML = '<span>Saving...</span>';
            
            try {
                const response = await fetch('/api/reports/save', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        location: currentPredictionData.location,
                        model: currentPredictionData.model,
                        prediction: currentPredictionData.prediction
                    })
                });
                
                const data = await response.json();
                
                if (response.ok) {
                    saveBtn.innerHTML = `
                        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                            <polyline points="17 21 17 13 7 13 7 21"/>
                            <polyline points="7 3 7 8 15 8"/>
                        </svg>
                    `;
                    saveBtn.title = 'Saved!';
                    
                    // Refresh history if visible
                    const historyPanel = document.getElementById('history-panel');
                    if (historyPanel && !historyPanel.classList.contains('hidden')) {
                        loadHistory();
                    }
                    
                    setTimeout(() => {
                        saveBtn.title = 'Save Report';
                    }, 2000);
                } else {
                    alert('Failed to save: ' + (data.error || 'Unknown error'));
                }
            } catch (error) {
                console.error('Error saving report:', error);
                alert('Error saving report: ' + error.message);
            } finally {
                saveBtn.disabled = false;
                saveBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z"/>
                        <polyline points="17 21 17 13 7 13 7 21"/>
                        <polyline points="7 3 7 8 15 8"/>
                    </svg>
                `;
            }
        });
    }
    
    // Translation functionality
    if (translateBtn) {
        translateBtn.addEventListener('click', async () => {
            const contentDiv = document.getElementById('ai-prediction-content');
            const targetLang = languageSelect.value;
            
            if (!originalPredictionText || targetLang === 'en') {
                // If English selected, restore original
                if (originalPredictionText) {
                    let formattedContent = originalPredictionText
                        .replace(/## (.*)/g, '<h2>$1</h2>')
                        .replace(/### (.*)/g, '<h3>$1</h3>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n\n/g, '</p><p>')
                        .replace(/\n/g, '<br>');
                    contentDiv.innerHTML = `<p>${formattedContent}</p>`;
                }
                return;
            }
            
            translateBtn.disabled = true;
            translateBtn.innerHTML = '<span>Translating...</span>';
            
            try {
                const response = await fetch('/api/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text: originalPredictionText,
                        target_lang: targetLang
                    })
                });
                
                const data = await response.json();
                
                if (response.ok && data.translated_text) {
                    let formattedContent = data.translated_text
                        .replace(/## (.*)/g, '<h2>$1</h2>')
                        .replace(/### (.*)/g, '<h3>$1</h3>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                        .replace(/\n\n/g, '</p><p>')
                        .replace(/\n/g, '<br>');
                    contentDiv.innerHTML = `<p>${formattedContent}</p>`;
                    
                    if (data.note) {
                        // Show note if translation service not available
                        const noteDiv = document.createElement('div');
                        noteDiv.className = 'translation-note';
                        noteDiv.style.cssText = 'margin-top: 10px; padding: 8px; background: var(--bg-tertiary); border-radius: 4px; font-size: 0.75rem; color: var(--text-muted);';
                        noteDiv.textContent = data.note;
                        contentDiv.appendChild(noteDiv);
                    }
                } else {
                    console.error('Translation failed:', data.error);
                    alert('Translation failed: ' + (data.error || 'Unknown error'));
                }
            } catch (error) {
                console.error('Translation error:', error);
                alert('Translation error: ' + error.message);
            } finally {
                translateBtn.disabled = false;
                translateBtn.innerHTML = `
                    <svg viewBox="0 0 24 24" width="14" height="14">
                        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l.67-2h4.67l.66 2h2l-3.5-12zm-2.33 8L17 13l1.17 5h-2z"/>
                    </svg>
                    Translate
                `;
            }
        });
    }
    
    // Drag functionality
    header.addEventListener('mousedown', (e) => {
        if (popupState.isMaximized) return;
        
        popupState.isDragging = true;
        popupState.startX = e.clientX;
        popupState.startY = e.clientY;
        
        const rect = popup.getBoundingClientRect();
        popupState.initialLeft = rect.left;
        popupState.initialTop = rect.top;
        
        popup.style.cursor = 'grabbing';
    });
    
    document.addEventListener('mousemove', (e) => {
        if (!popupState.isDragging) return;
        
        const dx = e.clientX - popupState.startX;
        const dy = e.clientY - popupState.startY;
        
        popup.style.left = `${popupState.initialLeft + dx}px`;
        popup.style.top = `${popupState.initialTop + dy}px`;
        popup.style.transform = 'none';
    });
    
    document.addEventListener('mouseup', () => {
        if (popupState.isDragging) {
            popupState.isDragging = false;
            popup.style.cursor = 'default';
        }
    });
    
    // Close button
    closeBtn.addEventListener('click', () => {
        popup.classList.add('hidden');
        popupState.isMinimized = false;
        popupState.isMaximized = false;
        popup.classList.remove('minimized', 'maximized');
    });
    
    // Minimize button
    minimizeBtn.addEventListener('click', () => {
        popupState.isMinimized = !popupState.isMinimized;
        if (popupState.isMinimized) {
            popup.classList.add('minimized');
            popupState.isMaximized = false;
            popup.classList.remove('maximized');
        } else {
            popup.classList.remove('minimized');
        }
    });
    
    // Maximize button
    maximizeBtn.addEventListener('click', () => {
        popupState.isMaximized = !popupState.isMaximized;
        if (popupState.isMaximized) {
            popup.classList.add('maximized');
            popupState.isMinimized = false;
            popup.classList.remove('minimized');
        } else {
            popup.classList.remove('maximized');
            // Reset to center
            popup.style.left = '50%';
            popup.style.top = '50%';
            popup.style.transform = 'translate(-50%, -50%)';
        }
    });
}

function displayAIPrediction(data) {
    const popup = document.getElementById('ai-prediction-popup');
    const contentDiv = document.getElementById('ai-prediction-content');
    const modelTag = document.getElementById('ai-model-used');
    const languageSelect = document.getElementById('ai-language');
    const saveBtn = document.getElementById('ai-popup-save');
    
    // Store current prediction data for saving
    currentPredictionData = {
        location: data.location,
        model: data.model,
        prediction: data.prediction
    };
    
    // Store original text for translation
    originalPredictionText = data.prediction;
    
    // Reset language selector to English
    if (languageSelect) {
        languageSelect.value = 'en';
    }
    
    // Convert markdown-like formatting to HTML
    let formattedContent = data.prediction
        .replace(/## (.*)/g, '<h2>$1</h2>')
        .replace(/### (.*)/g, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    contentDiv.innerHTML = `<p>${formattedContent}</p>`;
    modelTag.textContent = data.model;
    
    // Show popup
    popup.classList.remove('hidden');
    popupState.isMinimized = false;
    popupState.isMaximized = false;
    popup.classList.remove('minimized', 'maximized');
    
    // Reset position to center if not already positioned
    if (!popup.style.left || popup.style.left === '50%') {
        popup.style.left = '50%';
        popup.style.top = '50%';
        popup.style.transform = 'translate(-50%, -50%)';
    }
}

function showAILoading() {
    document.getElementById('ai-loading').classList.remove('hidden');
}

function hideAILoading() {
    document.getElementById('ai-loading').classList.add('hidden');
}

function showAIError(message) {
    const errorDiv = document.getElementById('ai-error');
    document.getElementById('ai-error-text').textContent = message;
    errorDiv.classList.remove('hidden');
}

function hideAIError() {
    document.getElementById('ai-error').classList.add('hidden');
}

function hideAIPrediction() {
    const popup = document.getElementById('ai-prediction-popup');
    if (popup) {
        popup.classList.add('hidden');
    }
}

function showLoading() {
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('current-weather').classList.add('hidden');
    document.getElementById('forecast').classList.add('hidden');
    document.getElementById('ai-section').classList.add('hidden');
}

function hideLoading() {
    document.getElementById('loading').classList.add('hidden');
}

function showError() {
    document.getElementById('error').classList.remove('hidden');
}

function hideError() {
    document.getElementById('error').classList.add('hidden');
}

// History panel state
let historyState = {
    isDragging: false,
    startX: 0,
    startY: 0,
    initialLeft: 0,
    initialTop: 0
};

// Report History functionality
function initHistory() {
    const historyToggle = document.getElementById('history-toggle');
    const historyPanel = document.getElementById('history-panel');
    const historyHeader = document.querySelector('.history-header');
    const closeHistory = document.getElementById('close-history');
    const clearHistory = document.getElementById('clear-history');
    
    if (!historyToggle || !historyPanel) return;
    
    // Load saved position
    const savedPosition = localStorage.getItem('historyPanelPosition');
    if (savedPosition) {
        const pos = JSON.parse(savedPosition);
        historyPanel.style.left = pos.left;
        historyPanel.style.top = pos.top;
        historyPanel.style.right = 'auto';
    }
    
    // Drag functionality
    if (historyHeader) {
        historyHeader.addEventListener('mousedown', (e) => {
            // Don't drag if clicking on buttons
            if (e.target.closest('.history-btn')) return;
            
            historyState.isDragging = true;
            historyState.startX = e.clientX;
            historyState.startY = e.clientY;
            
            const rect = historyPanel.getBoundingClientRect();
            historyState.initialLeft = rect.left;
            historyState.initialTop = rect.top;
            
            historyPanel.style.cursor = 'grabbing';
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!historyState.isDragging) return;
            
            const dx = e.clientX - historyState.startX;
            const dy = e.clientY - historyState.startY;
            
            historyPanel.style.left = `${historyState.initialLeft + dx}px`;
            historyPanel.style.top = `${historyState.initialTop + dy}px`;
            historyPanel.style.right = 'auto';
        });
        
        document.addEventListener('mouseup', () => {
            if (historyState.isDragging) {
                historyState.isDragging = false;
                historyPanel.style.cursor = 'default';
                
                // Save position
                localStorage.setItem('historyPanelPosition', JSON.stringify({
                    left: historyPanel.style.left,
                    top: historyPanel.style.top
                }));
            }
        });
    }
    
    // Toggle history panel
    historyToggle.addEventListener('click', () => {
        historyPanel.classList.toggle('hidden');
        if (!historyPanel.classList.contains('hidden')) {
            loadHistory();
        }
    });
    
    // Close history panel
    closeHistory.addEventListener('click', () => {
        historyPanel.classList.add('hidden');
    });
    
    // Clear all history
    clearHistory.addEventListener('click', async () => {
        if (confirm('Are you sure you want to clear all report history?')) {
            try {
                const response = await fetch('/api/reports/clear', {
                    method: 'POST'
                });
                
                if (response.ok) {
                    loadHistory();
                }
            } catch (error) {
                console.error('Error clearing history:', error);
            }
        }
    });
    
    // Load history on init
    loadHistory();
}

async function loadHistory() {
    const historyList = document.getElementById('history-list');
    
    try {
        const response = await fetch('/api/reports');
        const data = await response.json();
        
        if (data.reports && data.reports.length > 0) {
            historyList.innerHTML = '';
            data.reports.forEach(report => {
                const item = createHistoryItem(report);
                historyList.appendChild(item);
            });
        } else {
            historyList.innerHTML = '<div class="history-empty">No reports yet. Generate a prediction to see it here.</div>';
        }
    } catch (error) {
        console.error('Error loading history:', error);
        historyList.innerHTML = '<div class="history-empty">Error loading history</div>';
    }
}

function createHistoryItem(report) {
    const item = document.createElement('div');
    item.className = 'history-item';
    
    // Get preview text (first 100 chars)
    const preview = report.prediction.substring(0, 100).replace(/[#*\n]/g, ' ') + '...';
    
    item.innerHTML = `
        <div class="history-item-header">
            <span class="history-item-location">${report.location}</span>
            <span class="history-item-date">${report.date} ${report.time}</span>
        </div>
        <div class="history-item-model">${report.model}</div>
        <div class="history-item-preview">${preview}</div>
        <div class="history-item-actions">
            <button class="history-item-btn view" data-id="${report.id}">View</button>
            <button class="history-item-btn delete" data-id="${report.id}">Delete</button>
        </div>
    `;
    
    // View button
    item.querySelector('.history-item-btn.view').addEventListener('click', (e) => {
        e.stopPropagation();
        viewReport(report);
    });
    
    // Delete button
    item.querySelector('.history-item-btn.delete').addEventListener('click', async (e) => {
        e.stopPropagation();
        if (confirm('Delete this report?')) {
            try {
                await fetch(`/api/reports/${report.id}`, {
                    method: 'DELETE'
                });
                loadHistory();
            } catch (error) {
                console.error('Error deleting report:', error);
            }
        }
    });
    
    // Click on item to view
    item.addEventListener('click', () => {
        viewReport(report);
    });
    
    return item;
}

function viewReport(report) {
    // Show report in popup
    const popup = document.getElementById('ai-prediction-popup');
    const contentDiv = document.getElementById('ai-prediction-content');
    const modelTag = document.getElementById('ai-model-used');
    
    // Store original text
    originalPredictionText = report.prediction;
    
    // Reset language selector
    const languageSelect = document.getElementById('ai-language');
    if (languageSelect) {
        languageSelect.value = 'en';
    }
    
    // Format content
    let formattedContent = report.prediction
        .replace(/## (.*)/g, '<h2>$1</h2>')
        .replace(/### (.*)/g, '<h3>$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/\n/g, '<br>');
    
    contentDiv.innerHTML = `<p>${formattedContent}</p>`;
    modelTag.textContent = report.model;
    
    // Show popup
    popup.classList.remove('hidden');
    popupState.isMinimized = false;
    popupState.isMaximized = false;
    popup.classList.remove('minimized', 'maximized');
    
    // Reset position
    popup.style.left = '50%';
    popup.style.top = '50%';
    popup.style.transform = 'translate(-50%, -50%)';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    initTheme();
    initMap();
    initSearch();
    initAISettings();
    initAI();
    initPopupWindow();
    initHistory();
    
    // No default location - wait for user to click on map or search
    document.getElementById('location-name').textContent = 'Select a location';
});
