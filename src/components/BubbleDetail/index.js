import React from 'react';
import { findBubbleProduct } from '../../services/BubbleService';

class BubbleDetail extends React.Component {
    componentDidMount() {
        findBubbleProduct(this.props.match.params.bubbleId).then(item => {
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
            <h1>Bubble Item not found</h1>
          </div>
        );
      }
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
