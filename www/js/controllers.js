angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";
  
  $scope.compartir = function(){
    
    /*
    text: Text to share, i.e. "Incredible plugin"
    title: Title of popup, i.e. "Share this quote" (android only, default: "Share")
    mimetype: Mimetype, i.e. "image/jpeg" (android only, default: "plain/text")
    */
    
    navigator.share("Visita 1G http://onegorilla.cl","Visítanos","plain/text");
  }

});

