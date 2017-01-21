(function(){
	'use strict';

	angular.module('AppHttp', [])
		.controller("BuscaSwapiController", BuscaSwapiController)
		.controller("MuestraPersonajesController", MuestraPersonajesController)
		.service("ObtienePersonasService", ObtienePersonasService);

		//BuscaSwapiController.$inject = ["ObtienePersonasService"];
		function BuscaSwapiController(){
			var buscarCtrl = this;

			buscarCtrl.buscar = "";

		}

		//MuestraPersonajesController.$inject = ["ObtienePersonasService"];
		MuestraPersonajesController.$inject = ["$scope","ObtienePersonasService"];
		function MuestraPersonajesController($scope,ObtienePersonasService){
			var muestraCtrl = this;

			var promesa = ObtienePersonasService.obtienePersonas($scope.$parent.buscar);

			promesa.then(function(response){
				console.log(response);
				muestraCtrl.personas = response.data.results;
			})
			// En las promesas el metodo "catch" nos servira para implementar la logica que queramos
			// cuando la promesa no sea cumplida o la llamada al servidor retorne un error.
			.catch(function(error) {
				console.log("Esto es el objeto error: ", error);
			});
		}

		ObtienePersonasService.$inject = ["$http"];
		function ObtienePersonasService($http){
			var service = this;

			// Recordar que en este caso el parametro personaje, es un string
			// que lo obtenemos de la caja de texto buscar.
			service.obtienePersonas = function(personaje){
				var promesa = $http({
					method: "GET",
					url: "https://swapi.co/api/people/",
					params: {
						search: personaje
					}
				});
				return promesa;
			}
		}

})();