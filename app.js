angular.module('BeardApp', [])
.controller('MainController', function($scope) {
    $scope.test = 'Hello World';
  });  

  function postPic(){
    var x = document.getElementById("pic");
    document.getElementById("test").appendChild(x);
  }
