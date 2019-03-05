import React from 'react',
import PropTypes from 'prop-types';

const ListViewItem = props => {
  const { name, description, price } = props;
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">{ name } <i className="fa fa-2x fa-times" style={{ float: right}}></i></div>
      <div className="card-body">
        <h4 className="card-text">Bubble product</h4>
        <div className="card-text">
          <div><strong>Description: </strong> <span> { description }</span></div>
          <div><strong>Price: </strong> <span> { price } ISK</span></div>
        </div>
      </div>
    </div>
  );
};

ListViewItem.propTypes = {
  id: PropTypes.oneOfType([ PropTypes.string, PropTypes.number ]).isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default ListViewItem;