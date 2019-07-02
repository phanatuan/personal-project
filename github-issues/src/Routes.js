import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import ViewIssue from "./ViewIssue";
import NoMatch from "./NoMatch";

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/view/issue/:id' component={ViewIssue} />
      <Route component={NoMatch} />
    </Switch>
  );
};

export default Routes;
