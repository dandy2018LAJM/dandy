angular.module('BeardApp', [])
.controller('MainController', function($scope) {
    $scope.test = 'Hello World';
  });  

  function postPic(){
    
    var x = document.getElementById("test").innerHTML = "heelo";

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("beards", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
  var myobj = { name: "Company Inc", address: "Highway 37" };
  dbo.collection("customers").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    
    db.close();
  });
});
} 