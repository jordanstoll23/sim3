import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import Search from './components/Search/Search';
import Profile from './components/Profile/Profile';

export default (
  <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/search" component={Search} />
      <Route path="/profile" component={Profile} />
  </Switch>
)