const getAllBubbleProducts = () => {

  return fetch('http://localhost:3500/api/bubbles').then(resp => {
    if (resp.ok) { return resp.json(); }
  }).then(data => {
    if(!data) { return []; } //Ef ekkert finnst

    const bubbleProducts = data;

    return bubbleProducts;
  });
};

export default {
  getAllBubbleProducts
};
