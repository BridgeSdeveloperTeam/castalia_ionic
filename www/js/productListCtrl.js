angular.module('starter.controllers')

.controller('ProductsCtrl', ['$scope', '$stateParams', '$state', '$window', 'CatalogIDService', '$ionicHistory', 'RESTCatalogService', '$ionicNavBarDelegate',
	function($scope, $stateParams, $state, $window, CatalogIDService, $ionicHistory, RESTCatalogService, $ionicNavBarDelegate) {

	$scope.showSubheader = false;
	$scope.search = {
		query:""
	};
	$scope.$on("$ionicView.beforeEnter", function(event, data){
		
		if($ionicHistory.forwardView() === null) {
			RESTCatalogService.getProductList($stateParams).then(function(productList){
				
				if(productList.data !== null ) {
					$scope.products = productList.data[0].filter(function(item){
						if(isSales) {
							return item.oferta == "1";
						}else {
							return item.oferta == "2";
						}
					});
				}

			});
		}

		$scope.viewTitle = CatalogIDService.getConceptNameForId($stateParams.idConcepto);
	    var isSales = $window.localStorage["ofertas"] === "1";
		
	});

	$scope.rowClicked = function(index) {
		$window.localStorage["productDetail"] = JSON.stringify($scope.products[index]);
		$state.go('app.product-detail');
	};

	$scope.listView = true;

	$scope.switchView = function() {
		$scope.listView = !$scope.listView;
	};

	$scope.showSearchBar = function(show) {
		$scope.showSubheader = show;
		if(show == false) {
			$scope.search.query = '';
		}
	};

}])
.filter('searchProducts', function(){
  return function (items, query) {
    var filtered = [];
    var letterMatch = new RegExp(query, 'i');
    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      if (query) {
        if (letterMatch.test(item.sku.substring(0, query.length))) {
          filtered.push(item);
        }
      } else {
        filtered.push(item);
      }
    }
    return filtered;
  };
});
