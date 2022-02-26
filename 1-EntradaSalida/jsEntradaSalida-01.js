/* 
Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.
Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, 
la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. 
En caso contrario la comisión será del 5%.
Se debe mostrar:
a. Promedio de ventas por cada vendedor.
b. Cantidad de perfumes que vendió María
c. El importe más barato junto con el vendedor que lo vendió.
d. El nombre del vendedor con menor comisión.
*/

function mostrar()
{
	var vendedor; //Juan, Maria, Lucrecia
	var tipoProducto; //Perfume, Shampoo, Maquillaje
	var importeProducto; // numero mayor que 0
	var cantidadProducto;
	var sumaVentasJuan;
	var sumaVentasMaria;
	var sumaVentasLucrecia;
	var comision;
	var contador;
	var respuesta;
	var ventasJuanPerfume;
	var ventasMariaPerfume;
	var ventasLucreciaPerfume;
	var ventasJuanShampoo;
	var ventasMariaShampoo;
	var ventasLucreciaShampoo;
	var ventasJuanMaquillaje;
	var ventasMariaMaquillaje;
	var ventasLucreciaMaquillaje;

	contador = 0;

	respuesta = prompt("Desea ingresar productos vendidos?");

	while(respuesta == "si")
	{
		vendedor = prompt("Ingrese un vendedor (Juan/Maria/Lucrecia): ")
		vendedor = vendedor.toLowerCase()
		while(vendedor != "juan" && vendedor != "maria" && vendedor != "lucrecia")
		{
			vendedor = prompt("Error, ingrese un vendedor valido (Juan/Maria/Lucrecia): ");
			vendedor = vendedor.toLowerCase()
		}

		tipoProducto = prompt("Ingrese un tipo de producto (Perfume/Shampoo/Maquillaje): ");
		tipoProducto = tipoProducto.toLowerCase()
		while(tipoProducto != "perfume" && tipoProducto != "shampoo" && tipoProducto != "maquillaje")
		{
			tipoProducto = prompt("Error, ingrese un tipo de producto valido (Perfume/Shampoo/Maquillaje): ")
			tipoProducto = tipoProducto.toLowerCase()
		}

		cantidadProducto = prompt("Ingrese cantidad de unidades: ");
		cantidadProducto = parseInt(cantidadProducto);
		while(cantidadProducto <1)
		{
			cantidadProducto = prompt("Error, ingrese una cantidad igual o mayor a 1")
		}

		importeProducto = prompt("Ingrese un importe: ");
		importeProducto = parseInt(importeProducto);
		while(importeProducto <1)
		{
			importeProducto = prompt("Error, las ventas no pueden ser menores a 1, ingrese un importe valido")
			importeProducto = parseInt(importeProducto)
		}

		if(vendedor == "juan")
		{
			switch(tipoProducto)
			{
				case "perfume":
					ventasJuanPerfume = importeProducto*cantidadProducto
					break;
				case "shampoo":
					ventasJuanShampoo = importeProducto*cantidadProducto
					break;
				default:
					ventasJuanMaquillaje = importeProducto*cantidadProducto
					break;		
			}
		}
		else
		{
			if(vendedor == "maria")
			{
				switch(tipoProducto)
				{
					case "perfume":
						ventasMariaPerfume = importeProducto*cantidadProducto
						break;
					case "shampoo":
						ventasMariaShampoo = importeProducto*cantidadProducto
						break;
					default:
						ventasMariaMaquillaje = importeProducto*cantidadProducto
						break;		
				}
			}
			else
			{
				switch(tipoProducto)
				{
					case "perfume":
						ventasLucreciaPerfume = importeProducto*cantidadProducto
						break;
					case "shampoo":
						ventasLucreciaShampoo = importeProducto*cantidadProducto
						break;
					default:
						ventasLucreciaMaquillaje = importeProducto*cantidadProducto
						break;		
				}
			}
		}
		
		switch(vendedor)
		{
			case "juan":
				sumaVentasJuan = ventasJuanPerfume + ventasJuanShampoo + ventasJuanMaquillaje
				promedio = sumaVentasJuan / 3
				break;
			case "maria":
				sumaVentasMaria = ventasMariaPerfume+ventasMariaShampoo+ventasMariaMaquillaje
				promedio = sumaVentasMaria / 3
				break;
			default:
				sumaVentasLucrecia = ventasLucreciaPerfume + ventasLucreciaMaquillaje+ ventasLucreciaShampoo
				promedio = sumaVentasLucrecia / 3
				break;	

		}

		

		contador = contador + 1;
		respuesta = prompt("Desea seguir ingresando productos vendidos?")
	}

	

	document.write("El promedio total de las ventas de Juan es: "+ promedio, "El promedio de Maria es "+promedio, "el promedio de Lucrecia es "+promedio);
	document.write("La cantidad de pefumes que vendio Maria es: "+ );
	document.write("El importe mas barato junto con el vendedor que lo vendio son: "+);
	document.write("El nombre del vendedor con menor comision es: "+);

} 

