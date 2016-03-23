angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope,$rootScope) {

    
	$scope.info = new Array();
    /**
    * This callback will be executed every time a geolocation is recorded in the background.
    */
    var callbackFn = function(location) {
        $scope.info.push('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
        // Do your HTTP request here to POST location to your server.
        //
        //
        console.log(location);
    };

    var failureFn = function(error) {
        console.log('BackgroundGeoLocation error');
        console.log(error);
        $scope.info.push(error);
    }

    // BackgroundGeoLocation is highly configurable.
    $rootScope.bgGeo.configure(callbackFn, failureFn, {
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
    });

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    $rootScope.bgGeo.start();

    // If you wish to turn OFF background-tracking, call the #stop method.
    // bgGeo.stop()

});

