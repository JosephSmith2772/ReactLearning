import React from 'react';
import './App.css';
import Nav from './Nav';
import About from './About';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Shop from './Shop';
import Weather from './Weather';
function App() {
  return (
    <Router>
    <div className="App">
     <Nav />
     <Switch>
     <Route path="/" exact component ={Home}/>
     <Route path="/about" component={About}/>
     <Route path="/shop" component={Shop}/>
     <Route path="/weather" component={Weather}/>
     </Switch>
    
    </div>
    </Router>
  );
}

export default App;

const Home = () =>(
  <div>
    <h1>Home Page</h1>
  </div>

)
