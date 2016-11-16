// Voy a obtener los botones con la funcion querySelector.
// Primero obtengo los elementos a los que quiero agregar un evento.
// Y despues de haber guardado esos elementos en una variable, a esa variable
// directamente puede mandar a llamar a el atributo addEventListener
var btnAzul = document.querySelector("#btnAzul");
var btnRojo = document.querySelector("#btnRojo");
var btnVerde = document.querySelector("#btnVerde");

// Obtengo los div contenedores de los colores.
var contenedorAzul = document.querySelector("#pintaAzul");
var contenedorRojo = document.querySelector("#pintaRojo");
var contenedorVerde = document.querySelector("#pintaVerde");


/*console.log(btnAzul);
console.log(btnRojo);
console.log(btnVerde);*/

// Agregamos el evento click a cada uno de los botones, que en este momento
// estan guardados en las variables antes declaradas.

btnAzul.addEventListener("click", cambiarColor);
btnRojo.addEventListener("click", cambiarColor);
btnVerde.addEventListener("click", cambiarColor);




// Aqui implemento las funciones que manejaran los eventos de los botones.

function cambiarColor(){
	if(this.id === "btnAzul"){
		// Aseguramos que se desaparezca los otros contenedores si estan visibles
		// en ese momento
		/*if(contenedorRojo.classList.contains("mostrar")){
			contenedorRojo.classList.toggle("mostrar");
			contenedorRojo.classList.toggle("ocultar");
		}
		if(contenedorVerde.classList.contains("mostrar")){
			contenedorVerde.classList.toggle("mostrar");
			contenedorVerde.classList.toggle("ocultar");
		}

		contenedorAzul.classList.toggle("mostrar");
		contenedorAzul.classList.toggle("ocultar");*/
		cont2(contenedorAzul);
	}else if(this.id === "btnRojo"){
		// Aseguramos que se desaparezca los otros contenedores si estan visibles
		// en ese momento

		cont2(contenedorRojo);
	}else{
		// Aseguramos que se desaparezca los otros contenedores si estan visibles
		// en ese momento
		cont2(contenedorVerde);
	}
}

function cont(contenedor1,contenedor2,contenedor3){
		if(contenedor1.classList.contains("mostrar")){
			contenedor1.classList.toggle("mostrar");
			contenedor1.classList.toggle("ocultar");
		}
		if(contenedor2.classList.contains("mostrar")){
			contenedor2.classList.toggle("mostrar");
			contenedor2.classList.toggle("ocultar");
		}

		contenedor3.classList.toggle("mostrar");
		contenedor3.classList.toggle("ocultar");
}

function cont2(contenedor){
			if(contenedor == "contenedorAzul"){
				if(contenedorRojo.classList.contains("mostrar")){
				contenedorRojo.classList.toggle("mostrar");
				contenedorRojo.classList.toggle("ocultar");
				}
				if(contenedorVerde.classList.contains("mostrar")){
					contenedorVerde.classList.toggle("mostrar");
					contenedorVerde.classList.toggle("ocultar");
				}

				contenedor.classList.toggle("mostrar");
				contenedor.classList.toggle("ocultar");
			}
			else if(contenedor === "contenedorRojo"){
				if(contenedorAzul.classList.contains("mostrar")){
				contenedorAzul.classList.toggle("mostrar");
				contenedorAzul.classList.toggle("ocultar");
				}
				if(contenedorVerde.classList.contains("mostrar")){
					contenedorVerde.classList.toggle("mostrar");
					contenedorVerde.classList.toggle("ocultar");
				}

				contenedor.classList.toggle("mostrar");
				contenedor.classList.toggle("ocultar");
			}
			else if(contenedor === "contenedorVerde"){
				if(contenedorAzul.classList.contains("mostrar")){
				contenedorAzul.classList.toggle("mostrar");
				contenedorAzul.classList.toggle("ocultar");
				}
				if(contenedorRojo.classList.contains("mostrar")){
					contenedorRojo.classList.toggle("mostrar");
					contenedorRojo.classList.toggle("ocultar");
				}

				contenedor.classList.toggle("mostrar");
				contenedor.classList.toggle("ocultar");
			}
			
}
