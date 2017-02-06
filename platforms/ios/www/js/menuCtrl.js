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

	   if($window.localStorage["userID"] && $window.localStorage["userID"] !== "undefined") {
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

	$scope.catalogTypes = {
		red:false,
		pink:false,
		green:false
	}

	$scope.redCatalogSelected = function() {
		$scope.catalogTypes.red = !$scope.catalogTypes.red;
		$scope.catalogTypes.pink = false;
		$scope.catalogTypes.green = false;
	};

	$scope.pinkCatalogSelected = function() {
		$scope.catalogTypes.pink = !$scope.catalogTypes.pink;
		$scope.catalogTypes.red = false;
		$scope.catalogTypes.green = false;
	};

	$scope.greenCatalogSelected = function() {
		$scope.catalogTypes.green = !$scope.catalogTypes.green;
		$scope.catalogTypes.red = false;
		$scope.catalogTypes.pink = false;
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
