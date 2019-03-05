//import React, { Component } from 'react';
import React from 'react';
import NavigationBar from '../NavigationBar'

class App extends React.Component {
  componentDidMount(){
    fetch('http://localhost:3500/api/bubbles').then(resp => {
      if(resp.ok){
        return resp.json();
      }
    }).then(data => {
      console.log(data);
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      bubbleProducts: []
    };
  }

  render() {
    return (
      <>
        <NavigationBar />
        <div className="container">
          <h2>Bubble products</h2>
        </div>
      </>
    )
  }
};

export default App;
