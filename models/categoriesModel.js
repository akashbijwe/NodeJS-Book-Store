'use strict';

var mongoose = require('mongoose');
var categoriesModel = function(){
  var categoriesSchema = mongoose.Schema({
    name: String
  });

  return mongoose.model('Categories', categoriesSchema);
}

module.exports = new categoriesModel();
