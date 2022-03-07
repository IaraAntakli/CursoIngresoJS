/*una agencia de viajes nos contacta para realizar el siguiente programa:
tomar pedidos hasta que el usuario quiera. Nombre, cantidad de días (validar que nos sea negativo ni 0),
precio por día (validar entre 1000 y 3000), lugar al que viajan (validar Córdoba, Mendoza, Entre ríos).


a) de las personas que viajan a Mendoza mostrar el promedio del importe total que se recaudó.
b) el importe total que recaudo Córdoba.
c) mostrar cuantas personas superaron los 15 días y fueron a entre ríos. */

function mostrar()
{
	var respuesta = "si";

	var nombre;
	var cantidadDias;
	var precioDia;
	var lugar;

	var acumuladorImporteMendoza = 0;
	var contadorPersonasMendoza = 0;
	var acumuladorImporteCordoba = 0;	
	var promedioMendoza;	
	var contadorQuince = 0;

	while(respuesta == "si")
	{

		nombreIngresado = prompt("Ingrese nombre");
		cantidadDias = prompt("Ingrese cantidad de dias");
		while(cantidadDias <0)
		{
			cantidadDias = prompt("Error, ingrese cantidad de dias");
		}
		precioDia = prompt("Ingrese precio por dia (entre 1000 y 3000)");
		while(precioDia <1000 || precioDia >3000)
		{
			precioDia = parseInt(prompt("Error, ingrese precio por dia (entre 1000 y 3000)"));
		}
		lugar = prompt("Ingrese un lugar (Cordoba/Mendoza/Entre Rios):").toLowerCase();;
		while(lugar != "cordoba" && lugar != "mendoza" && lugar != "entre rios")
		{
			lugar = prompt("Error, ingrese un lugar (Cordoba/Mendoza/Entre Rios):").toLowerCase();
		}

		switch(lugar)
		{
			case "mendoza":
				acumuladorImporteMendoza = acumuladorImporteMendoza + precioDia;
				contadorPersonasMendoza++;
			break;
			case "cordoba":
				acumuladorImporteCordoba = acumuladorImporteCordoba + precioDia;
			break;
			case "entre rios":
				if(cantidadDias >15)
				{
					contadorQuince++;
				}
			break;

		}

		respuesta = prompt("¿Desea seguir?");
	}

	promedioMendoza = acumuladorImporteMendoza/contadorPersonasMendoza;

	//a) de las personas que viajan a Mendoza mostrar el promedio del importe total que se recaudó.
	document.write(promedioMendoza);
	 //b) el importe total que recaudo Córdoba.
	document.write("<br>" + acumuladorImporteCordoba);
	 //c) mostrar cuantas personas superaron los 15 días y fueron a entre ríos.
	document.write("<br>" + contadorQuince);
}