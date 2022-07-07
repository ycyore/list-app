const { response } = require('express');
var express = require('express');
var router = express.Router();
var database = require('../database');

router.get('/', function(req, res, next) {
  var query = "SELECT * FROM items";
  database.query(query, function(error, data){
    if(error){
      throw error;
    }
    else
    {
      console.log(data);
      res.render('index', {title: 'Your list', action: 'list', items: data });
    }
  });
});

router.get('/add', function(req, res, next){
  res.render('index', {title: 'Insert Data into MySQL', action: 'add'}); 
});

router.post('/add_data', function(req, res, next){
  var name = req.body.name;
  var query = `
    INSERT INTO items
    (name)
    VALUES ("${name}")
  `;
  database.query(query, function(error, data){
    if(error)
    {
      throw error;
    }
    else
    {
      res.redirect("/index");
    }
  });
});

module.exports = router;
