import React from 'react';

import { Switch, Redirect, Route, BrowserRouter } from 'react-router-dom';

import {ROUTES} from "../constants/Routes";
import {PATHS} from "../constants/Paths";

const Routes = () => (
    <BrowserRouter>
      <Switch>
        {
          ROUTES.map((route, index) => <Route path={route.path} exact={true} component={route.component} key={index} /> )
        }
        <Redirect to={PATHS.INDEX} />
      </Switch>
    </BrowserRouter>
);

export default Routes;
