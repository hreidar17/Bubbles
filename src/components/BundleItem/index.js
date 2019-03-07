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
                {items.map(pl => <Link to={ "/products/" + pl }>Item {<br />}</Link>)}
                </div>
            </div>
        </div>
    );
};


BundleItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired
};

export default BundleItem
