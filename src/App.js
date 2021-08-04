import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import logo from './logo.svg';
import './App.css';
import GNB from './components/GNB/GNB';
import InteractionClick from './pages/interaction/InteractionClick';
import InteractionDetail from './pages/interaction/InteractionDetail';

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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
