(function() {
	'use strict';

	angular.module('EmpleadosApp')
		.controller('ProductosController', ProductosController);

		ProductosController.$inject = ['productos'];
		function ProductosController(productos){
			var productosCtrl = this;
			productosCtrl.notValid = false;

			if(productos !== undefined){
				productosCtrl.productos = productos.data;
			}else{
				productosCtrl.notValid = true;
				productosCtrl.mensaje = "Hubo un error, intente mas tarde";
			}
		}
})();