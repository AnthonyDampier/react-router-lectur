import React from 'react';
import './App.css';

// import router deconstructed components
import { HashRouter as Router, Route, Link} from 'react-router-dom';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../Animals/AnimalsDetails';


function App() {
  return (
    <div className="App">
      <h1>Single Page Applications!</h1>
      <Router>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/plants'>Plants</Link>
          </li>
          <li>
            <Link to='/animals'>Animals</Link>
          </li>
        </ul>
      </nav>
        {/* Routes go here */}
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/animals">
          <Animals/>
        </Route>

        {/* Detail page or detail View */}
        <Route exact path="/animals/:id">
          <AnimalDetail />
        </Route>


        <Route exact path="/plants">
          <Plants />
        </Route>
      </Router>
    </div>
  );
}

export default App;
