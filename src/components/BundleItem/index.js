import React from 'react';
import PropTypes from 'prop-types';
import ListView from '../ListView';

const BundleItem = props => {
    const { id, name, items} = props;
    var ProductList = getProducts(items);
    console.log("productList: " + ProductList);
    

    return (
        <div className="card text-white bg-secondary mb-3">
            <div className="card-header">{ name } <i className="fa fa-2x fa-times" style={{ float: 'right' }}></i></div>
            <div className="card-body">
                <div className="card-text">
                    <div style={{float: 'left', padding: '0px 20px 0px 5px'}}></div>
                </div>
            </div>
        </div>
    );
};

BundleItem.propTypes = {
    id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
    name: PropTypes.string.isRequired
};

function getProducts(items) {
    var products = [];
    for(var i = 0; i < items.length ; i++) {
       products.push(ListView.getProduct(items[i])); 
    }
    return products;
};

export default BundleItem