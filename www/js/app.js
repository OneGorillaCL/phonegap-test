// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform, $rootScope) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    $rootScope.info = new Array();
    $rootScope.info.push("Ejecutando");

    // Your app must execute AT LEAST ONE call for the current position via standard Cordova geolocation,
    //  in order to prompt the user for Location permission.
    window.navigator.geolocation.getCurrentPosition(function(location) {
        $rootScope.info.push('Location from Phonegap');
    });

    var bgGeo = window.plugins.backgroundGeoLocation;

    $rootScope.info.push("bgGeo=OK");

    /**
    * This callback will be executed every time a geolocation is recorded in the background.
    */
    var callbackFn = function(location) {
        $rootScope.info.push('[js] BackgroundGeoLocation callback:  ' + location.latitude + ',' + location.longitude);
        // Do your HTTP request here to POST location to your server.
        //
        //
        console.log(location);
    };

    var failureFn = function(error) {
        console.log('BackgroundGeoLocation error');
        console.log(error);
        $rootScope.info.push(error);
    }

    // BackgroundGeoLocation is highly configurable.
    bgGeo.configure(callbackFn, failureFn, {
        debug: true, // <-- enable this hear sounds for background-geolocation life-cycle.
        stopOnTerminate: false // <-- enable this to clear background location settings when the app terminates
    });

    // Turn ON the background-geolocation system.  The user will be tracked whenever they suspend the app.
    bgGeo.start();

    // If you wish to turn OFF background-tracking, call the #stop method.
    // bgGeo.stop()

  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'AppCtrlInicio'
      }
    }
  })

  .state('app.detalle', {
    url: '/detalle',
    views: {
      'menuContent': {
        templateUrl: 'templates/detalle.html'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
