angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";

  $scope.abrirScan = function(){
   cordova.plugins.barcodeScanner.scan(
      function (result) {

            $scope.info = "We got a barcode <br>" +
                "Result: " + result.text + "<br>" +
                "Format: " + result.format + "<br>" +
                "Cancelled: " + result.cancelled;
      }, 
      function (error) {
          	$scope.info = "Scanning failed: " + error;
      }
   );  	
  }

});

