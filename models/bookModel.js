'use strict';

var mongoose = require('mongoose');
var bookModel = function(){
  var bookSchema = mongoose.Schema({
    title: String,
    category: String,
    description: String,
    author: String,
    publisher: String,
    price: Number,
    cover: String
  });

  //function to shorten text
  bookSchema.methods.truncText = function(length){
    return this.description.subString(0, length);
  }

  return mongoose.model('Book', bookSchema);
}

module.exports = new bookModel();
