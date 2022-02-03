/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resultado;

	dividendo = parseInt(dividendo);
	divisor = parseInt(divisor);
	dividendo = document.getElementById("txtIdNumeroDivisor").value;
	divisor = document.getElementById("txtIdNumeroDividendo").value;

	resultado = dividendo % divisor

	alert("El resto es: " + resultado);
}
