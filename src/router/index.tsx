import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Routes from './Routes';

interface RouteType {
	path: string,
	component: any
}

export default function RouterSwitch():React.ReactElement {
  return (
    <Switch>
      {Routes.map((route: RouteType) => (
        <Route
          path={route.path}
          component={route.component}
          key={route.path}
          exact
        />
      ))}
    </Switch>
  );
}
