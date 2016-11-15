var input1 = document.getElementById("categoria1").textContent;
var input2 = document.getElementById("categoria2").textContent;
var input3 = document.getElementById("categoria3").textContent;
var element = document.getElementById("c1");
//Crea un nuevo elemento div
var nuevoDiv1 = document.createElement('div');

function display1(){

	//Al nuevo div le inserto el String con textContent
	nuevoDiv1.className = "col-xs-12 col-sm-8 col-md-9";
	nuevoDiv1.innerHTML = "<h2>Titulo 1 </h2><p>Sitting mistake towards his few country ask. You delighted two rapturous six depending objection happiness something the. Off nay impossible dispatched partiality unaffected. Norland adapted put ham cordial. Ladies talked may shy basket narrow see. Him she distrusts questions sportsmen. Tolerably pretended neglected on my earnestly by. Sex scale sir style truth ought. </p>";
	// appendChild inserto el nuevoDiv dentro de el div que tiene el id
	// 'divNombre'
	element.appendChild(nuevoDiv1);
}

function display2(){

	//Al nuevo div le inserto el String con textContent
	nuevoDiv1.className = "col-xs-12 col-sm-8 col-md-9";
	nuevoDiv1.innerHTML = "<h2>Titulo 2</h2><p>Un texto 2</p>";
	// appendChild inserto el nuevoDiv dentro de el div que tiene el id
	// 'divNombre'
	element.appendChild(nuevoDiv1);
}

function display3(){

	//Al nuevo div le inserto el String con textContent
	nuevoDiv1.className = "col-xs-12 col-sm-8 col-md-9";
	nuevoDiv1.innerHTML = "<h2>Titulo 3</h2><p>Admiration stimulated cultivated reasonable be projection possession of. Real no near room ye bred sake if some. Is arranging furnished knowledge agreeable so. Fanny as smile up small. It vulgar chatty simple months turned oh at change of. Astonished set expression solicitude way admiration. </p>";
	// appendChild inserto el nuevoDiv dentro de el div que tiene el id
	// 'divNombre'
	element.appendChild(nuevoDiv1);

}

