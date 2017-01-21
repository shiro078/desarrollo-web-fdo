(function(){
	'use strict';

	angular.module("EmpleadosApp", [])
		.controller("MostrarEmpleadosController", MostrarEmpleadosController)
		.controller("ActualizarEmpleadoController", ActualizarEmpleadoController)
		.controller("AgregarEmpleadoController", AgregarEmpleadoController)
		.factory("EmpleadosFactory", EmpleadosFactory);

		
		MostrarEmpleadosController.$inject = ["EmpleadosFactory", "$rootScope"]
		function MostrarEmpleadosController(EmpleadosFactory, $rootScope){
			var mostrarCtrl = this;

			var promesa = EmpleadosFactory.getEmpleados();

			promesa.then(function(resolve){
				mostrarCtrl.empleados = resolve.data;
				console.log(mostrarCtrl.empleados);
			}).catch(function(error){
				console.log("hubo un error");
			});

			mostrarCtrl.pasarDatos = function(index){
				$rootScope.$broadcast("update:modal", mostrarCtrl.empleados[index] );
			}

			mostrarCtrl.borrarEmpleado = function(index){
				var promesa = EmpleadosFactory.borrarEmpleado(index);
				location.reload();
			}

		}

		AgregarEmpleadoController.$inject = ["EmpleadosFactory", "$rootScope"];
		function AgregarEmpleadoController(EmpleadosFactory,$rootScope){
			var agregarCtrl = this;

			agregarCtrl.datosEmpleado = {
				nombre: "",
				apellido: "",
				departamento: "",
				edad: 0
			};

			agregarCtrl.agregarEmpleado = function(){
				var promesa = EmpleadosFactory.agregarEmpleado(agregarCtrl.datosEmpleado);
				location.reload();
			}
		}

		ActualizarEmpleadoController.$inject = ["EmpleadosFactory", "$rootScope"]
		function ActualizarEmpleadoController(EmpleadosFactory, $rootScope){
			var actualizarCtrl = this;

			actualizarCtrl.datosEmpleado = {};

			$rootScope.$on("update:modal", function(event, data){
				actualizarCtrl.datosEmpleado.nombre = data.nombre;
				actualizarCtrl.datosEmpleado.apellido = data.apellido;
				actualizarCtrl.datosEmpleado.departamento = data.departamento;
				actualizarCtrl.datosEmpleado.edad = data.edad;
				actualizarCtrl.datosEmpleado.id = data.id;
				console.log("Datos", data);
			});

			console.log(actualizarCtrl.datosEmpleado);
			actualizarCtrl.actualizarEmpleado = function(){
				var promesa = EmpleadosFactory
								.updateEmpleados(actualizarCtrl.datosEmpleado.id, actualizarCtrl.datosEmpleado);
								location.reload();
			}
			

		}

		

		EmpleadosFactory.$inject = ["$http"]
		function EmpleadosFactory($http){
			var factoriaEmp = {
				getEmpleados: getEmpleados,
				updateEmpleados: updateEmpleados,
				agregarEmpleado: agregarEmpleado,
				borrarEmpleado: borrarEmpleado
			}

			return factoriaEmp;


			function getEmpleados(){
				return $http.get("http://localhost:3000/empleado");
			}

			function updateEmpleados(id, datos){
				return $http.put("http://localhost:3000/empleado/" + id, datos);
			}

			function agregarEmpleado(datos){
				return $http.post("http://localhost:3000/empleado/", datos);
			}

			function borrarEmpleado(id){
				return $http.delete("http://localhost:3000/empleado/"+id)
			}
		}

})();