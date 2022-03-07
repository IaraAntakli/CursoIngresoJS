/* 
Una empresa de venta de cosméticos necesita un programa que permita la carga de productos
vendidos,
junto a los datos del vendedor. Se requiere ingresar los siguientes campos:
• Vendedor: Juan, María, Lucrecia
• Tipo producto: Perfume, Shampoo o Maquillaje
• Importe de la venta (Numero mayor que cero)
No hay un límite total de ventas, y cada vendedor puede realizar varias ventas.

Se debe mostrar:
a. Promedio de ventas por cada vendedor
b. Cantidad de perfumes que vendió María. x
c. El importe más barato junto con el vendedor que lo vendió.

Una vez finalizada la carga de productos vendidos se debe calcular la comisión del vendedor.
Si la suma de las ventas realizadas por cada vendedor está entre 5000 y 10000, 
la comisión será del 15%.
Si la comisión supera los 10000, la comisión será del 20%. 
En caso contrario la comisión será del 5%.

d. El nombre del vendedor con menor comisión.
*/

function mostrar()
{
	//variables, iniciar
	var vendedor;
	var tipoDeProducto;
	var importeVenta;
	var importeMasBarato;
	var vendedorMasBarato;
	var respuesta = "si";
	var banderaDelPrimero = 0;

	var comisionJuan;
	var comisionMaria;
	var comisionLucrecia;
	var vendedorMenorComision;
	var acumuladorImporteJuan = 0;
	var acumuladorImporteMaria = 0;
	var acumuladorImporteLucrecia = 0;
	var contadorPerfumeMaria = 0;
	var contadorVentasJuan = 0;
	var contadorVentasMaria = 0;
	var contadorVentasLucrecia = 0;

	while(respuesta == "si")
	{
		vendedor = prompt("Ingrese un vendedor (juan/maria/lucrecia)");
		while(vendedor != "juan" && vendedor != "maria" && vendedor != "lucrecia")
		{
			vendedor = prompt("Error, ingrese un vendedor (juan/maria/lucrecia):");
		}
		tipoDeProducto = prompt("Ingrese un producto (perfume/shampoo/maquillaje):");
		while(tipoDeProducto != "perfume" && tipoDeProducto != "shampoo" && tipoDeProducto != "maquillaje")
		{
			tipoDeProducto = prompt("Error, ingrese un producto (perfume/shampoo/maquillaje):");
		}
		importeVenta = parseInt(prompt("Ingrese importe mayor a 0"));
		while(importeVenta <0)
		{
			importeVenta = parseInt(prompt("Error, ingrese importe mayor a 0"));
		}
		//a. Promedio de ventas por cada vendedor. Acumuladorventas.../contadorventas...
		if(vendedor == "juan")
		{
			switch(tipoDeProducto)
			{
				case "perfume":
				case "shampoo":
				case "maquillaje":
					contadorVentasJuan++;
					acumuladorImporteJuan += importeVenta;				
				break;	
			}
		}
		else
		{
			if(vendedor == "maria")
			{
				switch(tipoDeProducto)
				{
					case "perfume":
						acumuladorImporteMaria += importeVenta;
						contadorVentasMaria++;
						contadorPerfumeMaria++; //b. Cantidad de perfumes que vendió María
					break;	
					case "shampoo":
					case "maquillaje":
						contadorVentasMaria++;
						acumuladorImporteMaria += importeVenta;
					break;	
				}
			}
			else
			{
				switch(tipoDeProducto)
				{
					case "perfume":
					case "shampoo":
					case "maquillaje":
						contadorVentasLucrecia++;
						acumuladorImporteLucrecia += importeVenta;				
					break;	
				}	
			}			

		}

		//c. El importe más barato junto con el vendedor que lo vendió.
		if(importeVenta < importeMasBarato || banderaDelPrimero == 0)
		{
			importeMasBarato = importeVenta;
			banderaDelPrimero = 1;
			vendedorMasBarato = vendedor;
		}
		else
		{
			if(importeMasBarato > importeVenta)
			{
				importeMasBarato = importeVenta;
				vendedorMasBarato = vendedor;
			}
		}
		

		respuesta = prompt("¿Desea seguir ingresando productos?");
	}
	
	//d. El nombre del vendedor con menor comisión.
	if(acumuladorImporteJuan <5000 && acumuladorImporteJuan>10000)
	{
		comisionJuan = acumuladorImporteJuan*0.15;
	}
	else
	{
		if(acumuladorImporteJuan<10000)
		{
			comisionJuan = acumuladorImporteJuan*0.20;
		}
		else
		{
			comisionJuan = acumuladorImporteJuan*0.05;
		}
	}
	if(acumuladorImporteMaria <5000 && acumuladorImporteMaria>10000)
	{
		comisionMaria = acumuladorImporteMaria*0.15;
	}
	else
	{
		if(acumuladorImporteMaria<10000)
		{
			comisionMaria = acumuladorImporteMaria*0.20;
		}
		else
		{
			comisionMaria = acumuladorImporteMaria*0.05;
		}
	}
	if(acumuladorImporteLucrecia <5000 && acumuladorImporteLucrecia>10000)
	{
		comisionLucrecia = acumuladorImporteLucrecia*0.15;
	}
	else
	{
		if(acumuladorImporteLucrecia<10000)
		{
			comisionLucrecia = acumuladorImporteLucrecia*0.20;
		}
		else
		{
			comisionLucrecia = acumuladorImporteLucrecia*0.05;
		}
	}
	
	document.write("El promedio de Juan es: "+ (acumuladorImporteJuan/contadorVentasJuan));
	document.write("<br>"+"El promedio de Maria es: "+(acumuladorImporteMaria/contadorVentasMaria));
	document.write("<br>"+"El promedio de Lucrecia es: "+ (acumuladorImporteLucrecia/contadorVentasLucrecia));
	document.write("<br>"+"La cantidad de perfumes que vendio Maria: "+ contadorPerfumeMaria);
	document.write("<br>"+"El importe mas barato es: "+ importeMasBarato + " y el vendedor es: "+vendedorMasBarato);
	document.write("<br>"+"La comision de Juan es: "+ comisionJuan);
	document.write("<br>"+"La comision de Maria es es: "+comisionMaria);
	document.write("<br>"+"La comision de Lucrecia es: "+ comisionLucrecia);
	
} 