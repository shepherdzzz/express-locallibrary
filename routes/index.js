var express = require('express');
var router = express.Router();

// GET 请求主页
router.get('/', function(req, res) {
  res.redirect('/catalog');
});

module.exports = router;
