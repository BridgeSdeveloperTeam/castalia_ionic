angular.module('starter.controllers')

.controller('SubCatalogCtrl', ['$scope', '$window', '$state', 'CatalogIDService', 'RESTCatalogService',
	function($scope, $window, $state, CatalogIDService, RESTCatalogService) {

	$scope.goToPage = function(page, conceptoID, lineaID) {
		if(conceptoID !== undefined) {
			$window.localStorage["conceptoID"] = CatalogIDService.getConceptIdForName(conceptoID);
		}

		if(lineaID !== undefined) {
			$window.localStorage["lineaID"] = CatalogIDService.getLineaIdForName(lineaID);
		}
		
		if(page === 'app.sales-dame' || page === 'app.castalia-dame' ) {
			$state.go(page);
		}else {
			var params = {
				idCatalogo: $window.localStorage["catalogoID"],
				idLinea: $window.localStorage["lineaID"],
				idConcepto: $window.localStorage["conceptoID"]
			};

			$state.go(page, params);
		}

		
	};

	$scope.salesTrevo = function(page, conceptoID, lineaID) {

		$window.localStorage["catalogoID"] = CatalogIDService.getCatalogIdForName("trevo");
		$scope.goToPage(page, conceptoID, lineaID);
	};
}]);