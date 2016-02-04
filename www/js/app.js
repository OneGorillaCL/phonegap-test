// Ionic Starter App
var _navigator;
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ngCordova'])

.run(function($ionicPlatform,$rootScope) {
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

    var session = {
      audio: true,
      video: false
    };

    var recordRTC = null;

    $rootScope.perc = 0;
    $rootScope.maxperc = 0;
    $rootScope.divlog = "";
    $rootScope.capt = function(){
      $rootScope.$apply(function(){$rootScope.divlog = JSON.stringify(navigator);});
      navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
      navigator.getUserMedia(session, $rootScope.initializeRecorder, $rootScope.onErr);
    }


    $rootScope.initializeRecorder = function(stream) {
        //console.log(stream);
        var audioContext = window.AudioContext;
        var context = new audioContext();
        var audioInput = context.createMediaStreamSource(stream);
        var bufferSize = 2048;
        // create a javascript node
        //var recorder = context.createJavaScriptNode(bufferSize, 1, 1);
        var recorder = context.createScriptProcessor(bufferSize, 1, 1);
        // specify the processing function
        recorder.onaudioprocess = $rootScope.recorderProcess;
        // connect stream to our recorder
        audioInput.connect(recorder);
        // connect our recorder to the previous destination
        recorder.connect(context.destination);
      }  
      
      $rootScope.onErr = function(err){
        console.log(err);
      }
      
      $rootScope.recorderProcess = function(evt){
        //console.log(a);
        var input = evt.inputBuffer.getChannelData(0)
          , len = input.length   
          , total = i = 0
          , rms;
        while ( i < len ) total += Math.abs( input[i++] );
        rms = Math.sqrt( total / len );
        
        //console.log(( rms * 100 ));
        var rou = Math.round(rms * 100);
        if(rou > $rootScope.maxperc){
          $rootScope.$apply(function(){$rootScope.maxperc = rou;});
        }
        $rootScope.$apply(function(){$rootScope.perc = rou;});
        //("#barra").css({"width":rms_per+"%"});
        //$("#perc").html(Math.round(rms_per));
      }

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
    cache: false,
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'AppCtrlInicio'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
