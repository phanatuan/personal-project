import React, { Component } from "react";
import Profile from "../Profile";
import * as routes from "../constants/route";
import Navigation from "../Navigation";
import {BrowserRouter, Route} from 'react-router-dom';
import Organization from '../Organization';


export default class App extends Component {
  state = {
    organizationName: "the-road-to-learn-react"
  };

  onOrganizationSearch = value => {
    this.setState({ organizationName: value });
  };

  render() {
    const { organizationName } = this.state;
    return (
      <BrowserRouter>
        <div className='App'>
          <Navigation
            organizationName={organizationName}
            onOrganizationSearch={this.onOrganizationSearch}
          />
          <div className='App-main'>
            <Route
              exact
              path={routes.ORGANIZATION}
              component={() => (
                <div className='App-content_large-Headers'>
                  <Organization />
                </div>
              )}
            />
            <Route
              exact
              path={routes.PROFILE}
              component={() => (
                <div className='App-content_large-Headers'>
                  <Organization organizationName={organizationName} />
                </div>
              )}
            />
          </div>
        </div>
        <Profile />
      </BrowserRouter>
    );
  }
}
