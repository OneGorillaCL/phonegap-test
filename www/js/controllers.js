angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  	$scope.info = "Hola";

 	var bgGeo = window.backgroundGeoLocation;

 	callbackFn = function(location){
 		$scope.info = '[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude;
 		$scope.$digest();
 	}

 	failureFn = function(error){
 		$scope.info = 'BackgroundGeoLocation error';
 		$scope.$digest();
 	}

	// BackgroundGeoLocation is highly configurable.
	bgGeo.configure(callbackFn, failureFn, {
	    activityType: 'AutomotiveNavigation',
	    debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
	    stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
	});

	// Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
	bgGeo.start();



});

