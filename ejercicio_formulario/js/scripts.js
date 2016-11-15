function enviarForm(){
	var inputs = document.getElementsByTagName("input");

	for(var i = 0; i < inputs.length; i++){
		
		switch(inputs[i].name){
			case "txtNombre":
				if(inputs[i].value.length < 3){
					var element = document.getElementById("divNombre");
					//Crea un nuevo elemento div
					var nuevoDiv1 = document.createElement('div');

					//Al nuevo div le inserto el String con textContent
					nuevoDiv1.textContent = "Su nombre tiene un error debe de " +
						"ser de mas de 2 caracteres";
					// appendChild inserto el nuevoDiv dentro de el div que tiene el id
					// 'divNombre'
					element.appendChild(nuevoDiv1);
					/*function erasechild(){
						nuevoDiv1.removeChild(nuevoDiv1.childNodes[0]);

					}*/
					//var erase = setTimeout(erasechild,2000);
				}
				break;
			case "userEmail":
				// En este parte, se utiliza una expresion regular y se manda a llamar al metodo test
				// que recibe como parametro un string y revisa que este string sea un email valido
				var esEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(inputs[i].value);
				if(!esEmail){
					var element = document.getElementById("divEmail");
					//Crea un nuevo elemento div
					var nuevoDiv2 = document.createElement('div');

					//Al nuevo div le inserto el String con textContent
					nuevoDiv2.textContent = "Introduzca un email valido";
					// appendChild inserto el nuevoDiv dentro de el div que tiene el id
					// 'divNombre'
					element.appendChild(nuevoDiv2);
					/*function erasechild(){
						nuevoDiv.removeChild(nuevoDiv.childNodes[0]);
						
					}*/
					//var erase = setTimeout(erasechild,2000);
				}
				break;
			// TODO: Hacer otro case para revisar el input del password, validar que este
			// tenga al menos 8 caracteres.
			case "userPass":
				if(inputs[i].value.length < 8){
					var element = document.getElementById("divPass");
					//Crea un nuevo elemento div
					var nuevoDiv3 = document.createElement('div');

					//Al nuevo div le inserto el String con textContent
					nuevoDiv3.textContent = "Introduzca un password de 8 caracteres minimo.";
					// appendChild inserto el nuevoDiv dentro de el div que tiene el id
					// 'divNombre'
					element.appendChild(nuevoDiv3);
					/*function erasechild(){
						nuevoDiv2.removeChild(nuevoDiv2.childNodes[0]);
						
					}*/
					//var erase = setTimeout(erasechild,2000);
				}
				break;
			default:
				break;
		}
	}

	setTimeout(erase,2000);
	function erase(){
		while(nuevoDiv1){
			nuevoDiv1.removeChild(nuevoDiv1.lastChild);

			nuevoDiv2.removeChild(nuevoDiv2.lastChild);
			nuevoDiv3.removeChild(nuevoDiv3.lastChild);
		}

	}
}


// Retorna un array con los elementos que encuentre en la propiedad document
// osea en nuestro DOM
//var inputs = document.getElementsByTagName("input");

// Puedo acceder a los atributos de mis elementos en el array y compararlos o de aqui
// hacer validaciones basados en el valor que tiene cada atributo
/*for(var i = 0; i < inputs.length; i++){
	if(inputs[i].name === "txtNombre"){
		console.log(inputs[i]);
		console.log(inputs[i].name);
	}
}*/