//import React, { Component } from 'react';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Products from './Products';
import BubbleDetail from './BubbleDetail';
import Bundles from './Bundles';
import About from './About';
import { BubbleProductProvider } from '../context/BubbleContext';
import { ThemeProvider } from '../context/ThemeContext';


class App extends React.Component {

  render() {
    //console.log(this.state.bubbleProducts);
    return (
      <>
        <NavigationBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={ Products } />
            <Route exact path="/products" render={ () => <Redirect to="/" /> } />
            <Route exact path="/bundles" component={ Bundles } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/:bubbleId" component={ BubbleDetail } />
          </Switch>
        </div>
      </>
    )
  }
};

export default App;
