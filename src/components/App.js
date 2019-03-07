//import React, { Component } from 'react';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Products from './Products';
import BubbleDetail from './BubbleDetail';
import BundleList from './BundlesList';
import About from './About';
import Cart from './Cart';
import Footer from './Footer';
import NoMatch from './NoMatch';
//import { BubbleProductProvider } from '../context/BubbleContext';
//import { ThemeProvider } from '../context/ThemeContext';


class App extends React.Component {

  render() {
    //console.log(this.state.bubbleProducts);
    return (
      <>
        <NavigationBar />
        <div className="container" style={{marginTop: '50px'}}>
          <Switch>
            <Route exact path="/" component={ Products } />
            <Route exact path="/products" render={ () => <Redirect to="/" /> } />
            <Route exact path="/bundles" component={ BundleList } />
            <Route exact path="/about" component={ About } />
            <Route exact path="/cart" component={ Cart } />
            <Route exact path="/products/:bubbleId" component={ BubbleDetail } />
            <Route component={NoMatch} />
          </Switch>
        </div>
        <Footer />
      </>
    )
  }
};

export default App;
