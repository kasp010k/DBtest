var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function (err, db) {



  if (err) throw err;
  var dbo = db.db("BECBank");
  var myobj = { kontonr: "6666-7777", kunde: "John Doe", indestående: "100", rente: "1%" };
  dbo.collection("Konti").insertOne(myobj, function (err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

module.exports = router;
