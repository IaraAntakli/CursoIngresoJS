/* Iara Antakli
	Al presionar el Botón, 
	mostrar un número Random del 1 al 10 inclusive */

function mostrar()
{	var numeroRandom;

	numeroRandom = Math.floor(Math.random() * (10 - 1)) + 1;

	alert("Su numero es: "+ numeroRandom);	

}//FIN DE LA FUNCIÓN