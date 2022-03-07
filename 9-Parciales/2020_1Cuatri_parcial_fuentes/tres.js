/*Bienvenidos.
En el ingreso a un viaje en avion nos solicitan nombre , edad, sexo("f" o "m"),
estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad (mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/
function mostrar()
{
	//variables, iniciar
	var nombreIngresado;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta = "si";
	var temperaturaMaxima;
	var nombreMasTemp;
	var banderaDelPrimero = 0;
	var contadorSolteros = 0;
	var contadorViudosMayores = 0;
	var contadorViudosYSolterosHombres = 0;
	var contadorTerceraEdadTemperatura = 0;
	var promedioHombresSolteros;
	var contadorHombres = 0;

	//bucle
	while(respuesta == "si")
	{
		nombreIngresado = prompt("Ingrese nombre");
		edad = parseInt(prompt("Ingrese edad"));
		sexo = prompt("Ingrese sexo (f/m)");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, ingrese sexo (f/m)");
		}
		estadoCivil = prompt("Ingrese estado civil (soltero/casado/divorciado/viudo)");
		while(estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "divorciado" && estadoCivil != "viudo")
		{
			estadoCivil = prompt("Error, ingrese estado civil (soltero/casado/divorciado/viudo)");
		}
		temperaturaCorporal = parseInt(prompt("Ingrese temperatura corporal:"));

		//b) Cuantos mayores de edad estan viudos x
		//c) La cantidad de hombres que hay solteros o viudos. x
		switch(estadoCivil)
		{
			case "viudo":
				if(edad >18)
				{
					contadorViudosMayores++;
				}
				else
				{
					if(sexo == "m")
					{
						contadorViudosYSolterosHombres++;
						contadorHombres++;
					}
				}
			case "soltero":
				if(sexo == "m")
				{
					contadorSolteros++;
					contadorViudosYSolterosHombres++;
					contadorHombres++;
				}
			break;
			case "casado":
				if(sexo == "m")
				{
					contadorHombres++;
				}
			break;
			case "divorciado":
				if(sexo == "m")
				{
					contadorHombres++;
				}
			break;
		}
		//a) El nombre de la persona con mas temperatura.
		if(temperaturaCorporal>temperaturaMaxima || banderaDelPrimero == 0)
		{
			temperaturaMaxima = temperaturaCorporal;
			nombreMasTemp = nombreIngresado;
			banderaDelPrimero = 1;

		}
		else
		{
			if(temperaturaMaxima<temperaturaCorporal)
			{
				temperaturaMaxima = temperaturaCorporal;
				nombreMasTemp = nombreIngresado;
			}
		}

		//d) cuantas personas de la tercera edad (mas de 60 años) , tienen mas de 38 de temperatura x
		if(edad > 59 && temperaturaCorporal >37)
		{
			contadorTerceraEdadTemperatura++;
		}

		//e) El promedio de edad entre los hombres solteros.
		if(sexo == "m" && estadoCivil == "soltero")
		{
			promedioHombresSolteros = contadorSolteros/contadorHombres;
		}

		respuesta = prompt("¿Desea seguir ingresando pasajeros?");

	}

	document.write("Nombre de la persona con mas temperatura: " + nombreMasTemp);
	document.write("<br>"+ "Cantidad mayores de edad viudos: "+ contadorViudosMayores);
	document.write("<br>"+ "Cantidad hombres viudos o solteros: "+ contadorViudosYSolterosHombres);
	document.write("<br>"+ "Personas 3era edad con mas de 38°: "+ contadorTerceraEdadTemperatura);
	document.write("<br>"+ "Promedio de edad entre hombres solteros: "+ promedioHombresSolteros);	
}
	