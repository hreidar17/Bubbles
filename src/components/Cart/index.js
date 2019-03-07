import React from 'react'

import { findBubbleProduct } from '../../services/BubbleService';

const Cart = () => {
var itemsId = [];
var items = [];
itemsId.push(localStorage.getItem('cart'));

  for(var i = 0; i < itemsId.length ; i++) {
   items.push(findBubbleProduct(itemsId[i]));
  }
  console.log(items);

  return (
    <div>
      <br />
      <h1>Cart</h1>

    </div>
  )
};

export default Cart;