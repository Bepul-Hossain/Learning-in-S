const addToCart = (req, res, next) => {
    // console.log(req.id);
    res.send('Add to cart. Only secrete user can see it');
  };

module.exports = {
    addToCart
}