/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo;
	let aumento;
	let txtIdresultado;

	sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseInt(sueldo);
	aumento = sueldo*0.10;
	aumento = parseInt(aumento);

	txtIdresultado = aumento+sueldo;

//resultado = txtIdResultado//
	alert(txtIdresultado);
}
