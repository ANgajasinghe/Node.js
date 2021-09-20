const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

const products = [];

router.get('/add-product', (req, res, next) => {

  res.sendFile(path.join(rootDir, 'views','add-product.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  
  products.push({title:req.body.title})
  res.redirect('/');
});


// here we can export our whole module as well 
//module.exports = router;

// or export multiple values from this .js file.
exports.routes = router;
exports.products = products;