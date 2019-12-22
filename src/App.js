import React from 'react';
import './App.css';
import RegistrationComponent from './components/RegistrationComponent/RegistrationComponent';
import LoginComponent from './components/LoginComponent/LoginComponent';
import ErrorPageComponent from './components/ErrorPageComponent/ErrorPageComponent';
import MainPageComponent from './components/MainPageComponent/MainPageComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/registration">
            <RegistrationComponent/>
          </Route>
          <Route path="/login">
            <LoginComponent/>
          </Route>
          <Route path="/error">
            <ErrorPageComponent/>
          </Route>
          <Route path="/page">
            <MainPageComponent/>
          </Route>
          <Redirect from='/' to='/login' />
        </Switch>
    </Router>
  );
}

export default App;
