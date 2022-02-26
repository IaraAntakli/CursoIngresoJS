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
{
	
	let contador;
	let tipo;
	let precio;
	let cantidadUnidades;
	let marca;
	let fabricante;
	let minimoAlcohol;
	let banderaDelPrimero;
	let cantidadMinimaAlcohol;
	let fabricanteAlcohol;
	let acumuladorJabon;
	let acumuladorBarbijo;
	let acumuladorAlcohol;
	let acumuladorePrecioJabon;
	let acumuladorePrecioBarbijo;
	let acumuladorePrecioAlcohol;
	let contadorAlcohol;
	let contadorBarbijo;
	let contadorJabon;
	let promedio;

	contador=0;
	banderaDelPrimero= "es el primero";
	acumuladorJabon =0;
	acumuladorAlcohol=0;
	acumuladorBarbijo=0;
	acumuladorePrecioJabon=0;
	acumuladorePrecioBarbijo=0;
	acumuladorePrecioAlcohol=0;
	contadorAlcohol=0;
	contadorBarbijo=0;
	contadorJabon=0;

	while(contador<5)
	{
		tipo = prompt("ingrese el tipo (barbijo, jabon o alcohol)");

		while(tipo != "barbijo" && tipo != "jabon"&& tipo !="alcohol")
		{
			tipo = prompt("error reingrese el tipo (barbijo, jabon o alcohol)");
		}

		precio = prompt("ingrese el precio entre 100 y 300");
		precio = parseInt(precio);

		while(precio <100 || precio >300)
		{
			precio = prompt("error reingrese el precio entre 100 y 300");
			precio = parseInt(precio);
		}

		cantidadUnidades = prompt("ingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
		cantidadUnidades = parseInt(cantidadUnidades);

		while(cantidadUnidades < 1 || cantidadUnidades > 1000)
		{
			cantidadUnidades = prompt("error reingrese la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades)");
			cantidadUnidades = parseInt(cantidadUnidades);
		}

		marca = prompt("ingrese marca");

		fabricante = prompt("ingrese fabricante");

		if(tipo == "alcohol")
		{

			if(banderaDelPrimero ="es el primero" )
			{
			minimoAlcohol = precio;
			cantidadMinimaAlcohol= cantidadUnidades;
			fabricanteAlcohol = fabricante;
			banderaDelPrimero ="ya se cargo el primero";
			}
			else
			{

				if(minimoAlcohol > precio)
				{
					minimoAlcohol = precio;
					cantidadMinimaAlcohol= cantidadUnidades;
					fabricanteAlcohol = fabricante;
				}

			}
			
			acumuladorAlcohol = acumuladorAlcohol +cantidadUnidades;
			acumuladorePrecioAlcohol = acumuladorePrecioAlcohol + precio;
			contadorAlcohol=contadorAlcohol+1;
		}
		else
		{
			if(tipo == "jabon")
			{
				acumuladorJabon = acumuladorJabon + cantidadUnidades;
				acumuladorePrecioJabon = acumuladorePrecioJabon + precio;
				contadorJabon = contadorJabon+1;


			}
			else
			{
				acumuladorBarbijo = acumuladorBarbijo +cantidadUnidades;
				acumuladorePrecioBarbijo = acumuladorePrecioBarbijo + precio;
				contadorBarbijo=contadorBarbijo+1;

			}

		}




		contador=contador +1;
	}

	if(acumuladorAlcohol > acumuladorBarbijo && acumuladorAlcohol > acumuladorJabon)
	{
		promedio = acumuladorePrecioAlcohol/contadorAlcohol; 
	}
	else
	{
		if(acumuladorBarbijo > acumuladorJabon)
		{
			promedio = acumuladorePrecioBarbijo/contadorBarbijo; 
		}

		else
		{
			promedio = acumuladorePrecioJabon/contadorJabon; 
		}

	}


document.write("Del más barato de los alcohol, la cantidad de unidades y el fabricante es "+cantidadMinimaAlcohol+" y su fabricante es " + fabricanteAlcohol);
document.write("<br>Del tipo con mas unidades, el promedio por compra es: "+promedio);
document.write("<br>Cuántas unidades de jabones hay en total es :"+acumuladorJabon);
}
