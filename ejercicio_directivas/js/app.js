(function(){

	'use strict'

	angular.module('DirectivasApp', [])
		.controller('MostrarUsuariosControlador', MostrarUsuariosControlador)
		.controller('AgregarUsuariosControlador',AgregarUsuariosControlador)
		.service('UsuariosService',UsuariosService);


		MostrarUsuariosControlador.$inject =['UsuariosService'];
		function MostrarUsuariosControlador(UsuariosService){
			var mostrarLista = this;

			mostrarLista.personas = UsuariosService.obtenerUsuarios();

			mostrarLista.remover = function(indice){
				console.log(indice);
				UsuariosService.eliminarUsuario(indice);
			}
		}

		AgregarUsuariosControlador.$inject = ['UsuariosService'];
		function AgregarUsuariosControlador(UsuariosService){
			var agregarUsuario = this;

			agregarUsuario.nombre = "";
			agregarUsuario.apellido = "";
			agregarUsuario.usuario = "";
			agregarUsuario.fnacimiento = new Date("");
			agregarUsuario.dpto = "";

			agregarUsuario.AgregarUsuario = function(){
				if(agregarUsuario.nombre !== "" && agregarUsuario.apellido !== ""){
					UsuariosService.agregarUsuario(agregarUsuario.nombre,agregarUsuario.apellido,agregarUsuario.usuario,agregarUsuario.fnacimiento,agregarUsuario.dpto);
				}
			}

		}
		function UsuariosService(){
			var servicio = this;

			var personas = [];
			var ordena = "";
			//$scope.propiedad = null;
			var activa = false;

			//console.log($scope.activa);

			var personas = [
				{
					nombre: "Abraham",
					apellido: "Garcia",
					usuario: "abraganu",
					fecha_nacimiento: new Date("1986/07/25"),
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

				},
				{
					nombre: "Jesus",
					apellido: "Cepeda",
					usuario: "jecepeda",
					fecha_nacimiento: new Date("December 13, 1990"),
					email: "jecepeda@company.com",
					departamento: "IT",
					success: false,

				},
				{
					nombre: "Jorge",
					apellido: "Espino",
					usuario: "jopino",
					fecha_nacimiento: new Date("October 30, 1988"),
					email: "jopino@gmail.com",
					departamento: "Finanzas",
					success: false,

				},
				{
					nombre: "Edgar",
					apellido: "Garcia",
					usuario: "eganu",
					fecha_nacimiento: new Date("October 13, 1986"),
					email: "eganu@gmail.com",
					departamento: "Finanzas",
					success: false,

				},
				{
					nombre: "Sandra",
					apellido: "Perez",
					usuario: "sper",
					fecha_nacimiento: new Date("November 10, 1991"),
					email: "sper@company.com",
					departamento: "RH",
					success: false,
				}
			];

			servicio.agregarUsuario = function(nombre, apellido,usuario,fecha_nacimiento, departamento){
				var persona = {
					nombre: nombre,
					apellido: apellido,
					usuario: usuario,
					fecha_nacimiento: new Date(fecha_nacimiento),
					departamento: departamento
				};


				personas.push(persona);
			};

			servicio.eliminarUsuario = function(indice){
			
				personas.splice(indice, 1);
			};

			servicio.obtenerUsuarios = function(){
				return personas;
			};
		}


})();