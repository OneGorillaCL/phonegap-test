angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";

  $scope.login = function(){

    window.plugins.googleplus.isAvailable(
        function (available) {
          if (available) {
            $scope.info = "googleplus ok";
            window.plugins.googleplus.login(
                {
                  'scopes': 'profile', 
                  'offline': true,
                },
                function (obj) {
                  $scope.info = JSON.stringify(obj); // do something useful instead of alerting
                },
                function (msg) {
                  $scope.info = 'error: ' + msg;
                }
            );            
          }
        }
    );

  }

  $scope.logout = function(){
    window.plugins.googleplus.logout(
        function (msg) {
          $scope.info = msg; // do something useful instead of alerting
        }
    );    
  }

});

