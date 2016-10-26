/*var saldo = 500;

do{
	cuenta = Number(prompt("Buen dia, Ingrese su numero de usuario"));
}while(isNaN(cuenta));
	alert("Bienvenido su numero de usuario es correcto.");

var validacion = true;

while(validacion){
	var opcion = prompt("Elija una opcion: \n" +
		"1. Retirar Dinero \n" +
		"2. Depositar Dinero \n" +
		"3. Mostrar Saldo \n");


	switch(opcion){
		case "1":
			var retiro = NaN;
			while(isNaN(retiro)){
				retiro = Number(prompt("Introduzca el monto a retirar " +
					"(Solo numeros)"));

				if(isNaN(retiro)){
					alert("El monto ingresado no es correcto");
				}else if(retiro > saldo){
					alert("No tiene suficientes fondos, " +
						"Capture otra cantidad");
					retiro = NaN;
				}else{
					saldo -= retiro;
					alert("Se retiraron " + retiro + " su saldo actual \n"
						+ "es de " + saldo);
					validacion = false;
				} 
			}
			break;
		case "2":
			var deposito = NaN;
			while(isNaN(deposito)){
				deposito = Number(prompt("Introduzca el monto a depositar " +
					"(Solo numeros)"));

				if(isNaN(deposito)){
					alert("El monto ingresado no es correcto");
				}else{
					saldo += deposito;
					alert("Se depositaron " + deposito + " pesos, su saldo actual \n"
						+ "es de " + saldo + " pesos.");
					validacion = false;
				} 
			}
			break;
		case "3":
			alert("Su saldo es: " + saldo + " pesos.")
			var q = prompt("Desear realizar otra operacion?(S/N)");
			if(q === "N" || q === "n"){
				validacion = false;
			}
			break;
		default:
			alert("Lo siento no reconozco la opcion seleccionada \n"
				+ "Selecciona otra opcion");
			break;
	}
} 
*/

//Ejercicio 1
for(var s=1;s<=7;++s){
	for(var t=1;t<=s;++t){
		console.log("# ");
	}
	console.log("\n")
}

//Ejercicio 2
for(var i=1;i<=100;i++){

	if((i%3===0)&&(i%5===0)){
		console.log("FizzBuzz");
	}else if(i%3===0){
		console.log("Fizz");
	}else if(i%5===0){
		console.log("Buzz");
	}else{
		console.log(i);
	}
}