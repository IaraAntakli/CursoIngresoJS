/* Iara Antakli
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;

	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	while(numeroIngresado > 11)
	{
		numeroIngresado = prompt("Error, ingrese un número entre 0 y 10.");	

		document.getElementById("txtIdNumero").value = numeroIngresado;
	}
	
	alert("Numero correcto");
	
}//FIN DE LA FUNCIÓN