import React from "react";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <ProtectedRoute path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <Route exact path="/">
          <Redirect exact from="/" to="dashboard" />
        </Route>
        <Route path="*">
          <Redirect from="/" to="dashboard" />
        </Route>
      </Switch>
      <div>
        <center>
       LINK :
          <br />
          <strong>
            <a href="https://seegatesite.com/implement-login-page-and-protected-route-reactjs">
              https://seegatesite.com/implement-login-page-and-protected-route-reactjs
            </a>
          </strong>
        </center>
      </div>
    </Router>
  );
}