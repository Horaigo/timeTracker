import React from 'react';
import './App.css';
import RegComp from './components/RegForm/RegForm';
import LoginComp from './components/LoginForm/LoginForm';
import MainFormComp from './components/MainForm/mainForm';
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
        <Route path="/login">
          <LoginComp/>
        </Route>
        <Route path="/register">
          <RegComp/>
        </Route>
        <Route path="/page">
          <MainFormComp/>
        </Route>
        <Redirect from="/" to="/login"/>
      </Switch>
    </Router>
  );
}

export default App;
