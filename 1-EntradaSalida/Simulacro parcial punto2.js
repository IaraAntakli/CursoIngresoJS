/*2. Se necesita llevar el registro de un vacunatorio. Para ello se podrá registrar los datos de las
personas vacunadas mientras el usuario quiera.
De cada vacunado se solicita:
Nombre
Edad (mayor o igual a 12)
Vacuna (“rusa”, “china”, “americana”)
Si la edad esta entre 12 y 17 años ambos incluidos solo se permite la vacuna americana
Dosis (“P” en caso de ser la primera dosis o “S” en caso de ser la segunda dosis)
Genero (Femenino, Masculino)
Informar:
a- Promedio de edad de los que se vacunaron con la china.
b- Nombre y vacuna del masculino más joven.
c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
e- Vacuna más inoculada
*/
function mostrar()
{
	var nombreIngresado;	
	var genero;
	var edadIngresada;
	var vacuna;
	var dosis;
	var respuesta = "si";

	var contadorVacunaAmericana = 0;
	var contadorVacunaRusa = 0;
	var contadorVacunaChina = 0;

	var banderaDelPrimero = 0;

	var contadorPrimeraDosis = 0;
	var contadorSegundaDosis = 0;
	var contadorTotalVacunados = 0;

	var contadorMenoresAmericana = 0;

	var promedioEdadVacunadosChina;
	var edadChina = 0;

	var porcentajeMenoresAmericana;
	var porcentajePrimeraDosis;

	var vacunaInoculada;

	var nombreMasJoven;
	var vacunaMasJoven;
	var edadMasJoven;


	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese nombre");
		genero = prompt("Ingrese genero (f/m)");
		while(genero != "f" && genero != "m")
		{
			genero = prompt("Error, ingrese genero (f/m)");
		}
		edadIngresada = parseInt(prompt("Ingrese la edad de la persona: "));
		while(isNaN(edadIngresada)==true || edadIngresada < 12)
		{
			edadIngresada = parseInt(prompt("Error, ingrese una edad valida mayor a 11: "));
		}
		if(edadIngresada > 11 && edadIngresada < 18)
		{
			vacuna = "americana";
			alert("A las personas que estén entre los 12 y 17 años inclusive, solamente se les aplica vacuna americana");
		}
		else
		{
			vacuna = prompt("Ingrese el origen de la vacuna (china/rusa/americana): ").toLowerCase();
			while(vacuna != "rusa" && vacuna != "china" && vacuna != "americana")
			{
				vacuna = prompt("Error. Ingrese el origen de la vacuna correctamente ").toLowerCase();
			}
		}
		dosis = prompt("Ingrese dosis ('p' para primera y 's' para segunda)").toLowerCase();
		while(dosis != "p" && dosis != "s")
		{
			dosis = prompt("Error, ingrese dosis ('p' para primera y 's' para segunda)").toLowerCase();
		}
		switch(dosis)
		{
			case "p":
				contadorPrimeraDosis++
			break;
			case "s":
				contadorSegundaDosis++
			break;				
		}
		switch(vacuna)
		{
			case "china":
				edadChina = edadChina + edadIngresada;
				contadorVacunaChina++;
				contadorTotalVacunados++;
			break;
			case "rusa":
				contadorVacunaRusa++
				contadorTotalVacunados++	
			break;
			case "americana":
				contadorVacunaAmericana++;
				if(edadIngresada <19)
				{
					contadorMenoresAmericana++;
				}
				contadorTotalVacunados++;
			break;
		}
		//b- Nombre y vacuna del masculino más joven.
		if(genero == "m" && edadIngresada < edadMasJoven || banderaDelPrimero == 0)
		{
			edadMasJoven = edadIngresada;
			nombreMasJoven = nombreIngresado;
			vacunaMasJoven = vacuna;
			banderaDelPrimero = 1;
		}
		else
		{
			if(edadMasJoven > edadIngresada)
			{
				edadMasJoven = edadIngresada;
				nombreMasJoven = nombreIngresado;
			}
		}
		
		respuesta = prompt("¿Desea seguir ingresando personas?");
	}
	//a- Promedio de edad de los que se vacunaron con la china.
	promedioEdadVacunadosChina = edadChina/contadorVacunaChina;
	//c- De las personas que recibieron la vacuna americana que porcentaje son menores de edad
	porcentajeMenoresAmericana = contadorMenoresAmericana*100/contadorVacunaAmericana;
	//d- Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados
	porcentajePrimeraDosis = contadorPrimeraDosis*100/contadorTotalVacunados;
	//e- Vacuna más inoculada
	if(contadorVacunaAmericana > contadorVacunaChina && contadorVacunaAmericana > contadorVacunaRusa)
	{
		vacunaInoculada = "americana";
	}	
	else
	{
		if(contadorVacunaChina > contadorVacunaRusa)
		{
			vacunaInoculada = "china";
		}
		else
		{
			vacunaInoculada = "rusa";
		}
	}

	document.write("Promedio de edad de los que se vacunaron con la china "+promedioEdadVacunadosChina);
	document.write("<br>"+"Nombre y vacuna del masculino más joven: "+ nombreMasJoven + " y "+ vacunaMasJoven);
	document.write("<br>"+"Porcentaje menor americana "+porcentajeMenoresAmericana);
	document.write("<br>"+"Porcentaje primera dosis "+ porcentajePrimeraDosis);
	document.write("<br>"+"Vacuna mas inoculada: "+ vacunaInoculada);
}