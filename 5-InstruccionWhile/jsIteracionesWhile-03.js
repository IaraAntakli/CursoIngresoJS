/*Iara Antakli
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese el número clave.");

	while(claveIngresada != "utn750")
	{
		claveIngresada = prompt("Error, ingrese el número clave.");
	}

	alert("Clave correcta.");
	
}//FIN DE LA FUNCIÓN
