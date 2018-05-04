import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/home';
import News from './components/news';
import About from './components/about';
import Navbar from './components/navBarCust';
import Footer from './components/footer';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />  
          <Footer />      
        </div>
      </Router>
    );
  }
}

export default App;
