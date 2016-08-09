angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";

  bluetoothSerial.setDeviceDiscoveredListener(function(device) {
    console.log('Found: '+device.id);
  });

});

