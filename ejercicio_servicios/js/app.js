(function(){
	'use strict';

	angular.module('todoApp', [])
		.controller('CrearListaController', CrearListaController)
		.controller('MostrarListasController', MostrarListasController)
		.factory('ListasServiceFactory', ListasServiceFactory);

		function ListasServiceFactory(){
			// Objeto que contiene todos los metodos o variables a los que 
			// podremos acceder de el servicio.
			var listasFactory = {
				crearLista: crearLista ,
				retornarListas: retornarListas,
				crearTarea: crearTarea,
				listas: []
			}

			return listasFactory;

			function crearLista(nombre, cantidadTareas){
				// Objeto que insertaremos si se cumplen las condiciones

				var lista = {
					nombre: nombre,
					cantidadTareas: parseInt(cantidadTareas),
					tareas: []
				};
				listasFactory.listas.push(lista);
			};

			function retornarListas(){
				return listasFactory.listas;
			};

			function crearTarea(nombreTarea, indice){
				// Aqui va  la logica del limite de tareas.
				if(isNaN(listasFactory.listas[indice].cantidadTareas) ){
					listasFactory.listas[indice].tareas.push(nombreTarea);
				}
				if(listasFactory.listas[indice].tareas.length > listasFactory.listas[indice].cantidadTareas){
					throw new Error("El numero de tareas maximo (" + listasFactory.listas[indice].cantidadTareas + ") fue alcanzado");
				}
				else{
					listasFactory.listas[indice].tareas.push(nombreTarea);
				}

				console.log(listasFactory.listas[indice].tareas.length);
				console.log(listasFactory.listas[indice].cantidadTareas);
				console.log(indice);
				
			}

		}

		// Hacemos la inyeccion de el servicio en los controladores
		
		CrearListaController.$inject = ['ListasServiceFactory']
		function CrearListaController(ListasServiceFactory){
			var crearCtrl = this;
			
			crearCtrl.nombreLista = "";
			crearCtrl.cantidad = "";

			var servicio = ListasServiceFactory;

			console.log(servicio);
			
			crearCtrl.crearLista = function() {
				servicio.crearLista(crearCtrl.nombreLista,crearCtrl.cantidad);
			}
		}

		MostrarListasController.$inject = ['ListasServiceFactory']
		function MostrarListasController(ListasServiceFactory){
			var mostrarCtrl = this;
			mostrarCtrl.tarea = "";

			var servicio = ListasServiceFactory;

			mostrarCtrl.listas = ListasServiceFactory.retornarListas();

			mostrarCtrl.insertarTarea = function(indice){
				servicio.crearTarea(mostrarCtrl.tarea, indice);
			}
		}

})();