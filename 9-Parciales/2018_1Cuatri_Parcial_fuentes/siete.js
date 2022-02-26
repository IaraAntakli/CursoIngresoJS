/*Iara Antakli
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt 
de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) 
de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.
*/

function mostrar()
{
	var nota;
	var sexo;
	var cantidadAlumnos; //contador alumnos

	cantidadAlumnos = 0;

	
	while(cantidadAlumnos <6)
	{
			
		sexo = prompt("Ingrese sexo del alumno: f o m ");
		nota = prompt("Ingrese una nota entre 0 y 10");
		nota = parseInt(nota);

		while(cantidadAlumnos > 0)
		{

		}

		cantidadAlumnos = cantidadAlumnos +1;
	}

	//promedio= notas/cantidadalumnos
}
/*
sexo = prompt("Ingrese sexo del alumno: f o m ");

	if(sexo != "f" && sexo != "m")
	{
		alert("Error, sexo incorrecto. Intentelo de nuevo");

	}
	else
	{
		nota = prompt("Ingrese una nota entre 0 y 10");
		nota = parseInt(nota);

		if(nota < 0 || nota >10)
		{
			alert("Error, nota incorrecta. Intentelo de nuevo");
			//nota = prompt("Ingrese una nota entre 0 y 10");
		}
	}
	
*/
/*Realizar el algoritmo que permita el ingreso por prompt 
de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) 
de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/
