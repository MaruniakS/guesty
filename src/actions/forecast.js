import ForecastService from "../services/Forecast";
import {STORAGE_CONSTANTS} from "../constants/Forecast";
import {CITY_INFO} from "../constants/Cities";

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const SELECT_CITY = 'SELECT_CITY';
export const CHANGE_SORT_TYPE = 'CHANGE_SORT_TYPE';

const fetchForecast = city => dispatch => {
  return ForecastService.fetch(city)
      .then(res => {
        dispatch({
          type: FETCH_WEATHER,
          days: res
        });
      })
};

export const selectCity = city => (dispatch, getState) => {
    if (!city) return;
    const { selectedCity } = getState().forecast;
    const cityData = {
      name: city,
      ...CITY_INFO[city]
    };
    localStorage.setItem(STORAGE_CONSTANTS.CITY, JSON.stringify(cityData));
    dispatch({
      type: SELECT_CITY,
      city: cityData
    });

    if (cityData.name !== (selectedCity && selectedCity.name)) {
      dispatch(fetchForecast(cityData))
    }
};

export const changeSortType = sortType => dispatch => {
  localStorage.setItem(STORAGE_CONSTANTS.SORT_TYPE, JSON.stringify(sortType));
  dispatch({
    type: CHANGE_SORT_TYPE,
    sortType
  })
};


