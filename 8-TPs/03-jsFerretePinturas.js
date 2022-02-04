/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
	let fahrenheit;
	let centigrados;

	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura = parseInt(temperatura);

	fahrenheit = temperatura;
	centigrados = fahrenheit - 32;


alert(fahrenheit+" Fahrenheit son "+centigrados+" centigrados");
}

function CentigradosFahrenheit () 
{
	let temperatura;
	let fahrenheit;
	let centigrados;

	temperatura = document.getElementById("txtIdTemperatura").value;
	temperatura = parseInt(temperatura);

	centigrados = temperatura;
	fahrenheit = centigrados + 32;


alert(centigrados+" centigrados son "+fahrenheit+" Fahrenheit");
}
