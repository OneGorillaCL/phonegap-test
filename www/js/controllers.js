angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";

  var fbLoginSuccess = function (userData) {
    $scope.info = "UserInfo: " + JSON.stringify(userData);
  }

  $scope.login = function(){

    facebookConnectPlugin.login(["public_profile"],
        fbLoginSuccess,
        function (error) { $scope.info = "" + error }
    );

  }

});

