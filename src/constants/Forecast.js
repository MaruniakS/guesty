export const SKY_STATES = {
  CLEAR_SKY: 'clear sky',
  FEW_CLOUDS: 'few clouds',
  SCATTERED_CLOUDS: 'scattered clouds',
  BROKEN_CLOUDS: 'broken clouds',
  OVERCAST_CLOUDS: 'overcast clouds',
  LIGHT_RAIN: 'light rain',
  MODERATE_RAIN: 'moderate rain',
  HEAVY_RAIN: 'heavy intensity rain',
  SNOW: 'snow'
};

export const SKY_STATE_ICONS = {
  [SKY_STATES.CLEAR_SKY]: 'wi-day-sunny',
  [SKY_STATES.FEW_CLOUDS]: 'wi-day-cloudy',
  [SKY_STATES.BROKEN_CLOUDS]: 'wi-day-cloudy-windy',
  [SKY_STATES.SCATTERED_CLOUDS]: 'wi-day-cloudy-windy',
  [SKY_STATES.OVERCAST_CLOUDS]: 'wi-cloudy',
  [SKY_STATES.LIGHT_RAIN]: 'wi-day-hail',
  [SKY_STATES.MODERATE_RAIN]: 'wi-rain',
  [SKY_STATES.HEAVY_RAIN]: 'wi-thunderstorm',
  [SKY_STATES.SNOW]: 'wi-snow'
};

export const SORT_TYPES = {
  DATE: 'date',
  HIGH_TEMP: 'high',
  LOW_TEMP: 'low',
  HUMIDITY: 'humidity'
};

export const STORAGE_CONSTANTS = {
  CITY: 'selectedCity',
  SORT_TYPE: 'sortType'
};
