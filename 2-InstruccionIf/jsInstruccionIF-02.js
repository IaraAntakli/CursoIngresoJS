function mostrar()
{
	//tomo la edad  

	var edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);

	if(edadIngresada >= 18 )
	{
		alert("Edad adecuada");	
	} 

	//else(alert("Edad no adecuada"));
	

}//FIN DE LA FUNCIÓN