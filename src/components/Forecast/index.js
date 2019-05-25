import React, { Component } from 'react';
import moment from 'moment';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import Label from '@material-ui/core/Labe';
import { withStyles } from '@material-ui/core/styles';


import { CITIES } from "../../constants/Cities";

import './Forecast.scss';
import ForecastService from "../../services/Forecast";
import {SORT_TYPES} from "../../constants/Forecast";

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
    fontSize: 14,
  },
  title: {

  },
  temperature: {

  },
  icon: {

  },
  description: {
    'text-transform': 'capitalize',
    fontSize: 12
  },
  sorting: {
    fontSize: 14
  },
  humidity: {
    fontSize: 12,
    color: '#0000ff'
  }
});

const SORT_BUTTONS = [
  {
    label: 'By date',
    sortType: SORT_TYPES.DATE
  },
  {
    label: 'By low temperature',
    sortType: SORT_TYPES.LOW_TEMP
  },
  {
    label: 'By high temperature',
    sortType: SORT_TYPES.HIGH_TEMP
  },
  {
    label: 'By humidity',
    sortType: SORT_TYPES.HUMIDITY
  }
];

class Forecast extends Component {
  render () {
    const { classes } = this.props;
    const { selectedCity, days, sortType } = this.props;
    return <div className="forecast">
      <Container maxWidth="lg">
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <FormControl className="custom-form-control">
              <InputLabel htmlFor="city">Choose city</InputLabel>
              <Select
                  value={selectedCity}
                  onChange={this._onCityChange}
                  inputProps={{
                    name: 'name',
                    id: 'city-name',
                  }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {
                  Object.values(CITIES).map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)
                }
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          {
            days.map((d, index) => {
              const date = moment(d.dt_txt).format('ddd M/D');
              const { temp, humidity } = d.main;
              const { weather = []} = d;
              let description;
              if (weather.length) {
                description = weather[0].description;
              }
              return <Grid item xs={2} key={index}>
                <Card>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom align="center">
                      {date}
                    </Typography>
                    <Typography className={classes.temperature} gutterBottom align="center">
                      <span className={`${temp > 0 ? 'hot' : 'cold'}`}>{Math.round(temp)}</span>℃
                    </Typography>
                    <Typography className={classes.icon} gutterBottom align="center">
                      <i className={`wi ${ForecastService.getIcon(description)}`}/>
                    </Typography>
                    <Typography className={classes.description} gutterBottom align="center">
                      { description }
                    </Typography>
                    <Typography className={classes.humidity} gutterBottom align="center">
                      <i className="wi wi-sprinkle"/> { humidity }
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            })
          }
        </Grid>
        {
          (days.length &&  <Grid className="sorting-grid" container spacing={2}>
            <Grid item xs={12}>
              <Typography className={classes.sorting} gutterBottom>
                Sorting
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {
                SORT_BUTTONS.map((b, index) =>
                    <Button
                        key={index}
                        variant="outlined"
                        className={`custom-btn ${sortType === b.sortType ? 'active' : ''}`}
                        onClick={this._sort(b.sortType)}>
                      { b.label }
                    </Button>
                )
              }
            </Grid>
          </Grid>) || null
        }
      </Container>
    </div>
  }

  _onCityChange = e => {
    this.props.onCityChange(e.target.value);
  };

  _sort = type => () => {
    this.props.onChangeSortType(type);
  }
}

export default withStyles(styles)(Forecast);
