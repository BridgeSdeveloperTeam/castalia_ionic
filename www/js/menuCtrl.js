angular.module('starter.controllers', [])

.controller('MenuCtrl', ['$scope', '$rootScope', '$ionicSideMenuDelegate', '$window', '$state','$ionicHistory',
	function($scope, $rootScope, $ionicSideMenuDelegate, $window, $state, $ionicHistory) {
  	


  	//Disable side menu in login 
  	$rootScope.$on("$ionicView.beforeEnter", function(event, data){
	   // handle event
	   if(data.stateId == "app.login") {
	   		$ionicSideMenuDelegate.canDragContent(false);
	   		$scope.showMenuButton = false;
	   }else {
	   		$ionicSideMenuDelegate.canDragContent(true);
	   		$scope.showMenuButton = true;
	   }
	});

  	$scope.logout = function() {
  		$window.localStorage.removeItem("userID");
  		$ionicHistory.nextViewOptions({
			historyRoot: true,
			disableBack:true
		});	
  		$state.go('app.login');
  	};
}]);
