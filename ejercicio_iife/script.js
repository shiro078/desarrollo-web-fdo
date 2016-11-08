// Instructions.
//
// La idea de esta practica es que tomemos un array de nombres
// y despues despleguemos en la consola ya sea Hello "name" o Good Bye "name"
// El programa debera de decir "Hello" a cualquier nombre excepto los que inician
// con la letra "J" o "j", si son estas letras debera de decir "Good Bye".
// Por lo tanto la salida final en consola debera lucir como la siguiente.
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim

Alerta!!! ALERTAA!!!
El codigo NO funciona actualmente, es tu trabajo hacerlo funcionar como ya
hemos descrito en los requerimentos y en los pasos para completar el ejercicio
WARNING!!! WARNING!!!
*/

var names = ["Yaakov","John","Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"];

for(var i=0;i<names.length;i++){
	var firstLetter = names[i].charAt(0);
	if(firstLetter === "J"){
		window.byeSpeaker.speak(names[i]);
	}else{
		window.helloSpeaker.speak(names[i]);
	}
}