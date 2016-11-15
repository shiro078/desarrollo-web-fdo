var b1 = document.querySelector(".btn-danger");
var b2 = document.querySelector(".btn-primary");
var b3 = document.querySelector(".btn-warning");
var b4 = document.getElementById("bt");

b1.addEventListener("click",rojo);
b2.addEventListener("click",azul);
b3.addEventListener("click",amarillo);
b4.addEventListener("mouseover",cambiarColor);
b4.addEventListener("mouseout",revertir);

function rojo(){
	var d1 = document.querySelector(".d1");
	d1.style.backgroundColor = "red";
	d1.style.borderColor = "red";
}

function azul(){
	var d1 = document.querySelector(".d2");
	d1.style.backgroundColor = "blue";
	d1.style.borderColor = "blue";
}

function amarillo(){
	var d1 = document.querySelector(".d3");
	d1.style.backgroundColor = "yellow";
	d1.style.borderColor = "yellow";
}

function cambiarColor(){

	b4.style.backgroundColor = "#9b59b6";
	b4.style.borderColor = "#9b59b6";
}
 function revertir(){
 
 	b4.style.backgroundColor = "white";
	b4.style.borderColor = "black";
 }

