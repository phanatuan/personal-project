import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './View/Home';
import AddRobot from './AddRobot';
import EditRobotView from './View/EditRobotView';
import ViewRobotView from './View/ViewRobotView';
import NoMatch from './View/NoMatch';

const Routes = () => {
  return (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/add/' component={AddRobot} />
        <Route path='/edit/:id' component={EditRobotView} />
        <Route path='/view/:id' component={ViewRobotView} />
        <Route component={NoMatch} />
    </Switch>
  )
}

export default Routes;
