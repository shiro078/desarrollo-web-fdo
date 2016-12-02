(function(){

	'user strict';

	angular.module("miApp", [])
		// Una buena practica es no declarar la implementacion de nuestros controladores
		// en una funcion anonima, lo mejor es darle el nombre de la funcion e implementarlo
		// aparte
		.controller("MiControlador", MiControlador);

		// Aqui implementamos nuestro controlador.
		function MiControlador($scope){
			
			var productos = [
				{
					nombre: "Producto 1",
					descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur fringilla sapien sed ipsum consectetur aliquam.",
					precio: 5.50
				},
				{
					nombre: "Producto 2",
					descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur fringilla sapien sed ipsum consectetur aliquam.",
					precio: 8.50
				},
				{
					nombre: "Producto 3",
					descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur fringilla sapien sed ipsum consectetur aliquam.",
					precio: 7.50
				},
				{
					nombre: "Producto 4",
					descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur fringilla sapien sed ipsum consectetur aliquam.",
					precio: 20.50
				}
			];

			$scope.allProducts = productos;


		}

})();