var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/* Viser pærerne som en HTML side */
router.get('/', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("myDB");
      dbo.collection("customers").find({}).toArray(function (err, result) {
        if (err) throw err;
        //console.log(result);
        var obj = {};
        obj.customers = result;
        
        res.render('customers', obj);
        db.close();
      });
    });
  });


/* GET users listing. 
router.get('/json', function (req, res, next) {
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        //var obj = {Navn : 'Kasper', alder : 9}
        var dbo = db.db("myDB");
        dbo.collection("customers").find({}).toArray(function (err, result) {
            if (err) throw err;
            var obj = {};
            obj.customer = result;
            res.json(obj);
            db.close();
        });
    });  //res.send(obj);
});*/

module.exports = router;
