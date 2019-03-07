import React from 'react';
import PropTypes from 'prop-types';
import ListViewItem from '../ListViewItem';
var listlist;

const ListView = props => {
  const { list } = props;
  listlist = list;
  return list.map(item => <ListViewItem key={ item.id } { ...item } />);
};

ListView.propTypes = {
  list: PropTypes.array.isRequired
};

function getProduct(i) {
  return listlist[i];
}

export default ListView
