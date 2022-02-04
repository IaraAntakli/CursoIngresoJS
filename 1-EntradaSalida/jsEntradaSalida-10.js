/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
-
se debe pedir el % por prompt
cambiamos la salida:
Mostrar por alert el importe, la cantidad del descuento, el importe con el descuento
ej: "El importe es 1000 la cantidad de descuento es 250 y el importe con el descuento es 750"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let porcentaje;
	let txtIdresultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);

	porcentaje = prompt("Ingrese el descuento");
	porcentaje = parseInt(porcentaje);

	descuento = parseInt(descuento);
	descuento = importe*porcentaje/100;	

	txtIdresultado = importe-descuento;

	alert("El importe es "+importe+", la cantidad de descuento es de "+descuento+ " y el importe con descuento es "+txtIdresultado);

}
