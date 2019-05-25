import { createSelector } from 'reselect';
import { sortBy } from 'lodash';
import { SORT_TYPES } from "../constants/Forecast";

const getSortType = (state) => state.sortType;
const getDays = (state) => state.days;

export const getSortedDays = createSelector(
    [ getSortType, getDays ],
    (sortType, days) => {
      switch (sortType) {
        case SORT_TYPES.DATE:
          // no need in special sort for date, as it is sorted by default by API
          return days;
        case SORT_TYPES.HIGH_TEMP:
          return sortBy(days, d => d.main.temp_max);
        case SORT_TYPES.LOW_TEMP:
          return sortBy(days, d => -d.main.temp_min);
        case SORT_TYPES.HUMIDITY:
          return sortBy(days, d => d.main.humidity);
        default:
          return days
      }
    }
);
