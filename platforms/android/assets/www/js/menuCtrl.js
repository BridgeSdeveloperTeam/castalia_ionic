angular.module('starter.controllers', [])

.controller('MenuCtrl', ['$scope', '$rootScope', '$ionicSideMenuDelegate', '$window', '$state','$ionicHistory',
	function($scope, $rootScope, $ionicSideMenuDelegate, $window, $state, $ionicHistory) {
  	
  	//Disable side menu in login 
  	$rootScope.$on("$ionicView.beforeEnter", function(event, data){
	   // handle event
	   if(data.stateId == "app.login" || data.stateId == "app.register") {
	   		$ionicSideMenuDelegate.canDragContent(false);
	   		$scope.showMenuButton = false;
	   }else {
	   		$ionicSideMenuDelegate.canDragContent(true);
	   		$scope.showMenuButton = true;
	   }

	   if($window.localStorage["userID"]) {
	   		$rootScope.isUser = true;
	   		$rootScope.userName = $window.localStorage["nombre"];
	   }else {
	   		$rootScope.isUser = false;
	   		$rootScope.userName = "Invitado";
	   }
	});

	$scope.goTo = function(stateName) {
		if($rootScope.isUser === true) {
			$state.go(stateName);
		}
	};

  	$scope.logout = function() {
  		$window.localStorage.removeItem("userID");
		$window.localStorage.removeItem("nombre");
		$window.localStorage.removeItem("domicilio");
		$window.localStorage.removeItem("cp");
		$window.localStorage.removeItem("telefono");
		$window.localStorage.removeItem("email");
  		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});	
  		$state.go('app.login');
  	};
}]);
