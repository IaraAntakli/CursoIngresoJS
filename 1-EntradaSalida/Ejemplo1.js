/*
2.	La empresa SILKEY necesita liquidar las comisiones de sus 3 vendedores para la zona sur de GBA. 

Se cargan las planillas de ventas que poseen los siguientes datos (No sabemos cuantas planillas 
hay):

*Nombre de vendedor (Juan, Pedro o Maria)
*Importe de la venta (numero positivo NO mayor que 10000)

Al terminar de cargar las planillas se debe calcular el total de la comision por vendedor:
Si el vendedor logro recaudar en sus ventas un importe mayor o igual a $500000 obtendra una 
comisión del 10% sobre ese total.
De no alcanzar esta cifra, su comision sera del 5%.
Mostrar:
a. Importe total de ventas, cantidad de ventas y comision. (Por cada vendedor)
b. El nombre del vendedor que mas dinero recaudo en comisiones

*/

function mostrar()
{
	var respuesta = "si";
	var vendedor;
	var importeDeVenta;

	var comisionJuan = 0;
	var comisionPedro =0;
	var comisionMaria =0;

	var cantidadVentasJuan =0;
	var cantidadVentasPedro =0;
	var cantidadVentasMaria =0;

	var totalVentasJuan =0;
	var totalVentasPedro =0;
	var totalVentasMaria =0;

	var vendedorMayorComision;

	while(respuesta == "si")
	{
		vendedor = prompt("Ingrese nombre del vendedor: ");
		vendedor = vendedor.toLowerCase();
		while(vendedor !="juan" && vendedor !="pedro" && vendedor !="maria")
		{
			vendedor = prompt("Error. Ingrese vendedor valido:");
			vendedor = vendedor.toLowerCase();
		}
		importeDeVenta = prompt("Ingrese importe de venta: $ ");
		importeDeVenta = parseInt(importeDeVenta);
		while(importeDeVenta < 0 || importeDeVenta >= 10000)
		{
			importeDeVenta = prompt("Error. Ingrese un importe valido: $ ");
			importeDeVenta = parseInt(importeDeVenta);	
		}

		switch(vendedor)
		{
			case "juan":
				cantidadVentasJuan++;
				totalVentasJuan = totalVentasJuan + importeDeVenta;
			break;
			case "pedro":
				cantidadVentasPedro++
				totalVentasPedro = totalVentasPedro + importeDeVenta;
			break;
			case "maria":
				cantidadVentasMaria++
				totalVentasMaria = totalVentasMaria + importeDeVenta;
			break;
		}

		respuesta = prompt("Desea seguir ingresando mas datos:");
		respuesta = respuesta.toLowerCase();

		while(respuesta != "si" && respuesta != "no")
		{
			respuesta = prompt("Error. Por favor responda con si o no, desea ingresar mas datos: ");
			respuesta = respuesta.toLowerCase();
		}
	}

	if(totalVentasJuan >=500000)
	{
		comisionJuan = totalVentasJuan * 10 / 100;
	}
	else
	{
		comisionJuan = totalVentasJuan * 5 / 100;
	}

	if(totalVentasPedro >=500000)
	{
		comisionPedro = totalVentasPedro * 10 / 100;
	}
	else
	{
		comisionPedro = totalVentasPedro * 5 / 100;
	}

	if(totalVentasMaria >=500000)
	{
		comisionMaria = totalVentasMaria * 10 / 100;
	}
	else
	{
		comisionMaria = totalVentasMaria * 5 / 100;
	}


	if(comisionJuan > comisionPedro && comisionJuan > comisionMaria)
	{
		vendedorMayorComision = "juan";
	}
	else
	{
		if(comisionPedro > comisionMaria)
		{
			vendedorMayorComision = "pedro";
		}
		else
		{
			vendedorMayorComision = "maria";
		}
	}

	document.write("El importe total de ventas de Juan es : " + totalVentasJuan + " la cantidad de ventas realizadas es : " + cantidadVentasJuan + " y su comision fue " + comisionJuan);
	document.write("<br>El importe total de ventas de Pedro es : " + totalVentasPedro + " la cantidad de ventas realizadas es : " + cantidadVentasPedro + " y su comision fue " + comisionPedro);
	document.write("<br>El importe total de ventas de Maria es : " + totalVentasMaria + " la cantidad de ventas realizadas es : " + cantidadVentasMaria + " y su comision fue " + comisionMaria);
	document.write("<br>El vendedor que mayor comision recaudo fue: " + vendedorMayorComision);
}
