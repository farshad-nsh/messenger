import React, { Component } from 'react';
import Log from 'react-log';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './components/myRoutes/container.scss'
import   Channels from './components/myRoutes/Layer2/Channels'
class App extends Component {
  render() {
    return (
        <Router>
        <div className="con">
            <div className="side">
                <Link to="/channels">Channels</Link>
                <Link to="/2">2</Link>
                <Link to="/3">3</Link>
            </div>
            <Log>
                <h1>test it</h1>
            </Log>
            <Route exact path="/channels" component={Channels}/>
        </div>
        </Router>
    );
  }
}

export default App;
