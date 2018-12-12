var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var obj = {Navn : 'Kasper', alder : 9}
  res.send(obj);
});

module.exports = router;
