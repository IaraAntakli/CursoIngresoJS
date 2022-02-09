function mostrar()
{ /*
	Al ingresar una edad debemos informar si la persona es adolescente, 
	edad entre 13 y 17 años (inclusive) .*/
	
	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 13 && edadIngresada <= 17)
	{
		alert("Usted es un adolescente");
	}
	
	

}//FIN DE LA FUNCIÓN