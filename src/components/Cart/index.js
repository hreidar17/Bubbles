import React from 'react';


const Cart = () => {


  return (
    <div>
    <h2>Cart</h2>
      <div className="card text-white bg-secondary mb-3">
          <div className="card-body">
              <div className="card-text">
                  <p>List goes here! </p>
                  <p>note: LocalStorage saves what is supposed to be in cart</p>
              </div>

              <input type="button" onClick = {
                function clear() {
                  clearCart();
                }
              } value="Clear cart" />
          </div>
      </div>
    </div>

  );
};


function clearCart(){
    var item = [];
    localStorage.setItem('cart', item);
}

export default Cart;