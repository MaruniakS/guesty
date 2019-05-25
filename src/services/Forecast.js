import axios from 'axios';
import { filter } from 'lodash';

import { fetchUrl } from "../constants/API";
import { errorHandler } from "./Helpers";
import {SKY_STATE_ICONS, SKY_STATES} from "../constants/Forecast";
import { CITY_INFO } from "../constants/Cities";

class Forecast {
  // get only results for 12:00 each day
  getMiddayForecast = data => filter(data.list, i => ~i.dt_txt.indexOf('12:00:00'));

  getIcon = skyState => {
    let icon = SKY_STATE_ICONS[skyState];
    if (!icon) {
      if (~skyState.indexOf('rain')) {
        icon = SKY_STATES.LIGHT_RAIN;
      } else if (~skyState.indexOf('snow')) {
        icon = SKY_STATES.SNOW
      }
    }

    return icon;
  };

  fetch = (city) => {
    return axios.get(fetchUrl(city, CITY_INFO[city].countryCode))
        .then(res => this.getMiddayForecast(res.data))
        .catch(errorHandler)
  }
}

const ForecastService = new Forecast();
export default ForecastService;
