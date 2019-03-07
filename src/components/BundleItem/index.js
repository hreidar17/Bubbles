import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { findBubbleProduct } from '../../services/BubbleService'

function getProducts(arr) {
    var products = [];
    //This function retrieves the items from the bundlelist
    for(var i = 0; i < arr.length; i++){
      findBubbleProduct(arr[i]).then( item =>
        (products.push({id: item.id, name: item.name, price: item}))
      );
    }

    return products;
};

const BundleItem = props => {
    const { name, items} = props;

    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name } <i className="fa fa-2x fa-times" style={{ float: 'right' }}></i></div>
            <div className="card-body">
                <div className="card-text">
                {/*
                  trying to use 'ProductList' array to store the items of a bundle
                  var ProductList = getProducts(items);

                  We could not resolve a issue when we tried to map the items, 
                  so instead here's a dumb looking link
                */}
                {items.map(pl => <Link to={ "/products/" + pl }>Item{<br />}</Link>)}
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
