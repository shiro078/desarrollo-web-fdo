(function(){

	'use strict'

	angular.module('DirectivasApp', [])
		.controller('MiControlador', MiControlador);

		function MiControlador($scope){
			// Una buena practica es poner todas las propiedades del objeto $scope arriba de 
			// toda la implementacion del controlador, ya que asi podemos saber rapidamente
			// todas las propiedades que estan en lazadas a la vista y al controlador.
			$scope.personas = [];
			$scope.ordena = "";
			$scope.propiedad = null;
			$scope.activa = false;

			console.log($scope.activa);

			$scope.personas = [
				{
					nombre: "Abraham",
					apellido: "Garcia",
					usuario: "abraganu",
					fecha_nacimiento: new Date("July 25, 1986"),
					email: "abraganu@gmail.com",
					departamento: "IT",
					success: false
				},
				{
					nombre: "Fernando",
					apellido: "De la Cruz",
					usuario: "fercruz",
					fecha_nacimiento: new Date("July 13, 1988"),
					email: "fercruz@company.com",
					departamento: "IT",
					success: false,
					danger: false,
					warning: false
				},
				{
					nombre: "Jesus",
					apellido: "Cepeda",
					usuario: "jecepeda",
					fecha_nacimiento: new Date("December 13, 1990"),
					email: "jecepeda@company.com",
					departamento: "IT",
					success: false,
					danger: false,
					warning: false
				},
				{
					nombre: "Jorge",
					apellido: "Espino",
					usuario: "jopino",
					fecha_nacimiento: new Date("October 30, 1988"),
					email: "jopino@gmail.com",
					departamento: "Finanzas",
					success: false,
					danger: false,
					warning: false
				},
				{
					nombre: "Edgar",
					apellido: "Garcia",
					usuario: "eganu",
					fecha_nacimiento: new Date("October 13, 1986"),
					email: "eganu@gmail.com",
					departamento: "Finanzas",
					success: false,
					danger: false,
					warning: false
				},
				{
					nombre: "Sandra",
					apellido: "Perez",
					usuario: "sper",
					fecha_nacimiento: new Date("November 10, 1991"),
					email: "sper@company.com",
					departamento: "RH",
					success: false,
					danger: false,
					warning: false
				}
			];

			$scope.ordena = function(prop){
				$scope.propiedad = prop;
			}

			$scope.cambiaClase = function(index){

				if($scope.personas[index].success){
					$scope.personas[index].success = false;
				}else{
					$scope.personas[index].success = true;
				}
				
			}

			$scope.cambiaClase2 = function(index){

				if($scope.personas[index].warning){
					$scope.personas[index].warning = false;
				}else{
					$scope.personas[index].warning = true;
				}
				
			}

			$scope.cambiaClase3 = function(index){

				if($scope.personas[index].danger){
					$scope.personas[index].danger = false;
				}else{
					$scope.personas[index].danger = true;
				}
				
			}

		}

})();