import './index.css';
import Home from './Home';
import GamesDetails from './GamesDetails';
import Test from './Test';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/test">
              <Test />
            </Route>
            <Route path="/games/:id">
              <GamesDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
