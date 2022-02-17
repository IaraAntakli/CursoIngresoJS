function mostrar()
{
	/*Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años)
	o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/

	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 13 && edadIngresada <= 17)
	{
		alert("Usted es un adolescente");
	}
	else
		if(edadIngresada >= 18)
		{
			alert("Usted es mayor de edad");
		}
 		else
 		{
 			alert("Usted es un niño");
 		}  
	

}//FIN DE LA FUNCIÓN