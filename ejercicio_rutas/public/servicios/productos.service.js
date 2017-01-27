(function() {
	'use strict';

	angular.module('EmpleadosApp')
		.service('ProductosService', ProductosService);

		ProductosService.$inject = ['$http'];
		function ProductosService($http){
			var service = this;

			service.obtenerProductos = function(){
				return $http.get('http://localhost:3000/productos')
					.then(function(resolve){
						console.log("Resolve: ", resolve);
						return resolve;
					}).catch(function(error){
						console.log("Error: ", error);
					});
			}
		}
})();