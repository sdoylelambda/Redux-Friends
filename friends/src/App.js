import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from "./components/Login";
import Friends from "./components/Friends";
import FriendsList from './components/FriendsList';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <header className="App-header">
            <h1>Friends</h1>
          </header>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/login" component={Login} />
          <Route exact path="/protected" component={FriendsList} />
        </div>
      </Router>
    </>
  );
}

export default App;
