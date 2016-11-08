// PASO 2: Envuelve el contenido entero de SpeakHello.js dentro de una IIFE
(function (window){
	var helloSpeaker = {
		speak: function(name){
			console.log(speakWord + " " + name);
		}
	};
	var speakWord = "Hello";

	window.helloSpeaker = helloSpeaker;
})(window);
// PASO 3: Crea un objeto,llamado 'helloSpeaker' el cual de deberas ligarle el
// metodo 'speak' el cual deberas exponer en el contexto global
// var helloSpeaker =

// NO ligues la variable speakWord al objeto helloSpeaker
//var speakWord = "Hello";

// PASO 4: Reescribe la funcion 'speak' para que este ligada al objeto
// helloSpeaker en lugar de ser una funcion solitaria.
/*function speak(name) {
  console.log(speakWord + " " + name);
}*/

// PASO 5: Expon el objeto 'helloSpeaker' al objeto global. llamalo
// 'helloSpeaker' en el ambito global.
// (Nota, el þaso 6 sera hecho en el archivo SpeakGoodBy.js)

// xxxx.xxxx = helloSpeaker;