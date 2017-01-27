(function(){
	'use strict';

	angular.module('EmpleadosApp')
		.controller('OrdenesController', OrdenesController);

		OrdenesController.$inject = ['ordenes'];
		function OrdenesController(ordenes){
			var ordenesCtrl = this;
			ordenesCtrl.notValid = false;

			if(ordenes !== undefined){
				ordenesCtrl.ordenes = ordenes.data;
			}else{
				ordenesCtrl.notValid = true;
				ordenesCtrl.mensaje = "Hubo un error, intente mas tarde";
			}
			
		}
})();