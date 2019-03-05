//import React, { Component } from 'react';
import React from 'react';
import NavigationBar from '../NavigationBar';
import ListView from '../ListView';
import BubbleService from '../../services/BubbleService';


class App extends React.Component {
  componentDidMount() {
    BubbleService.getAllBubbleProducts().then(data => this.setState({ bubbleProducts: data }));
  }

  constructor(props) {
    super(props);
    this.state = {
      bubbleProducts: []
    };
  }

  render() {
    //console.log(this.state.bubbleProducts);
    return (
      <>
        <NavigationBar />
        <div className="container">
          <br />
          <h2>Bubble products</h2>
          <br />
          <ListView list={ this.state.bubbleProducts } />
        </div>
      </>
    )
  }
};

export default App;
