/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar variables 
	var numeroIngresado;
	var respuesta = "si";
	var contadorPositivos = 0;
	var contadorNegativos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var acumuladorPositivos = 0;
	var acumuladorNegativos = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia; //positivo-negativp
	
	//bucle resp=si
	while(respuesta == "si")
	{
		//pedir numero
		numeroIngresado=parseInt(prompt("Ingrese un numero: "))
		if(numeroIngresado < 0)//analizar signo
		{
			contadorNegativos++;
			acumuladorNegativos = acumuladorNegativos + numeroIngresado;
		}
		else
		{
			if(numeroIngresado == 0)
			{
				contadorCeros++;
			}
			else
			{
				contadorPositivos++;
				acumuladorPositivos += numeroIngresado;
			}
		}
		if(numeroIngresado % 2 == 0) //condicion paridad
		{
			contadorPares++;
		}

		respuesta = prompt("¿Desea seguir ingresando numeros?");
	}
	//calculos promedios

	promedioNegativos = acumuladorNegativos / contadorNegativos;

	promedioPositivos = acumuladorPositivos / contadorPositivos;

	//mostrar resultado
	document.write("Suma negativos: "+ acumuladorNegativos + "<br>");
	document.write("Suma positivos: "+ acumuladorPositivos + "<br>");
	document.write("Cantidad negativos: "+ contadorNegativos + "<br>");
	document.write("Cantidad positivos: "+ contadorPositivos + "<br>");
	document.write("Cantidad de ceros: "+ contadorCeros + "<br>");
	document.write("Cantidad de pares: "+ contadorPares + "<br>");
	document.write("Promedio negativos: "+ promedioNegativos + "<br>");
	document.write("Promedio positivos: "+ promedioPositivos + "<br>");
}
