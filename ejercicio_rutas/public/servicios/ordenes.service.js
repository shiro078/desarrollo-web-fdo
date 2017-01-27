(function() {
	'use strict';

	angular.module('EmpleadosApp')
		.service('OrdenesService', OrdenesService);

		OrdenesService.$inject = ['$http'];
		function OrdenesService($http){
			var service = this;

			service.obtenerOrdenes = function(){
				return $http.get('http://localhost:3000/ordenes')
					.then(function(resolve){
						console.log("Resolve: ", resolve);
						return resolve;
					}).catch(function(error){
						console.log("Error: ", error);
					});
			}
		}
})();