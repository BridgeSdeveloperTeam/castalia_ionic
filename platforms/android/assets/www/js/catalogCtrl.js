angular.module('starter.controllers')

.controller('CatalogCtrl', ['$scope', '$window', '$state', 'CatalogIDService', 
	function($scope, $window, $state, CatalogIDService) {

	$scope.goToPage = function(page, catalogID) {
		if(catalogID === "ofertas") {
			catalogID = "castalia";
			$window.localStorage["ofertas"] = "1";
		}else {
			$window.localStorage["ofertas"] = "0";
		}
		$window.localStorage["catalogoID"] = CatalogIDService.getCatalogIdForName(catalogID);
		$state.go(page);
	};
}]);