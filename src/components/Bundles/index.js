import React from 'react'
import PropTypes from 'prop-types';
import BundleItem from '../BundleItem';


const Bundles = props => {
  const {list} = props;
  return list.map(item => <BundleItem key={ item.id } { ...item }/>);

};

Bundles.PropTypes = {
  list: PropTypes.array.isRequired
};


export default Bundles
