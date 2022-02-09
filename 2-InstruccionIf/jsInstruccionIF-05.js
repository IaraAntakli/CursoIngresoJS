function mostrar()
{
	/*Al ingresar una edad solo debemos informar si la persona NO es adolescente.*/

	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18)
	{
		alert("Usted no es un adolescente");
	}
 	if(edadIngresada <= 12)
 	{
 		alert("Usted no es un adolescente");
 	}

 	
	//&& edadIngresada <= 12

	
}//FIN DE LA FUNCIÓN