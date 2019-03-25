'use strict';
var book = require('../models/bookModel');
module.exports = function (router) {
  router.get('/', function (req, res) {
    res.render('index');
  });

  router.get('/details/:id', function (req, res) {
    //res.render('books/details');
    book.findOne({_id: req.params.id}, function(err, book){
      if(err){
        throw err;
      }else{
        var model = {
          book: book
        }
      }
      res.render('books/details', model);
    });
  });
};