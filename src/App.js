import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from 'react';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import logo from './logo.svg';
import './App.css';
import GNB from './components/GNB/GNB';
import InteractionClick from './pages/interaction/InteractionClick';
import InteractionDetail from './pages/interaction/InteractionDetail';
import Dashboard1 from 'pages/dashboard/Dashboard1';
import TestMuuri from 'pages/testPage/TestMuuri';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <GNB />
        </header>
        <div className="App-page">
          <Switch>
            <Route path="/click">
              <InteractionClick />
            </Route>
            <Route path="/detail">
              <InteractionDetail />
            </Route>
            <Route path="/dashboard">
              <Dashboard1 />
            </Route>
            <Route path="/dashboard1">
              <TestMuuri />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
