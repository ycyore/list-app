var express = require('express');
var router = express.Router();

router.get('/index', function(req, res, next) {
  res.render('top', { title: 'Listo Apuri' });
});

module.exports = router;
