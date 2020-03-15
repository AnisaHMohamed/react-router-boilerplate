import React from "react";
import "./styles/App.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Heroes from "./Components/Heroes";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Hero from "./Components/Hero"
function App() {
  return (
    <Router> 
      <div className="App">
        <Nav />
        <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/heroes" exact component={Heroes}/>
        <Route path="/heroes/:id"  component={Hero}/>


        </Switch>
      
      </div>
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>An SuperWoman React Router and Api Boilerplate </h1>
    <img src="https://lh3.googleusercontent.com/6RQfISKG5oHKk3df3ZUQpoShSDH6PdXXUjh7Wu3EjJu9Z7XDjOpaO3AFaZKL9D3kxt05h0Q=s85" alt="super shero" width='500'  height='500'></img>
  </div>
)
export default App;
