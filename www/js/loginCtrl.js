angular.module('starter.controllers')

.controller('LoginCtrl', ['$scope', '$state', '$ionicHistory', 'RESTUserService', '$window',
	function($scope, $state, $ionicHistory, RESTUserService, $window) {

	if($window.localStorage["userID"]) {
		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true,
			disableAnimate:true
		});	
		$state.go('app.landing');

		
	}

	// Form data for the login modal
	$scope.loginData = {};
	// Perform the login action when the user submits the login form
	$scope.doLogin = function(form) {
		console.log('Doing login', $scope.loginData);
		if(form.$valid) {
			RESTUserService.loginUser($scope.loginData)
			.then(function(response){
				
				if(response.status == 200) {
					form.$setPristine();
					$scope.loginData = {};
					$window.localStorage["userID"] = response.data[0][0].id;
					$scope.goToLogin();
				}
				
			});
		}else {
			alert("Por favor, llena los campos vacíos");
		}

	};

	$scope.goToLogin = function() {

		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});
		$state.go('app.landing');
	};

	$scope.facebookLogin = function() {
		facebookConnectPlugin.login(["public_profile", "email"], function(response) {
			

			if(response.authResponse.userID) {
				facebookConnectPlugin.api(
	                "me/?fields=id,email,first_name,last_name",
	                ['public_profile', 'email'],
	                function (response_user) {
	                    
	                    var userData = {
	                    	"email": response_user.email,
	                    	"nombre": response_user.firstName + " " + response_user.last_name
	                    };
	                    RESTUserService.registerSocial(userData).then(function(response_register){
	                    	
	                    	if(response_register.status == 200) {
	                    		
	                    		$window.localStorage["userID"] = response_register.data[0][0].id;
	              
	                    		$scope.goToLogin();
	                    	}
	                    });
	                },
	                function (error) {
	                    alert("Failed: " + error);
	                }
	            );
			}
			

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

	        var userData = {
            	"email": obj.email,
            	"nombre": obj.displayName
            };

            RESTUserService.registerSocial(userData).then(function(response_register){
            	
            	if(response_register.status == 200) {
            		$window.localStorage["userID"] = response_register.data[0][0].id;
      
            		$scope.goToLogin();
            	}
            });
	    },
	    function (msg) {
	      alert('error: ' + msg);
	    }
	);
	};
}]);