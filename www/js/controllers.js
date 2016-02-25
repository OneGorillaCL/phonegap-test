angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {


})

.controller('AppCtrlInicio', function($scope) {

  $scope.info = "Hola";

  $scope.foto = function(){

    var options = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
	  correctOrientation:true
    };

    navigator.camera.getPicture(onSuccess, onFail, options);

  }

	onSuccess = function(imageURI) {
	    var image = document.getElementById('myImage');
	    image.src = imageURI;
	}

	onFail = function(message) {
	  $scope.info = message;
	  $scope.$digest();
	}

});

