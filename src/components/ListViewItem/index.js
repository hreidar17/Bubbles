import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { findBubbleProduct } from '../../services/BubbleService';

const ListViewItem = props => {
  //eslint-disable-next-line
  const { id, name, description, image, price } = props;
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-title"> <Link to={ "/products/" + id }>{ name }</Link></div>
      <div className="card-body">
        <div className="card-text">
          <div style={{float: 'left', padding: '0px 20px 0px 5px'}}><Link to={ "/products/" + id }><img height='100' src={ image } alt="" /></Link></div>
          <div><strong>Description: </strong> <span> { description }</span></div>
          <div><strong>Price: </strong> <span> { price } ISK</span></div>
          <div>
            <form>
              <input type="button" onClick = {
                function goToCart() {
                  toCart(id);
                }
              } value="Add to cart" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

ListViewItem.propTypes = {
  id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

function toCart(id){
  if(localStorage.getItem('cart') === null) {
    var item = [];
    item.push(id);
    localStorage.setItem('cart', item);
  } else {
    var item = [];
    item.push(localStorage.getItem('cart'));
    item.push(id);
    localStorage.setItem('cart', item);
  }
}


export default ListViewItem;

