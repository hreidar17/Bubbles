import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';




const BundleItem = props => {
    const { name, items} = props;
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
