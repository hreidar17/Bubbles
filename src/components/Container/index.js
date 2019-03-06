import React from 'react';
import Products from '../Products';

class Container extends React.Component {

  render() {
    //console.log(this.state.bubbleProducts);
    return (
      <>
        <div className="container">
          <Products />
        </div>
      </>
    )
  }
};

export default Container;
