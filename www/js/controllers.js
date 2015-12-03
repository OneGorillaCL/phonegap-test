angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";

  $scope.login = function(){
    if (!window.cordova) { 
      facebookConnectPlugin.browserInit(APP-ID); 
    } 
    facebookConnectPlugin.login([], 
      function (response) { 
        $scope.login = (JSON.stringify(response)) 
    }, function (response) 
    { 
      $scope.login = (JSON.stringify(response)) 
    });//fbLoginSuccess, fbLoginError);
  }

});

