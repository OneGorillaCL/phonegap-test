angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope,$cordovaCapture) {

      $scope.perc = "0";

      $scope.capturar = function(){

      	 //var options = { limit: 1, duration: 100 };
      	 var options = { limit: 1 };
      	 /*$cordovaCapture*/
      	 /*navigator.device.capture*/
      	 //$cordovaCapture.captureAudio(initializeRecorder, onError, options);
      	 
      	 $cordovaCapture.captureAudio(options).then(function(audioData) {
	      // Success! Audio data is here
	      initializeRecorder(audioData);
	    }, function(err) {
	      // An error occurred. Show a message to the user
	      onError(err);
	    });


      }
      
      function initializeRecorder(stream) {
        console.log(stream);
        var audioContext = window.AudioContext;
        var context = new audioContext();
        var audioInput = context.createMediaStreamSource(stream);
        var bufferSize = 2048;
        // create a javascript node
        //var recorder = context.createJavaScriptNode(bufferSize, 1, 1);
        var recorder = context.createScriptProcessor(bufferSize, 1, 1);
        // specify the processing function
        recorder.onaudioprocess = recorderProcess;
        // connect stream to our recorder
        audioInput.connect(recorder);
        // connect our recorder to the previous destination
        recorder.connect(context.destination);
      }  
      
      function onError(err){
        console.log(err);
      }
      
      function recorderProcess(evt){
        //console.log(a);
        var input = evt.inputBuffer.getChannelData(0)
          , len = input.length   
          , total = i = 0
          , rms;
        while ( i < len ) total += Math.abs( input[i++] );
        rms = Math.sqrt( total / len );
        
        console.log(( rms * 100 ));
        $scope.perc = rms * 100;
        //("#barra").css({"width":rms_per+"%"});
        //$("#perc").html(Math.round(rms_per));
      }

});

