/* Javascript Tutorial 1
console.log("Operadores de comparacion y valores booleanos");

var txt1 = "Mayor que: > \nMenor que: < \nIgual que: === o == \nIgual o mayor que: >= \nIgual o menor que: <= \nDiferente: !== o !=";

console.log(txt1);
console.log("4 es mayor que 8?: " +(4>8));
console.log("4 es menor que 8?: " +(4<8));
console.log("4 es igual que 8?: " +(4===8));
console.log("4 es igual o mayor que 8?: " +(4>=8));
console.log("4 es igual o menor que 8?: " +(4<=8));
console.log("4 no es igual que 8?: " +(4!==8));*/

/*console.log("Comparaciones de AND(&&)");
console.log("True && True: " + (true&&true));
console.log("True && False: " + (true&&false));
console.log("False && True: " + (false&&true));
console.log("False && False: " + (false&&false));
console.log("");
console.log("Comparaciones de OR(||)");
console.log("True || True: " + (true||true));
console.log("True || False: " + (true||false));
console.log("False || True: " + (false||true));
console.log("False || False: " + (false||false));*/

//Lectura Lunes 24 de Oct
var saldo = 500;


do{
	var cuenta = Number(prompt("Buen dia, Ingrese su numero de usuario"));
	console.log(cuenta);
}while(isNaN(cuenta)){
	alert("Bienvenido");
	do{
	var opcion = Number(prompt("Gracias por introducir su numero de cuenta que desea hacer \n"
	+ "Elija una de las siguientes opciones \n"
	+ "1. Retirar dinero \n"
	+ "2. Depositar dinero \n"
	+ "3. Revisar mi saldo \n"));
	}while(!(opcion >= 1 && opcion <=3)){
			if( opcion === 1 ){
				do{
					var retiro = Number(prompt("Por favor introduce la cantidad a retirar: "));
				}while(isNaN(retiro)||(!(retiro <= saldo))){
					alert("Usted retiro: " + retiro + " pesos");
					saldo = saldo - retiro;
					alert("Su saldo es: " + saldo + " pesos");
				}
			} else if( opcion === 2 ){
				do{
					var deposito = Number(prompt("Por favor introduce la cantidad a depositar: "));
				}while(isNaN(deposito)){
					saldo = saldo + deposito;
					alert("Su saldo es: " + saldo + " pesos");
				}
			} else if( opcion === 3 ){
					alert("Su saldo es: " + saldo + " pesos");
			}
	}
}


	
	




