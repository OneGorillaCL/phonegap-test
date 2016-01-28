angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope,$rootScope) {

      $scope.capturar = function(){

      	$rootScope.capt();

      	 //var options = { limit: 1, duration: 100 };
      	 //var options = { limit: 1 };
      	 /*$cordovaCapture*/
      	 /*navigator.device.capture*/
      	 //$cordovaCapture.captureAudio(initializeRecorder, onError, options);
      	 
      	 /*$cordovaCapture.captureAudio(options).then(function(audioData) {
	      // Success! Audio data is here
	      initializeRecorder(audioData);
	    }, function(err) {
	      // An error occurred. Show a message to the user
	      onError(err);
	    });*/

  
		/*var session = {
		  audio: true,
		  video: false
		};
		//var recordRTC = null;
		_navigator.getUserMedia(session, initializeRecorder, onError);*/


      }
      
      

});

