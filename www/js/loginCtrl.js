angular.module('starter.controllers')

.controller('LoginCtrl', ['$scope', '$state', '$ionicHistory',function($scope, $state, $ionicHistory) {
	// Form data for the login modal
	$scope.loginData = {};

	// Perform the login action when the user submits the login form
	$scope.doLogin = function() {
		console.log('Doing login', $scope.loginData);

	};

	$scope.goToLogin = function() {

		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});
		$state.go('app.landing');
	};

	$scope.facebookLogin = function() {
		facebookConnectPlugin.login(["public_profile"], function(response) {
			console.log(response);

		}, function(error) {
			console.log(error);
		});
	};

	$scope.googleLogin = function() {
		window.plugins.googleplus.login(
	    {
	      'webClientId': '544114062620-gkm0hqgd00vg2m0mhtrtao05pmif4fjc.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
	    },
	    function (obj) {
	      console.log(JSON.stringify(obj)); // do something useful instead of alerting
	    },
	    function (msg) {
	      alert('error: ' + msg);
	    }
	);
	};
}]);