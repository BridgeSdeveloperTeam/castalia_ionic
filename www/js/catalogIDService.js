angular.module('starter.CatalogIDModule', [])

.service('CatalogIDService', ['$http', function($http) {

	this.getCatalogIdForName = function(catalogName) {

		var code;
		switch(catalogName) {
			case 'castalia':
				code = 1;
				break;
			case 'trevo':
				code = 2;
				break;
			default:
				code = 0;
				break;
		}
		return code;
	};

	this.getConceptIdForName = function(conceptName) {
		var code;
		switch(conceptName) {
			case 'tacones':
				code = 1;
				break;
			case 'plataformas':
				code = 2;
				break;
			case 'sandalias':
				code = 3;
				break;
			case 'teens':
				code = 4;
				break;
			case 'flats':
				code = 5;
				break;
			case 'botas':
				code = 6;
				break;
			case 'urbano':
				code = 7;
				break;
			case 'bolsas':
				code = 8;
				break;
			case 'deportivo':
				code = 9;
				break;
			case 'confort':
				code = 10;
				break;
			case 'caballero':
				code = 11;
				break;
			case 'joven':
				code = 12;
				break;
			case 'niño':
				code = 13;
				break;
			case 'niña':
				code = 14;
				break;
			case 'ropa':
				code = 15;
				break;
			case 'accesorios':
				code = 16;
				break;
			default : 
				code = 0;
				break;
		}
		return code;
	};

	this.getLineaIdForName = function(lineaName) {
		var code;
		switch(lineaName) {
			case 'caballero':
				code = 1;
				break;
			case 'dama':
				code = 2;
				break;
			case 'niño':
				code = 3;
				break;
			case 'niña':
				code = 4;
				break;
			case 'joven':
				code = 5;
				break;
			case 'ropa':
				code = 6;
				break;
			case 'accesorios':
				code = 7;
				break;
			default:
				code = 0;
				break;
		}
		return code;
	} ;

	this.getConceptNameForId = function(conceptId) {
		var code;
		switch(conceptId) {
			case "1":
				code = 'Tacones';
				break;
			case "2":
				code = 'Plataformas';
				break;
			case "3":
				code = 'Huaraches';
				break;
			case "4":
				code = 'Teens';
				break;
			case "5":
				code = 'Flats';
				break;
			case "6":
				code = 'Botas';
				break;
			case "7":
				code = 'Urbano';
				break;
			case "8":
				code = 'Bolsas';
				break;
			case "9":
				code = 'Deportivo';
				break;
			case "10":
				code = 'Confort';
				break;
			case "11":
				code = 'Caballero';
				break;
			case "12":
				code = 'Joven';
				break;
			case "13":
				code = 'Niño';
				break;
			case "14":
				code = 'Niña';
				break;
			case "15":
				code = 'Ropa';
				break;
			case "16":
				code = 'Accesorios';
				break;
			default : 
				code = 'Productos';
				break;
		}
		return code;
	};

}]);