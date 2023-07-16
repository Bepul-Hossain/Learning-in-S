const secreteRoute = (req, res, next) => {
    // console.log(req.id);
    res.send('This is the secret content. Only logged in users can see this!');
  };

module.exports = {
    secreteRoute
}