// IFEE, recordar que es una funcion invocada inmediatamente y tambien que le pasamos como parametro
// el objeto window. que dentro de nuestra funcion se llamara global. Este lo utilizaremos
// para hacer parte de la implementacion disponible en globalmente y poder acceder a ella
// desde cualquier archivo JS.
(function(global){
	var sw = {};

	// Guardamos en una variable la ruta de nuestro template, ese que contiene todo
	// el codigo HTML para mostrar la pagina de inicio.
	var inicioHtml = "templates/inicio-template.html";

	var categoryList_titulo = "templates/categoryList-titulo.html";

	var personajesUrl = "http://swapi.co/api/people/";

	// Funcion que nos va servir para insertar el html dentro del selector que escogimos.
	var insertarHtml = function(selector, html){
		var elemento = document.querySelector(selector);
		elemento.innerHTML = html;
	};

	// funcion para mostrar un gif que aparecera cuando se este cargando la pagina
	var muestraCargando = function(selector){
		var html = "<div class='text-center loader'>";
		html += "<img src='img/ajax-loader.gif'></div>";
		insertarHtml(selector, html);
	};

	var insertarPropiedad = function(string, propNombre, propValor){
		// Vamos a captar todos las propiedades que esten dentro de {{}}
		var propRemplazo = "{{" + propNombre + "}}";

		// Usamos expresiones regulares para encontrar dichos strings en una
		// cadena de texto, el "flag" "g" en las expresiones regulares, significa
		// que reemplazara todos los que concuerden con la busqueda.
		string = string.replace(new RegExp(propRemplazo, "g"));

		return string;
	}

	// Estaremos esperando el evento DOMContentLoaded el cual se dispara despues de que el DOM
	// ha sido 100% cargado. Este evento se dispara antes que las imagenes y el CSS.
	document.addEventListener("DOMContentLoaded", function(event){

		// Esto lo usamos para cuando sea la primera vez que cargue, cargue la pagina de incio.
		muestraCargando("#contenido-principal");
		$ajaxUtils.sendGetRequest(inicioHtml, function(respuesta){
			document.querySelector("#contenido-principal").innerHTML = respuesta;
		});

	});

	sw.cargaCategoryList = function(){
		muestraCargando("#contenido-principal");
		$ajaxUtils.sendGetRequest(personajesUrl, crearHtml);
	}

	function crearHtml(personajes){

		// Hago otra llamada ajax
		$ajaxUtils.sendGetRequest(personajesUrl, function(categorias){
			
		});
	}

	// exponemos el objeto literal al objeto global.
	global.$sw = sw;

})(window);