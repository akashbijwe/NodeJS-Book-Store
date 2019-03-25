'use strict';
var Books = require('../models/bookModel');
var Categories = require('../models/categoriesModel');

module.exports = function (router) {
 
  router.get('/', function (req, res) {
    res.render('manage/index');
  });

  router.get('/books', function (req, res) {
    //res.render('manage/books/index');
    Books.find({}, function(err, books){
      if(err){
        throw err;
      }else{
        var model = {
          books: books
        }
      }
      res.render('manage/books/index', model);
    })
  });

  router.get('/categories', function (req, res) {
    Categories.find({}, function(err, categories){
      if(err){
        throw err;
      }else{
        var model = {
          categories: categories
        }
      }
      console.log('categories model', model);
      res.render('manage/categories/index', model);
    })
  });

   router.get('/books/add', function (req, res) {
    /*Categories.find({}, function(err, categories){
      if(err){
        console.log(err);
      }else{
        var model = {
          categories: categories
        }
      }
      res.render('manage/books/add', model);
    });*/

    res.render('manage/books/add');
  });

  router.post('/books/add', function (req, res) {
    var title = req.body.title;
    var category = req.body.category;
    var author = req.body.author;
    var publisher = req.body.publisher;
    var price = req.body.price;
    var description = req.body.description;
    var cover = req.body.cover;

    var newBook = new Books({
      title : title,
      category : category,
      author : author,
      publisher : publisher,
      price : price,
      description : description,
      cover : cover
    });

    newBook.save(function(err){
      if(err){
        throw err;
      }else{
        //req.flash('success', 'Book added');
        res.location('/manage/books');
        res.redirect('/manage/books');
      }
      
    })
  });

   router.get('/books/edit/:id', function (req, res) {
    
    Books.findOne({_id: req.params.id}, function(err, books){
      if(err){
        throw err;
      }else{
        var model = {
          books: books
        }
      }
      console.log("model", model)
      res.render('manage/books/edit', model);
    })
  });

  router.post('/books/edit/:id', function(req,res){
    var title = req.body.title;
    var category = req.body.category;
    var author = req.body.author;
    var publisher = req.body.publisher;
    var price = req.body.price;
    var description = req.body.description;
    var cover = req.body.cover;
    
    Books.update({id: req.params._id},{
      title: title,
      category : category,
      author : author,
      publisher : publisher,
      price : price,
      description : description,
      cover : cover
    }, function(err){
      if(err){
        throw err;
      }else{
        //req.flash('success', 'Book updated');
        res.location('/manage/books');
        res.redirect('/manage/books');
      }
    });
  });

  // router.delete('/books/delete/:id', function(req, res){
  //   console.log("req received", req.params.id);
  //   Books.remove({_id: req.params.id}, function(err){
  //     if(err){
  //       throw err;
  //       console.log("error", err);
  //     }else{
  //       //res.location('/events');
  //       //res.redirect('/events');
  //       console.log('Book deleted');
  //     }
  //   });
  // });

  router.delete('/books/selete/:id', function(req, res){
    Books.remove({_id: req.params.id}, function(err){
      if(err){
        console.log(err);
      }
      res.location('/manage/books');
      res.redirect('/manage/books');
    });
  });

  router.get('/categories/add', function(req, res){
    res.render('manage/categories/add');
  });

  router.post('/categories/add', function(req, res){
    var name = req.body.name;
    var newCategories = new Categories({
      name: name
    });

    newCategories.save(function(err){
      if(err){
        throw err;
      }else{
        res.location('/manage/categories');
        res.redirect('/manage/categories');
      }
    })
  });


  router.get('/categories/edit/:id', function(req, res){
    Categories.findOne({_id: req.params.id}, function(err, category){ 
      if(err){
        throw err;
      }else{
        var model = {
          category: category
        }
        console.log("model", model);
        res.render('manage/categories/edit', model);
      }
    })
    
  });
};