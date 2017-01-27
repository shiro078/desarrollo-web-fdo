(function(){
	'use strict';

	angular.module('EmpleadosApp', ['ui.router'])
		.config(ConfigRutas);


		ConfigRutas.$inject = ['$stateProvider', '$urlRouterProvider'];
		function ConfigRutas($stateProvider, $urlRouterProvider){


			$urlRouterProvider.otherwise('/');

			$stateProvider.state('perfil',{
				url: '/',
				templateUrl: './templates/perfil.html',
				controller: 'PerfilController as perfilCtrl'
			})
			.state('ordenes', {
				url: '/ordenes',
				templateUrl: './templates/ordenes.html',
				controller: 'OrdenesController as ordenesCtrl',
				resolve: {
					ordenes: ['OrdenesService', function(OrdenesService){
						return OrdenesService.obtenerOrdenes();
					}]
				}
			})
			.state('productos', {
				url: '/productos',
				templateUrl: './templates/productos.html',
				controller: 'ProductosController  as productosCtrl',
				resolve: {
					productos: ['ProductosService', function(ProductosService){
						return ProductosService.obtenerProductos();
					}]
				}
			});

		}

})();