angular.module('starter.controllers')

.controller('RegisterCtrl', ['$scope', 'RESTUserService', 'isMember', '$state', '$ionicHistory', '$window', '$ionicPopup',
	function($scope, RESTUserService, isMember, $state, $ionicHistory, $window, $ionicPopup) {

	$scope.registerData = {};

	$scope.isMember = isMember;

	$scope.isRootView = ($ionicHistory.viewHistory().backView === null) ? true:false;  

	if(isMember) {
		$scope.title = "Registro De Socios";
	}else {
		$scope.title = "Registro";
	}

	$scope.goBack = function() {
		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});
		$state.go('app.login');
	};

	$scope.doRegister = function(form) {

		if(form.$valid) {
			if($scope.isMember) {
				
				RESTUserService.registerMember($scope.registerData)
				.then(function(response){
					
					if(response.status == 200) {
						$ionicPopup.alert({
					    	title: 'Tu Registro ha sido exitoso',
					    	template: 'Tú afiliación como socio está en proceso.'
					    });
			
						form.$setPristine();
						$scope.registerData = {};
					}
					
				}, function(error) {
					
					$ionicPopup.alert({
				    	title: 'Error',
				    	template: 'Hubo un error en el registro.'
				    });
				
				});
			}else {
				
				RESTUserService.registerUser($scope.registerData)
				.then(function(response){
					
					if(response.status == 200) {
						
						$window.localStorage["userID"] = response.data[0];
						$window.localStorage["nombre"] = $scope.registerData.nombre;
						//$window.localStorage["estado"] = $scope.registerData.domicilio;
						//$window.localStorage["cp"] = $scope.registerData.cp;
						//$window.localStorage["telefono"] = $scope.registerData.telefono;
						$window.localStorage["email"] = $scope.registerData.email;
						$scope.registerData = {};
						form.$setPristine();
					
						proceedToLanding();
					}
					

				}, function(error) {
					$ionicPopup.alert({
				    	title: 'Error',
				    	template: 'Hubo un error en el registro.'
				    });
				});
			}
			
		}else {
			$ionicPopup.alert({
		    	title: 'Advertencia',
		    	template: 'Por favor, llena todos los campos.'
		    });
			
		}
	}

	function proceedToLanding() {
		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});
		$state.go('app.landing');
	}

}]);