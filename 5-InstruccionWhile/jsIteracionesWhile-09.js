/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	//variables
	var numeroIngresado;
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var banderaDelPrimero;

	respuesta="si";
	banderaDelPrimero = 0;

	//bucle
	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero == 0)
		{
			numeroMinimo = numeroIngresado;
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = 1;
		}
		if(numeroIngresado>numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
		}
		else
		{
			if(numeroIngresado<numeroMinimo)
			{
				numeroMinimo = numeroIngresado;
			}
		}

		respuesta=prompt("¿Desea seguir ingresando numeros?");
	}

	document.getElementById("txtIdMaximo").value=numeroMaximo;
	document.getElementById("txtIdMinimo").value=numeroMinimo;
}

/* no funciona (num max undifined)

	while(respuesta == "si")
	{
		numeroIngresado = prompt("Ingrese un numero: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(banderaDelPrimero == 0 || numeroIngresado<numeroMinimo)
		{
			numeroMinimo = numeroIngresado;
			banderaDelPrimero = 1;
		}
		if(banderaDelPrimero == 0 || numeroIngresado>numeroMaximo)
		{
			numeroMaximo = numeroIngresado;
			banderaDelPrimero = 1;
		}
		
		respuesta=prompt("¿Desea seguir ingresando numeros?");
	}
*/