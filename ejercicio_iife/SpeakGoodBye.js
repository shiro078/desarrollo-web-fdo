// NOTA! los pasos en este archivo son basicamento identicos a los que 
// hiciste en el archivo SpeakHello.js
(function (window){
	var byeSpeaker = {
		speak: function(name){
			console.log(speakWord + " " + name);
		}
	};
	var speakWord = "Goodbye";

	window.byeSpeaker = byeSpeaker;
})(window);
// PASO 6: Envuelve el contenido entero de SpeakGoodBye.js dentro de una IIFE

// PASO 7: Crea un objeto,llamado 'byeSpeaker' el cual de deberas ligarle el
// metodo 'speak' el cual deberas exponer en el contexto global
// var byeSpeaker =

// NO ligues la variable speakWord al objeto byeSpeaker
//var speakWord = "Good Bye";

// PASO 8: Reescribe la funcion 'speak' para que este ligada al objeto
// byeSpeaker en lugar de ser una funcion solitaria.
/*function speak(name) {
  console.log(speakWord + " " + name);
}*/

// PASO 9: Expon el objeto 'byeSpeaker' al objeto global. llamalo
// 'byeSpeaker' en el ambito global.
// xxxx.xxxx = byeSpeaker;