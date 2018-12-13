var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* Viser konti som en HTML side */
router.get('/', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("BECBank");
      dbo.collection("Konti").find({}).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        var obj = {};
        obj.konti = result;
        console.log(obj)
        res.render('konti', obj);
        db.close();
      });
    });
  });

  /* Viser konti som JSON */
router.get('/json', function (req, res, next) {
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("BECBank");
    dbo.collection("Konti").find({}).toArray(function (err, result) {
      if (err) throw err;
      // console.log(result);
      var obj = {};
      obj.konti = result;
      res.json(obj);
      db.close();
    });
  });
});

  module.exports = router;