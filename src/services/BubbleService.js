const getAllBubbleProducts = () => {

  return fetch('http://localhost:3500/api/bubbles').then(resp => {
    if (resp.ok) { return resp.json(); }
  }).then(data => {
    if(!data) { return []; } //Ef ekkert finnst
    return data;
  });
};

const findBubbleProduct = (id) => {
  return fetch('http://localhost:3500/api/bubbles/'+id).then(resp => {
    if (resp.ok) { return resp.json(); }
  }).then(data => {
    if(!data) { return {}; } //Ef ekkert finnst
    return data;
  });
}

const getAllBundles = () => {
    return fetch('http://localhost:3500/api/bundles').then(resp => {
        if (resp.ok) {return resp.json(); }
    }).then(data => {

        if(!data) {return []; }
        return data;
    });
};

export default { getAllBubbleProducts };
export { findBubbleProduct };
export { getAllBundles };
