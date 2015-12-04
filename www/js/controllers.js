angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";

  // Define a div tag with id="map_canvas"
  var mapDiv = document.getElementById("map_canvas");

  // Initialize the map plugin
  var map = mainMap.Map.getMap(mapDiv);

  // You have to wait the MAP_READY event.
  map.on(mainMap.event.MAP_READY, onMapInit);

  var onMapInit = function(map) {
    $scope.info = "Mapa Cargado";

    map.getMyLocation(onSuccess, onError); 
  } 

  var onSuccess = function(location) {
    var msg = ["Current your location:\n",
      "latitude:" + location.latLng.lat,
      "longitude:" + location.latLng.lng,
      "speed:" + location.speed,
      "time:" + location.time,
      "bearing:" + location.bearing].join("\n");

    map.addMarker({
      'position': location.latLng,
      'title': msg
    }, function(marker) {
      marker.showInfoWindow();
    });
  };

  var onError = function(msg) {
    $scope.info = "error: " + msg;
  };

});

