angular.module('starter.controllers')

.controller('DameCtrl', ['$scope', 'isSales', '$state', 'CatalogIDService', '$window',
	function($scope, isSales, $state, CatalogIDService, $window) {

	if(isSales) {
		$scope.viewTitle = "Ofertas Dama"

		$scope.bannerImage = 'img/portada_dama.jpg'

		$scope.categories =[{'imgSrc': 'img/castaliaDama/dama_01.png', 'name': 'Tacones'}, 
						{'imgSrc': 'img/castaliaDama/dama_02.png', 'name': 'Plataformas'},
						{'imgSrc': 'img/castaliaDama/dama_03.png', 'name': 'Sandalias'},
						{'imgSrc': 'img/castaliaDama/dama_04.png', 'name': 'Teens'},
						{'imgSrc': 'img/castaliaDama/dama_05.png', 'name': 'Flats'},
						{'imgSrc': 'img/castaliaDama/dama_06.png', 'name': 'Urbano'},
						{'imgSrc': 'img/castaliaDama/dama_08.png', 'name': 'Deportivo'},
						{'imgSrc': 'img/castaliaDama/dama_09.png', 'name': 'Confort'},
						{'imgSrc': 'img/castaliaDama/dama_10.png', 'name': 'Botas'}];

	}else {
		$scope.viewTitle = "Castalia Dama"

		$scope.bannerImage = 'img/portada_dama.jpg'

		$scope.categories =[{'imgSrc': 'img/castaliaDama/dama_01.png', 'name': 'Tacones'}, 
						{'imgSrc': 'img/castaliaDama/dama_02.png', 'name': 'Plataformas'},
						{'imgSrc': 'img/castaliaDama/dama_03.png', 'name': 'Sandalias'},
						{'imgSrc': 'img/castaliaDama/dama_04.png', 'name': 'Teens'},
						{'imgSrc': 'img/castaliaDama/dama_05.png', 'name': 'Flats'},
						{'imgSrc': 'img/castaliaDama/dama_06.png', 'name': 'Urbano'},
						{'imgSrc': 'img/castaliaDama/dama_08.png', 'name': 'Deportivo'},
						{'imgSrc': 'img/castaliaDama/dama_09.png', 'name': 'Confort'},
						{'imgSrc': 'img/castaliaDama/dama_10.png', 'name': 'Botas'}];

	}

	$scope.rowClicked = function(index) {
		$window.localStorage["conceptoID"] = CatalogIDService.getConceptIdForName($scope.categories[index].name.toLowerCase());
	
		$window.localStorage["lineaID"] = CatalogIDService.getLineaIdForName("dama");
		
		var params = {
			idCatalogo: $window.localStorage["catalogoID"],
			idLinea: $window.localStorage["lineaID"],
			idConcepto: $window.localStorage["conceptoID"]
		};
		$state.go('app.product-list', params);

	};

}]);