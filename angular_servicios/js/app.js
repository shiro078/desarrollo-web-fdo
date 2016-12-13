(function(){
	'use strict';

	angular.module('ServiciosAngular', [])
		.controller('MuestraListaCompraController', MuestraListaCompraController)
		.controller('AgregarListaCompraController', AgregarListaCompraController)
		.service('ListaDeCompraService', ListaDeCompraService);
		// Asi es como se crean los servicios en angular. La funcion service lo crea
		// y como parametros tenemos que darle el nombre del servicio y la funcion
		// que manejara ese servicio.
		
		// Nosotros hacemos disponible el servicio que acabamos de implementar con la inyeccion
		// de dependencias, pasandole el nombre del servicio como parametro a la funcion 
		// donde esta implementado el controlador (Puede ser un controlador, otro servicio,
		// un provider, etc.).
		MuestraListaCompraController.$inject = ['ListaDeCompraService'];
		function MuestraListaCompraController(ListaDeCompraService){
			// Para utilizar la sintaxis de controller As, tenemos que guardar la referencia
			// al objeto (this), en una variable y a esa variable agregar las funcionalides y
			// propiedades que queremos mostrar en la vista.
			var muestraLista = this;

			muestraLista.items = ListaDeCompraService.obtenerItems();

			muestraLista.removerItem = function(indice){
				ListaDeCompraService.eliminarItem(indice);
			}

		}

		AgregarListaCompraController.$inject = ['ListaDeCompraService'];
		function AgregarListaCompraController(ListaDeCompraService){
			var agregaLista = this;

			agregaLista.nombreItem = "";
			agregaLista.cantidadItem = "";

			agregaLista.agregarItem = function(){
				console.log(agregaLista.nombreItem + " " + agregaLista.cantidadItem);
				if( agregaLista.nombreItem !== "" && agregaLista.cantidadItem !== ""){
					ListaDeCompraService.agregarItem(agregaLista.nombreItem, agregaLista.cantidadItem);
					document.getElementById('nombreItem').value = "";
					document.getElementById('cantidad').value = "";
					agregaLista.nombreItem = "";
					agregaLista.cantidadItem = "";
				}else{
					document.getElementById('nombreItem').value = "";
					document.getElementById('cantidad').value = "";
					agregaLista.nombreItem = "";
					agregaLista.cantidadItem = "";
					document.getElementById('alerta').style.display = "inline-block";
					//alert("Favor de llenar los dos campos");
				}		
			} 
		}

		function ListaDeCompraService(){
			// Recordar que los servicios son funciones constructoras de Javascript y que la
			// palabra reservada "this" esta aputando hacia el mismo objeto.
			var servicio = this;

			// Los datos ahora los obtenemos desde un servicio
			var items = [];

			// La logica de el acceso a los datos no debe de estar en el controlador, ahora esa
			// logica la tenemos en nuestros servicios o factorias
			servicio.agregarItem = function(nombreItem, cantidad){
				var item = {
					nombre: nombreItem,
					cantidad: cantidad
				};

				// Obetenemos un item con su respectivo nombre y la cantidad de estos y guardamos
				// esos datos en un objeto llamado "item", en las propiedades nombre y cantidad.
				// Y ese objeto lo insertamos en el array items, usando la funcion "push".
				items.push(item);
			};

			servicio.eliminarItem = function(indice){
				// La funcion "splice", elimina del array el elemento que concuerde con el indice que 
				// le hayamos pasado.
				items.splice(indice, 1);
			};

			servicio.obtenerItems = function(){
				return items;
			};

		}

})();