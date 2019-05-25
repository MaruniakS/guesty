import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { selectCity, changeSortType } from "../../actions/forecast";

import Forecast from "../../components/Forecast";
import {getSortedDays} from "../../selectors/forecast";
import {STORAGE_CONSTANTS} from "../../constants/Forecast";

class ForecastContainer extends Component {
  render () {
    const { selectedCity, sortType, days, actions } = this.props;
    return <div className="forecast-container">
      <Forecast
          selectedCity={selectedCity}
          sortType={sortType}
          days={days}
          onCityChange={actions.selectCity}
          onChangeSortType={actions.changeSortType} />
    </div>
  }

  componentDidMount () {
    const { selectCity, changeSortType } = this.props.actions;
    const selectedCity = JSON.parse(localStorage.getItem(STORAGE_CONSTANTS.CITY));
    const sortType = JSON.parse(localStorage.getItem(STORAGE_CONSTANTS.SORT_TYPE));

    selectedCity && selectCity(selectedCity.name);
    sortType && changeSortType(sortType);
  }
}

const mapStateToProps = ({ forecast }) => ({
  ...forecast,
  days: getSortedDays(forecast)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    selectCity,
    changeSortType
  }, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(ForecastContainer);
