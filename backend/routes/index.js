var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.sendfile(path.join(__dirname, '../public/index.html'))
  //res.render('index', { title: 'Express' });
});
router.get('/live', function (req, res, next) {
  res.sendfile(path.join(__dirname, '../public/live' + req.query.url + '.html'))
});

module.exports = router;
