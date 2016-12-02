// IFEE, recordar que es una funcion invocada inmediatamente y tambien que le pasamos como parametro
// el objeto window. que dentro de nuestra funcion se llamara global. Este lo utilizaremos
// para hacer parte de la implementacion disponible en globalmente y poder acceder a ella
// desde cualquier archivo JS.
(function(global){
	var sw = {};

	// Guardamos en una variable la ruta de nuestro template, ese que contiene todo
	// el codigo HTML para mostrar la pagina de inicio.
	var inicioHtml = "templates/inicio-template.html";

	var categoryList = "templates/category-list.html";

	var fullinfo = "templates/fullinfo.html";

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
		string = string.replace(new RegExp(propRemplazo, "g"), propValor);

		return string;
	}

	// Estaremos esperando el evento DOMContentLoaded el cual se dispara despues de que el DOM
	// ha sido 100% cargado. Este evento se dispara antes que las imagenes y el CSS.
	document.addEventListener("DOMContentLoaded", function(event){

		// Esto lo usamos para cuando sea la primera vez que cargue, cargue la pagina de incio.
		muestraCargando("#contenido-principal");
		$ajaxUtils.sendGetRequest(inicioHtml, function(respuesta){
			insertarHtml("#contenido-principal", respuesta);
		});

	});

	sw.cargaCategoryList = function(url){
		muestraCargando("#contenido-principal");
		$ajaxUtils.sendGetRequest(url, crearHtml);
	}

	sw.cargaMasInfo = function(url){
		muestraCargando("#contenido-principal");
		$ajaxUtils.sendGetRequest(url, crearHtml2);
	}

	function crearHtml2(personajes){
		$ajaxUtils.sendGetRequest(fullinfo, function(template){
			var resultados = JSON.parse(personajes);

			var finalHtml = "<div class='container'>";
			finalHtml += "<div class='row'>";
			for (key in resultados){
				var html = template;
				var objarray = Object.values(resultados[key]);
				var proparray = Object.keys(resultados[key]);

				html += "<p>" +"<b>"+ key +"</b>"+ ": " + resultados[key]+ "</p>";

				finalHtml += html;

			}
			finalHtml += "</div>";
			finalHtml += "</div>";

			insertarHtml("#contenido-principal", finalHtml);
		});
	}

	function crearHtml(personajes){
		// Hago otra llamada ajax
		$ajaxUtils.sendGetRequest(categoryList, function(template){
			// Convertimos el resultado JSON de la variable personajes a
			// un objeto de Javascript y guardamos en la variable resultados
			// la propiedad results del objeto que convertimos guardamos el
			// resultado en la variable (es un array)
			var resultados = JSON.parse(personajes).results;

			var finalHtml = "<div class='container'>";
			finalHtml += "<div class='row'>";
			for(var i = 0; i < resultados.length; i++){
				var html = template;

				var name = resultados[i].name;
				var url = resultados[i].url;
				console.log(typeof url);
				html = insertarPropiedad(html, "url", url);
				//html = html.replace("#",resultados[i].url);
				if(resultados[i].hasOwnProperty('gender')){
					var gender = resultados[i].gender;
					var hair_color = resultados[i].hair_color;
					var height = resultados[i].height;

					html = insertarPropiedad(html, "name", name);
					html = insertarPropiedad(html, "gender", gender);
					html = insertarPropiedad(html, "height", height);
					html = insertarPropiedad(html, "hair_color", hair_color);
				}else if(resultados[i].hasOwnProperty('diameter')){
					var diameter = resultados[i].diameter;
					var climate = resultados[i].climate;
					var population = resultados[i].population;

					html = html.replace(personajesUrl,"http://swapi.co/api/planets/");

					html = insertarPropiedad(html, "name", name);
					html = insertarPropiedad(html, "gender", diameter);
					html = insertarPropiedad(html, "height", climate);
					html = insertarPropiedad(html, "hair_color", population);
				}else if(resultados[i].hasOwnProperty('starship_class')){
					var model = resultados[i].model;
					var length = resultados[i].length;
					var passengers = resultados[i].passengers;

					html = html.replace(personajesUrl,"http://swapi.co/api/starships/");

					html = insertarPropiedad(html, "name", name);
					html = insertarPropiedad(html, "gender", model);
					html = insertarPropiedad(html, "height", length);
					html = insertarPropiedad(html, "hair_color", passengers);
				}
				
				finalHtml += html;
			}

			finalHtml += "</div>";
			finalHtml += "</div>";

			insertarHtml("#contenido-principal", finalHtml);
			
		});
	}



	// exponemos el objeto literal al objeto global.
	global.$sw = sw;

})(window);