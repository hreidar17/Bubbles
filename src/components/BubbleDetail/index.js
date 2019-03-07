import React from 'react';
import { findBubbleProduct } from '../../services/BubbleService';

class BubbleDetail extends React.Component {
    componentDidMount() {
        var bubbleItem = findBubbleProduct(this.props.match.params.bubbleId).then(item => {
          this.setState({ bubbleItem: item });
        });
    }
    constructor() {
        super();
        this.state = {
            bubbleItem: {}
        };
    }


    render() {
      if(this.state.bubbleItem == null){
        return(
          <div style={{textAlign: 'center'}}>
            <h1>NOT FOUND!</h1>
          </div>
        );
      }
      //console.log("bubbles: "+this.state.bubbleItem);
        return (
            <div className="card border-dark mb-3">
        		<div className="card-body">
        			<h2 className="card-title">{this.state.bubbleItem.name}</h2>
                    <div className="card-text">
                        <img src={this.state.bubbleItem.image} alt="" style={{ width: '150px', float: 'left', padding: '10px'}} />
                        <p className="card-text">{this.state.bubbleItem.description}</p>
                        <p className="card-text">{this.state.bubbleItem.price} ISK</p>
                        <div>
                          <form>
                            <input type="button" value="Add to cart" />
                          </form>
                        </div>
                    </div>
        		</div>
        	</div>
        );
    }
};

export default BubbleDetail;
