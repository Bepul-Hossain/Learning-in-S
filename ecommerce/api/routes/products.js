const products = (req, res, next) => {
    // console.log(req.id);
    res.send('All products. Only secrete user can see it');
  };

module.exports = {
    products
}