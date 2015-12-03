angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "";
  $scope.loginEstado = false;

  var fbLoginSuccess = function (userData) {
    $scope.info = "UserInfo: " + JSON.stringify(userData);
    $scope.loginEstado = true;
  }

  $scope.login = function(){

    facebookConnectPlugin.login(["public_profile"],
        fbLoginSuccess,
        function (error) { $scope.info = "" + error }
    );

  }


  $scope.logout = function(){
    facebookConnectPlugin.logout(function(){
      $scope.loginEstado = false;
      $scope.info = "";
    }, function(error){

    })  
  }

});

