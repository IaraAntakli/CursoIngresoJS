/*3. Llegan vuelos con vacunas de distintos lugares del mundo
Mientras el usuario quiera se debe registrar de cada vuelo:
-Origen (“Asia”, “Europa”, “América”)
-Cantidad de vacunas (entre 500000 y 2500000)
-Costo del vuelo (entre 1 millón y 5 millones de pesos)
Informar:
a- El origen que envió menor cantidad de vacunas
b- El total sin descuentos a pagar por los gastos de los viajes
c- Si en total se recibieron mas de 10 millones de vacunas se hace
un descuento de 25%, Si se recibieron entre 5 y 10 millones (inclusive) el
descuento es del 15% con menor cantidad no hay descuento.
Informar si hubo descuento de cuanto fue y el importe final con
Descuento.
*/
function mostrar()
{
	//variables
	var paisOrigen;
	var cantidadVacunas;
	var costoVuelo;
	var respuesta = "si";


	var acumuladorVacunasAsia = 0;
	var acumuladorVacunasEuropa = 0;
	var acumuladorVacunasAmerica = 0;

	var paisMenosVacunas;

	var totalVacunasRecibidas;

	var costoTotaldeVuelo;
	var acumuladorVueloAsia = 0;
	var acumuladorVueloEuropa =0;
	var acumuladorVueloAmerica =0;
	var TotalConDescuento;

	var descuento;

	while(respuesta == "si")
	{
		paisOrigen = prompt("Ingrese un pais de origen (asia/europa/america): ").toLowerCase();;
    	while(paisOrigen != "asia" && paisOrigen != "europa" && paisOrigen != "america")
    	{
      		paisOrigen = prompt("Error, ingrese un pais de origen (asia/europa/america): ").toLowerCase();
    	}
    	cantidadVacunas = parseInt(prompt("Ingrese cantidad de vacunas (entre 500000 y 2500000)"));
		while(cantidadVacunas <500000 || cantidadVacunas >2500000)
		{
			cantidadVacunas = parseInt(prompt("Error, ingrese cantidad de vacunas (entre 500000 y 2500000)"));
		}
		costoVuelo = parseInt(prompt("Ingrese costo de vuelo (entre 1000000 y 5000000)"));
		while(costoVuelo <1000000 || costoVuelo >5000000)
		{
			costoVuelo = parseInt(prompt("Error, ingrese costo de vuelo (entre 1000000 y 5000000)"));
		}

		//a- El origen que envió menor cantidad de vacunas
		switch(paisOrigen)
		{
			case "asia":
				acumuladorVacunasAsia = acumuladorVacunasAsia + cantidadVacunas;
			break;
			case "europa":
				acumuladorVacunasEuropa = acumuladorVacunasEuropa + cantidadVacunas;
			break;
			case "america":
				acumuladorVacunasAmerica = acumuladorVacunasAmerica + cantidadVacunas;
			break;
		}

		if(acumuladorVacunasAsia < acumuladorVacunasEuropa && acumuladorVacunasAsia < acumuladorVacunasAmerica)
		{
			paisMenosVacunas = "Asia";
		}	
		else
		{

			if(acumuladorVacunasEuropa < acumuladorVacunasAmerica)
			{
				paisMenosVacunas = "Europa";
			}
			else
			{
				paisMenosVacunas = "America";
			}
		}

		totalVacunasRecibidas = acumuladorVacunasAmerica + acumuladorVacunasEuropa + acumuladorVacunasAsia;
		
		switch(paisOrigen)
		{
			case "asia":
				acumuladorVueloAsia = acumuladorVueloAsia + costoVuelo;
			break;
			case "europa":
				acumuladorVueloEuropa = acumuladorVueloEuropa + costoVuelo;
			break;
			case "america":
				acumuladorVueloAmerica = acumuladorVueloAmerica + costoVuelo;
			break;
		}

		costoTotaldeVuelo = acumuladorVueloAsia + acumuladorVueloEuropa + acumuladorVueloAmerica;

		if(totalVacunasRecibidas >10000000)
		{
			descuento = costoTotaldeVuelo*0.25;
			TotalConDescuento = costoTotaldeVuelo - descuento;
		}
		else
		{
			if(totalVacunasRecibidas >5000000 && totalVacunasRecibidas <10000000)
			{
				descuento = costoTotaldeVuelo*0.15;
				TotalConDescuento =  costoTotaldeVuelo - descuento;
			}
		}

		
	
    	respuesta = prompt("¿Desea seguir ingresando paises?");
	}
	
	document.write("<br>"+ "menos vacuna" + paisMenosVacunas);
	document.write("Costo total de vuelo: " + costoTotaldeVuelo);
	document.write("<br" + "descuento: " + descuento + " importe con descuento "+ TotalConDescuento);

}