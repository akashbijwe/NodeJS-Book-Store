'use strict';

var book = require('../models/bookModel');

module.exports = function (router) {
  router.get('/', function (req, res) {
    book.find({}, function(err, books){
      if(err){
        throw err;
      }else{
        var model = {
          books: books
        }
      }
      res.render('index', model);
    });
  });
};
