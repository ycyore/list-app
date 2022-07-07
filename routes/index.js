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

module.exports = router;

