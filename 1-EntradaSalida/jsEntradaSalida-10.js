/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	let importe;
	let descuento;
	let txtIdresultado;

	importe = document.getElementById("txtIdImporte").value;
	importe = parseInt(importe);
	descuento = importe/25;
	descuento = parseInt(descuento);

	txtIdresultado = importe-descuento;

	alert(txtIdresultado);
}
