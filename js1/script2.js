//Lectura de Arrays
/*var numeros_letras = [1,"a",2000,3,"sdfsd",50,"bb","bbb","sdfsd",990];
var numeros = [];

for(var i=0;i<numeros_letras.length;i++){
	if(typeof numeros_letras[i] === "number"){
		numeros.push(numeros_letras[i]);
	}
}

for(var i=0;i<numeros.length;i++){
	console.log(numeros[i]);
}*/

//Lectura de objetos
/*
var rango = function(inicio,fin){
	var arr = [];
	for(var i=inicio;i<=fin;i++){
		arr.push(i);
	}
	return arr;
}

var suma = function(ar){
	var suma = 0;
	for(var i=0;i<ar.length;i++){
		suma += ar[i];
	}
	return suma;
}

var arrayInversa1 = function(ar){
	var arr=[];
	var l = ar.length;
	for(var i=0;i<l;i++){
		arr.push(ar.pop());
	}
	return arr;
}

var ar = [1,2,3];
var arrayInversa = function(ar){
	for(var i=0;i<ar.length;i++){
		ar.unshift(ar[i]);
	}
	return ar;
}

var a=[1,2,3,4,5];
console.log(rango(1,10));
console.log(suma(a));
//console.log(arrayInversa(a));*/

//ejercicio IIFE functions
//(function() {})();

//DOM lectura
function Validar(){
	var nombre = document.getElementById("Name").value;
	var email = document.getElementById("Email").value;
	var email2 = document.getElementById("Email2").value;
	var edad = document.getElementById("Age").value;

	if(nombre.length < 3){
		document.getElementById("contenido").innerHTML += "<h2>El Nombre es muy corto </h2>";
	}else if(email !== email2){
		document.getElementById("c1").innerHTML += "<h2>El Email no es igual </h2>";
	}else if(edad < 18){
		document.getElementById("contenido").innerHTML += "<h2>La edad es menor a 18 años. </h2>";
	}
}

function hide(){
	document.getElementById("c1").style.display = 'none';
}