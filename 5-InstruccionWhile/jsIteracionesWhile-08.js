/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	//pedir variables
	var contador;
	var respuesta;//variable de control
	var numeroIngresado;
	var sumaPositivos;
	var multiplicacionNegativos;
	
	contador=0;
	sumaPositivos=0;
	multiplicacionNegativos=1;
	respuesta="si";
	
	//armar bucle
	while(respuesta == "si")
	{
		//pedir datos
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);
		if(numeroIngresado >= 0)
		{
			sumaPositivos = sumaPositivos+numeroIngresado;
		}
		else
		{
			multiplicacionNegativos = multiplicacionNegativos*numeroIngresado;
		}
		
		contador++
		respuesta=prompt("¿Desea seguir ingresando numeros?");
	}


	txtIdSuma.value=sumaPositivos;
	txtIdProducto.value=multiplicacionNegativos;

}//FIN DE LA FUNCIÓN