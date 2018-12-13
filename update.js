var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("BECBank");
  var myquery = { kontonr: "1234-1234", kontonr: "4321-4321" };
  var newvalues = { $set: {indestående: "5000", indestående: "50000"} };
  dbo.collection("Konti").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log("1 document updated");
    db.close();
  });
});