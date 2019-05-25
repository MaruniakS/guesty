// Stored as constant just to save time
export const API_KEY = '5f87e8fbf25d5545dd7207e506b25c91';

export const BASE_API_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const fetchUrl = (cityName, countryCode) => `${BASE_API_URL}?q=${cityName},${countryCode}&appid=${API_KEY}&units=metric`;
