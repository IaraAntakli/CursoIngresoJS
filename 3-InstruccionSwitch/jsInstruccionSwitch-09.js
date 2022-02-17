/* Iara Antakli
una agencia de viajes debe sacar las tarifas de los viajes, 
se cobra $15.000 por cada estadia como base, 
se pide el ingreso de una estacion del año y localidad para vacacionar 
para poder calcular el precio final.
en Invierno: bariloche tiene un aumento del 20%,
cataratas y cordoba tiene un descuento del 10%,
Mar del plata tiene un descuento del 20%.
en Verano: bariloche tiene un descuento del 20%,
cataratas y Cordoba tiene un aumento del 10%,
Mar del plata tiene un aumento del 20%.
en Otoño y Primavera: bariloche tiene un aumento del 10%,
cataratas tiene un aumento del 10%, Mar del plata tiene un aumento del 10% y
Cordoba tiene el precio sin descuento*/

function mostrar()
{
	var estacionIngresada;
	var destinoIngresado;
	var tarifaBase;
	var porcentaje;
	var precioConPorcentaje;
	var precioFinal;

	estacionIngresada = document.getElementById("txtIdEstacion").value;
	destinoIngresado = document.getElementById("txtIdDestino").value;

	tarifaBase = 15000;

	porcentaje = 0;

	switch(destinoIngresado)
	{
		case "Bariloche":
			switch(estacionIngresada)
			{
				case "Invierno":
					porcentaje = 20;
					break;
				case "Verano":
					porcentaje = -20;
					break;
				default:
					porcentaje = 10;
					break;	

			}
			break;	
		case "Cataratas":
			switch(estacionIngresada)
			{
				case "Invierno":
					porcentaje = -10;
					break;
				case "Verano":
					porcentaje = 10;
					break;
				default:
					porcentaje = 10;
					break;
			}
			break;	
		case "Cordoba":
			switch(estacionIngresada)
			{
				case "Invierno":
					porcentaje = -10;
					break;
				case "Verano":
					porcentaje = 10;
					break;
				default:
					porcentaje = 0;
					break;
			}
			break;	
		case "Mar del plata":
			switch(estacionIngresada)
			{
				case "Invierno":
					porcentaje = -20;
					break;
				case "Verano":
					porcentaje = 20;
					break;
				default:
					porcentaje = 10;
					break;
			}
			break;			
	}

	precioConPorcentaje = tarifaBase * porcentaje/100;

	precioFinal = tarifaBase + precioConPorcentaje;

	alert(precioFinal);



	

}//FIN DE LA FUNCIÓN