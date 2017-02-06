angular.module('starter.controllers')

.controller('LoginCtrl', ['$scope', '$state', '$ionicHistory', 'RESTUserService', '$window', '$ionicPopup',
	function($scope, $state, $ionicHistory, RESTUserService, $window, $ionicPopup) {

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
		
		if(form.$valid) {
			RESTUserService.loginUser($scope.loginData)
			.then(function(response){
				if(response.status == 200) {
					form.$setPristine();
					$scope.loginData = {};
					$window.localStorage["userID"] = response.data[0][0].id;
					$scope.goToLogin();
				}else {
					$ionicPopup.alert({
				    	title: 'Error',
				    	template: 'Email o contraseña incorrectas.'
				    });
					
				}
				
			});
		}else {
			$ionicPopup.alert({
		    	title: 'Advertencia',
		    	template: 'Por favor, llena los campos vacíos.'
		    });
		}

	};

	$scope.forgotPassword = function() {
		$scope.emailData = {};

		// An elaborate, custom popup
		var myPopup = $ionicPopup.show({
			template: '<input type="email" ng-model="emailData.email">',
			title: 'Introduce tu email',
			scope: $scope,
			buttons: [
			  { text: '<p style="text-size:12px;">Cancelar</p>' },
			  {
			    text: '<b style="text-size:12px;">Enviar</b>',
			    type: 'button-assertive',
			    onTap: function(e) {
			    	RESTUserService.forgotPassword($scope.emailData.email)
			    	.then(function(response){
			    		if(response.status == 200) {
			    			$ionicPopup.alert({
						    	title: 'Exito',
						    	template: 'La contraseña será enviada a tu correo en breve.'
						    });
			    		}
			    	});

			      return;
			    }
			  }
			]
		});
	};

	$scope.goToLogin = function() {

		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});
		
		if($window.localStorage["tutorialShown"] && $window.localStorage["tutorialShown"] !== undefined) {
			$state.go('app.landing');
		}else {
			$window.localStorage["tutorialShown"] = "true";
			$state.go('app.castalia-info');
			
		}
	};

	$scope.goToCatalog = function() {

		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});
		$window.localStorage.removeItem("tutorialShown");
		$state.go('app.castalia-info');
		
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
	                    	"nombre": response_user.first_name + " " + response_user.last_name
	                    };
						$window.localStorage["nombre"] = userData.nombre;
						$window.localStorage["email"] = userData.email;
	                    RESTUserService.registerSocial(userData).then(function(response_register){
	                    	
	                    	if(response_register.status == 200) {
	                    		$scope.goToLogin();
	                    		$window.localStorage["userID"] = response_register.data[0];
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

	       // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
	    },
	    function (obj) {

	        var userData = {
            	"email": obj.email,
            	"nombre": obj.displayName
            };
            $window.localStorage["nombre"] = userData.nombre;
			$window.localStorage["email"] = userData.email;
            RESTUserService.registerSocial(userData).then(function(response_register){

            	if(response_register.status == 200) {
            		$scope.goToLogin();
            		$window.localStorage["userID"] = response_register.data[0];
            	}
            });
	    },
	    function (msg) {
	      alert('error: ' + msg);
	    }
	);
	};
}]);