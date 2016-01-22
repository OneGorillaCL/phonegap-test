angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";

  $scope.verVideo = function(){
  	  var videoUrl = "http://iphone-streaming.ustream.tv/ustreamVideo/21859489/streams/live/playlist.m3u8";

	  // Just play a video
	  window.plugins.streamingMedia.playVideo(videoUrl);

	  // Play a video with callbacks
	  var options = {
	    successCallback: function() {
	      console.log("Video was closed without error.");
	    },
	    errorCallback: function(errMsg) {
	      console.log("Error! " + errMsg);
	    }
	  };
	  window.plugins.streamingMedia.playVideo(videoUrl, options);
  }

});

