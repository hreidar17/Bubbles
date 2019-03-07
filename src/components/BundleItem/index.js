import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import ListView from '../ListView';
//import ListViewItem from '../ListViewItem';
import { findBubbleProduct } from '../../services/BubbleService'

function getProducts(arr) {
    var products = [];

    console.log('test')

    for(var i = 0; i < arr.length; i++){
      console.log('loop '+i+': '+arr[i])
      findBubbleProduct(arr[i]).then( item =>
        (products.push(item.name))
      );
    }

    for(var j = 0; j < products.length; j++){
      console.log('after fetch: '+products[j])
    }

    return products;
};

const BundleItem = props => {
    const { id, name, items} = props;
    //var ProductList = getProducts(items);

    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name } <i className="fa fa-2x fa-times" style={{ float: 'right' }}></i></div>
            <div className="card-body">
                <div className="card-text">
<<<<<<< HEAD
                    <div style={{float: 'left', padding: '0px 20px 0px 5px'}}></div>
=======
                {items.map(pl => <Link to={ "/products/" + pl }>Item {<br />}</Link>)}
>>>>>>> 5346731532a8a269c9cff3d1cb7ac124be6ef234
                </div>
            </div>
        </div>
    );
};

<<<<<<< HEAD
=======

>>>>>>> 5346731532a8a269c9cff3d1cb7ac124be6ef234
BundleItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired
};

<<<<<<< HEAD
function getProducts(items) {
    var products = [];
    for(var i = 0; i < items.length ; i++) {
       products.push(ListView.getProduct(items[i])); 
    }
    return products;
};

export default BundleItem
=======
export default BundleItem
>>>>>>> 5346731532a8a269c9cff3d1cb7ac124be6ef234
