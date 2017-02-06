angular.module('starter.RESTModule', [])
.constant('REST_URL', "https://castaliaapp.com")

.service('RESTUserService', ['$http', 'REST_URL',  function($http, REST_URL) {

	function getUrl() {
	    return REST_URL;
	}

  this.registerUser = function(userData) {
    
		return $http({
			url: getUrl() + "/addUser?nombre="+userData.nombre+ "&estado="+userData.estado + 
              "&telefono=" + userData.telefono + "&email=" + userData.email + "&contra=" + userData.contra,
      cache: false,
			method: "GET",
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Cache-Control' : 'no-cache'
      }
		});
	};

  this.registerMember = function(userData) {
    
    return $http({
      url: getUrl() + "/socio?nombre="+userData.nombre+ "&domicilio="+userData.domicilio + "&cp="+userData.cp + "&telefono=" + userData.telefono + "&email=" + userData.email,
      cache: false,
      method: "GET",
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' ,
        'Cache-Control' : 'no-cache'
      }
    });
  };

  this.registerSocial = function(userData) {
    return $http({
      url: getUrl() + "/addUser?nombre="+userData.nombre+ "&email=" + userData.email,
      method: "GET",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    });
  };

  this.loginUser = function(userData) {
    return $http({
      url: getUrl() + "/idUser/"+userData.email+ "/" + userData.password+ "/",
      method: "GET",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    });
  };

  this.forgotPassword = function(email) {
    return $http({
      url: getUrl() + "/recuperarContra/"+email,
      method: "GET",
      headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
    });
  };
}])

.service('RESTCatalogService', ['$http', 'REST_URL',  function($http, REST_URL) {

  function getUrl() {
      return REST_URL;
  }
 
  this.getProductList = function(productDetails) {
    return $http({
      url: getUrl() + "/getConcepto/" + productDetails.idConcepto + "/getLinea/" + productDetails.idLinea + "/getCatalogo/" + productDetails.idCatalogo + "/",
      method: "GET"
    });
  };

}]);
