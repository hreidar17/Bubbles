import React from 'react';
import ListView from '../ListView';
import BubbleService from '../../services/BubbleService';

class Products extends React.Component {
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
        <div>
          <h2 style={{textAlign: 'center'}}>Bubble products</h2>
          <br />
          <ListView list={ this.state.bubbleProducts } />
        </div>
      </>
    )
  }
};

export default Products;
