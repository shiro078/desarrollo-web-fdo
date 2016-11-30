(function () {
'use strict';

// Inicializamos un modulo y damos le damos un nombre
// Los modulos son ligados a nuestra vista(html), por medio de la directiva ng-app 
// y no son mas que una coleccion de controladores, servicios, filtros, directivas
//  y otras configuraciones que se iran explicando durante el curso.
angular.module('MiApp', [])

// Nuestro controlador, no es mas que una funcion constructora que al
// momento de ligarlo a nuestro html por medio de la directiva 
// ng-controller crea una instancia de ese controlador y crea un nuevo
// $scope.
.controller('MiControlador', MiControlador);

function MiControlador($scope){
  var planetas = [
    {
      name: "Tatooine",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "10465",
      climate: "arid",
      gravity: "1 standard",
      terrain: "desert",
      population: "200000",
    },
    {
      name: "Alderaan",
      rotation_period: "24",
      orbital_period: "364",
      diameter: "10465",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grasslands, mountains",
      population: "200000000000",
    },
    {
      name: "Yavin IV",
      rotation_period: "24",
      orbital_period: "4818",
      diameter: "10200",
      climate: "temperate, tropical",
      gravity: "1 standard",
      terrain: "jungle, rainforests",
      population: "1000",
    },
    {
      name: "Hoth",
      rotation_period: "23",
      orbital_period: "304",
      diameter: "7200",
      climate: "frozen",
      gravity: "1.1 standard",
      terrain: "tundra",
      population: "unknown",
    },
    {
      name: "Dagobah",
      rotation_period: "23",
      orbital_period: "341",
      diameter: "8900",
      climate: "murky",
      gravity: "N/A",
      terrain: "swamps",
      population: "unknown",
    },
    {
      name: "Bespin",
      rotation_period: "12",
      orbital_period: "5110",
      diameter: "118000",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "gas giant",
      population: "60000000",
    },
    {
      name: "Endor",
      rotation_period: "18",
      orbital_period: "402",
      diameter: "4900",
      climate: "temperate",
      gravity: ".85 standard",
      terrain: "forests, mountains, lakes",
      population: "30000000",
    },
    {
      name: "Naboo",
      rotation_period: "26",
      orbital_period: "312",
      diameter: "12120",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "grassy hills, swamps, forests, mountains",
      population: "45000000000",
    },
    {
      name: "Coruscant",
      rotation_period: "24",
      orbital_period: "368",
      diameter: "12240",
      climate: "temperate",
      gravity: "1 standard",
      terrain: "cityscape, mountains",
      population: "10000000000000000",
    }


  ];
  $scope.planetas = planetas;
} 


})();