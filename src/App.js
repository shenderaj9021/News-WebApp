import logo from './logo.svg';
import './App.css';


import React, { Component } from 'react'
import Navbar from './Component/Navbar';
import News from './Component/News';
import spiner from './Component/Spiner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  
  render() {
    return (
      <div> 
        <Router>
        <Navbar />
        <Switch >
        
         <Route path="/"> <News  key="general" country="in" pagesize="10" category="sports"/></Route>
         <Route path="/buisness"> <News key="buisness" country="in" pagesize="10" category="buisness"></News></Route>
         <Route path="/entertainment"> <News key="entertainment" country="in" pagesize="10" category="entertainment"></News></Route>
         <Route path="/buisness"> <News key="general" country="in" pagesize="10" category="general"></News></Route>
         <Route path="/health"> <News key="health" country="in" pagesize="10" category="health"></News></Route>
         <Route path="/science"> <News key="science" country="in" pagesize="10" category="science"></News></Route>
         <Route path="/sports"> <News key="sports" country="in" pagesize="10" category="sports"></News></Route>
         <Route path="/technology"> <News  key="technology" country="in" pagesize="10" category="technology"></News></Route>
        </Switch>
        
        </Router>
      </div>
    )
  }
}

