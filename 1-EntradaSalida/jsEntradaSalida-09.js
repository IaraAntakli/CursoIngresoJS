/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".
9 bis 
se debe pedir el % por prompt. */
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let txtIdresultado;
	let descuento;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	descuento = prompt("Ingrese el aumento")
	aumento = sueldo*descuento/100;
	aumento = parseInt(aumento);

	txtIdresultado = aumento+sueldo;

//resultado = txtIdResultado//
	alert(txtIdresultado);
}
