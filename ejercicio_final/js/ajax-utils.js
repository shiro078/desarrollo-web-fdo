(function(global){

	// Declaramos un objeto como un nombre de espacio para las utilidades
	// que usaremos en nuestro archivo scripts.js
	var ajaxUtils = {};

	// Retorna un objeto con una requisicion HTTP, si observamos esta funcion no esta
	// ligada al objeto ajaxUtils que expondremos al objeto global, esto quiere decir que
	// esta funcion solo servira dentro de este contexto, dentro de esta funcion de tipo 
	// IIFE.
	function getRequestObject(){
		if(window.XMLHttpRequest){
			// Si el objeto global window contiene la propiedad XMLHttpRequest
			// creamos un nuevo objeto con la funcion constructora.
			return (new XMLHttpRequest());
		}
		else if(window.ActiveXObject){
			// Esto es para versiones muy antiguas de IE y puede ser
			// opcional ya que es muy escaso el numero de usuarios que utilizan
			// aun este objeto
			return (new ActiveXObject("Microsoft.XMLHTTP"));
		}else{
			global.alert("Ajax is not supported!");
			return(null);
		}
	}

	// Hacemos un request con el metodo GET al url que le pasemos a la funcion (requestUrl).
	ajaxUtils.sendGetRequest = function(requestUrl, funcionManejadora){

		// Mandamos a llamar a la funcion con la que obtenemos un objeto
		var request = getRequestObject();

		// Esta propiedad nos permite saber cuando la llamada AJAX a un servidor cambia de estado
		request.onreadystatechange = function() {
			manejadorDeRespuesta(request, funcionManejadora);
		};

		// Pasamos el metodo, pasamos el url gurdado en la variable "requestUrl" y el utlimo
		// parametro tiene que ser true, para que nuestra respuesta sea asincrona.
		request.open("GET", requestUrl, true);
		request.send(null); // al metodo send le pasamos datos solamente cuando usamos el metodo
							// POST
	}

	// Esta funcion solo ejecuta la function  "funcion manejadora" si la respuesta esta
	// completa o lista osea la propiedad "readyState es igual a 4" y no hubo un error
	// osea la propiedad status "no retorno un error"
	function manejadorDeRespuesta(request, funcionManejadora){
		// La funcion "funcionManejadora" es una funcion que el usuario va proveer,
		// y si se cumplen las dos condiciones esa funcion que el usuario proporcionara
		// sera ejecutada con el objeto request creado anteriormente.
		if((request.readyState == 4) && (request.status == 200)){
			funcionManejadora(request.responseText);
		}
	}

	// Esponemos toda esta pequena libreria al objeto global window.
	global.$ajaxUtils = ajaxUtils;


})(window);