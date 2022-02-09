function mostrar()
{
	/* Al ingresar una edad debemos informar si la persona es mayor de edad, 
	sino informar que es un menor de edad*/

	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18)
	{
		alert("Usted es mayor de edad");
	}
	else(alert("Usted es menor de edad"));

}//FIN DE LA FUNCIÓN