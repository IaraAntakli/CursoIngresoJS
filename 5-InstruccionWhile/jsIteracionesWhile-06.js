/* Iara Antakli
Al presionar el botón pedir 5 números 
e informar la suma acumulada
y el promedio.*/


function mostrar()
{
	var numeroIngresado;
	var contador;
	var acumulador;

	contador=0;
	acumulador=0;

	while(contador < 5)
	{
		numeroIngresado = prompt("Ingrese un número: ");
		numeroIngresado = parseInt(numeroIngresado);
		
		acumulador = acumulador + numeroIngresado;

		contador = contador + 1; //vueltas

	}
	
	document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador/5;

}//FIN DE LA FUNCIÓN