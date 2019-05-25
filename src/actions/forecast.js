import ForecastService from "../services/Forecast";
import {STORAGE_CONSTANTS} from "../constants/Forecast";

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
    localStorage.setItem(STORAGE_CONSTANTS.CITY, JSON.stringify(city));
    dispatch({
      type: SELECT_CITY,
      city
    });

    if (city !== selectedCity) {
      dispatch(fetchForecast(city))
    }
};

export const changeSortType = sortType => dispatch => {
  localStorage.setItem(STORAGE_CONSTANTS.SORT_TYPE, JSON.stringify(sortType));
  dispatch({
    type: CHANGE_SORT_TYPE,
    sortType
  })
};


