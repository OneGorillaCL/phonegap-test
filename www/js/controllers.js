angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";


  $scope.agregarNotifiacion = function(){
  	window.plugins.notification.local.schedule({
        id: 10,
        title: "OneGorilla!",
        text: "Todos somos Gorilla",
        at: _10_sec_from_now
    });
	$scope.info = "Notificacion agregada _10_sec_from_now";

  }

  $scope.eliminarNotificacion = function(){
  	window.plugins.notification.local.cancel(10, function () {
	     $scope.info = "Notificacion eliminada";
	}, scope);
  }

});

