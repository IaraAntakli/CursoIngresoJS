/*el hospital mi pueblo nos pide realizar un programa para tomar los siguientes datos:
pedir el ingreso de datos hasta que el usuario quiera
vacunas aplicadas validar (0 para ninguna,1 para 1°dosis,2 para 2°dosis,3 para 3°dosis)
edad (validar que no sea negativo y no puede sobrepasar los 150 años)
doctor (validar su apellido debe ser (perez, lopez,diaz))
nombre del paciente.
a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.
b) el menor paciente que tenga 1 dosis o más, su nombre y su edad. x
c)el doctor que más pacientes tuvo, sacar el promedio de edades. */

function mostrar()
{
	var nombrePaciente;
	var dosis;
	var edadIngresada;
	var doctor;
	var respuesta = "si";
	var banderaDelMenor = 0;

	var contadorMayor60SinVacuna = 0;
	var edadMenorDosis;
	var edadMenor;
	var nombreMenor;

	var contadorLopez = 0;
	var contadorPerez = 0;
	var contadorDiaz = 0;
	var acumuladorEdadesLopez = 0;
	var acumuladorEdadesPerez = 0;
	var acumuladorEdadesDiaz = 0;
	var promedioEdad;
	var doctorMasPacientes; //sacar promedio de edad

	while(respuesta == "si")
	{
		nombrePaciente = prompt("Ingrese nombre");
		edadIngresada = parseInt(prompt("Ingrese edad"));
		while(edadIngresada >150 && edadIngresada <0) 
		{
			edadIngresada= prompt("Error, ingrese edad");
		}
		dosis= parseInt(prompt("Ingrese dosis de la vacuna, 0 para ninguna, 1 para primera dosis, 2 para segunda y 3 para tercera"));
		while(dosis != 0 && dosis != 1 && dosis != 2 && dosis != 3)
		{
			dosis= parseInt(prompt("Error, ingrese vacuna, 0 para ninguna, 1 para primera dosis, 2 para segunda y 3 para tercera"));
		}
		doctor=prompt("Ingrese nombre del doctor (lopez/perez/diaz): ").toLowerCase();
		while(doctor != "lopez" && doctor != "perez" && doctor != "diaz")
		{
			doctor=prompt("Error, ingrese nombre del doctor (lopez/perez/diaz): ").toLowerCase();
		}

		switch(doctor)
		{
			case "lopez":
				contadorLopez++;
				acumuladorEdadesLopez = acumuladorEdadesLopez + edadIngresada;
			break;
			case "perez":
				contadorPerez++;
				acumuladorEdadesPerez = acumuladorEdadesPerez + edadIngresada;
			break;
			case "diaz":
				contadorDiaz++;
				acumuladorEdadesDiaz = acumuladorEdadesDiaz + edadIngresada;
			break;
		}

		if(dosis == 0 && edadIngresada >59)
		{
			contadorMayor60SinVacuna++;
		}


		if(banderaDelMenor == 0 && dosis >=1)
		{
			edadMenorDosis = dosis;
			edadMenor = edadIngresada;
			nombreMenor = nombrePaciente;
			banderaDelMenor = 1;
		}
		else
		{
			if(dosis >=1 || edadIngresada < edadMenor)
			{
				edadMenorDosis = dosis;
				edadMenor = edadIngresada;
				nombreMenor = nombrePaciente;
			}
		}
	
		respuesta = prompt("¿Desea seguir ingresando pacientes?");
	
	}

	if(contadorLopez > contadorPerez && contadorLopez > contadorDiaz)
	{
		promedioEdad = acumuladorEdadesLopez/contadorLopez;
		doctorMasPacientes = "Lopez";

	}	
	else
	{
		if(contadorPerez > contadorDiaz)
		{
			promedioEdad = acumuladorEdadesPerez/contadorPerez;
			doctorMasPacientes = "Perez";
		}
		else
		{
			promedioEdad = acumuladorEdadesDiaz/contadorDiaz;
			doctorMasPacientes = "Diaz";
		}
	}

	//a) la cantidad de pacientes que no tengan vacunas y sean mayor a 60 años.
	document.write(contadorMayor60SinVacuna);

	//b) el menor paciente que tenga 1 dosis o más, su nombre y su edad. 
	document.write("<br> Menor paciente: " + nombreMenor + ", "+ edadMenor);

	//c)el doctor que más pacientes tuvo, sacar el promedio de edades. 
	document.write("<br> Doctor mas pacientes y promedio de edad "+ doctorMasPacientes + ", " +promedioEdad);
}
