import React from "react";
import "./styles/App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Shop from "./Components/Shop";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/shop" component={Shop}/>
        </Switch>
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page </h1>
  </div>
)
export default App;
