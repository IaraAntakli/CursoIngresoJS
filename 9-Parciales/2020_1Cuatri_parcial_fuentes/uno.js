/*
Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total
*/


function mostrar()
{	var tipoDeProducto;
	var precio;
	var unidades;
	var fabricante;
	var marca;
	var contador = 0;
	var banderaDelPrimero = 0;
	var minimoPrecioAlcohol;
	var cantidadAlcohol;
	var fabricanteAlcohol;
	var acumuladorAlcohol = 0; // para saber unidades del tipo
	var acumuladorPrecioAlcohol = 0; // para acumular precio para promedio
	var contadorAlcohol = 0; //cuantas veces se compro el tipo
	var acumuladorJabon = 0;
	var contadorJabon = 0;
	var acumuladorPrecioJabon = 0;
	var acumuladorBarbijo = 0;
	var contadorBarbijo = 0;
	var acumuladorPrecioBarbijo = 0;
	var promedio;

	while(contador <5)
	{
		tipoDeProducto = prompt("Ingrese un producto (barbijo/jabon/alcohol):");
		while(tipoDeProducto != "barbijo" && tipoDeProducto != "jabon" && tipoDeProducto != "alcohol")
		{
			tipoDeProducto = prompt("Error, ingrese un producto (barbijo/jabon/alcohol):");
		}
		unidades = parseInt(prompt("Ingrese cantidad de unidades (entre 1 y 1000)"));
		while(unidades <1 || unidades >1000)
		{
			unidades = parseInt(prompt("Error, ingrese cantidad de unidades (entre 1 y 1000)"));
		}
		precio = parseInt(prompt("Ingrese precio (entre 100 y 300)"));
		while(precio <100 || precio >300)
		{
			precio = parseInt(prompt("Error, ingrese precio (entre 100 y 300)"));
		}
		marca = prompt("Ingrese marca");
		fabricante = prompt("Ingrese fabricante");

		switch(tipoDeProducto)
	 	{
	 		case "alcohol":
	 			if(banderaDelPrimero == 0)
	 			{
	 				minimoPrecioAlcohol = precio;
	 				cantidadAlcohol = unidades;
	 				fabricanteAlcohol = fabricante;
	 				banderaDelPrimero = 1;

	 			}
	 			else
	 			{
	 				if(minimoPrecioAlcohol > precio)
	 				{
	 					minimoPrecioAlcohol = precio;
	 					cantidadAlcohol = unidades;
	 					fabricanteAlcohol = fabricante;
	 				}
	 			}
	 			acumuladorAlcohol += unidades;
	 			contadorAlcohol++;
	 			acumuladorPrecioAlcohol += precio;

	 		break;
	 		case "jabon":
	 			acumuladorJabon += unidades
	 			contadorJabon++
	 			acumuladorPrecioJabon += precio
	 		break;	
	 		default:
	 			acumuladorBarbijo += unidades
	 			contadorBarbijo++
	 			acumuladorPrecioBarbijo += precio
	 		break;	

	 	}
	 	
	 	contador++;
	}
	 
	//fuera bucle
		//comparar tipo con mas unidades
	if(acumuladorAlcohol > acumuladorJabon && acumuladorAlcohol > acumuladorBarbijo)
	{
		promedio = acumuladorPrecioAlcohol/contadorAlcohol;
	}	
	else
	{
		if(acumuladorJabon > acumuladorBarbijo)
		{
			promedio = acumuladorPrecioJabon/contadorJabon;
		}
		else
		{
			promedio = acumuladorPrecioBarbijo/contadorBarbijo;
		}
	}

document.write("Del más barato de los alcohol, la cantidad de unidades y el fabricante es "+ cantidadAlcohol+" y su fabricante es " + fabricanteAlcohol);
document.write("<br>Del tipo con mas unidades, el promedio por compra es: "+ promedio);
document.write("<br>Cuántas unidades de jabones hay en total es :"+acumuladorJabon);
}
