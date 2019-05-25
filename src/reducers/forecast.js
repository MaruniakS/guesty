import {CHANGE_SORT_TYPE, FETCH_WEATHER, SELECT_CITY} from "../actions/forecast";
import { SORT_TYPES } from "../constants/Forecast";

const initialState = {
  selectedCity: '',
  days: [],
  sortType: SORT_TYPES.DATE
};

export default (state = initialState, action) => {
  switch(action.type) {
    case SELECT_CITY:
      return {
          ...state,
          selectedCity: action.city
      };
    case FETCH_WEATHER:
      return {
          ...state,
          days: action.days
      };
    case CHANGE_SORT_TYPE:
      return {
          ...state,
          sortType: action.sortType
      };
    default:
      return state;
  }
};
