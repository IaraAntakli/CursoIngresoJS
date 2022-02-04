/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	let largo;
	let ancho;
	let radio;
	let area;
	let hiloAlambre;

	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	radio = document.getElementById("txtIdRadio").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	radio = parseInt(radio);

	area = largo*ancho;

	hiloAlambre = area*3;

	alert(hiloAlambre+"m2");

}
function Circulo () 
{
	let largo;
	let ancho;
	let radio;
	let circunferencia;
	let hiloAlambre;
	
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	radio = document.getElementById("txtIdRadio").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	radio = parseInt(radio);

	circunferencia = radio*3.14*2;

	hiloAlambre = circunferencia*3;

	alert(hiloAlambre+"m2");
}
function Materiales () 
{
	let largo;
	let ancho;
	let radio;
	let area;
	let cemento;
	let cal;
	
	largo = document.getElementById("txtIdLargo").value;
	ancho = document.getElementById("txtIdAncho").value;
	radio = document.getElementById("txtIdRadio").value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);
	radio = parseInt(radio);

	area = largo*ancho;

	cemento = area*2
	cal = area*3

	alert("Se necesitan: "+cemento+" bolsas de cemento " + " y "+cal+" de cal.");
}