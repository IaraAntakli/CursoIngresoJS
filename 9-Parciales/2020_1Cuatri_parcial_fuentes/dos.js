/*
Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, 
hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro
*/
function mostrar()
{
  var tipoDeProducto;
  var cantidadBolsas;
  var precioBolsa;
  var precioTotalArenaConDescuento;
  var precioTotalCalConDescuento;
  var precioTotalCementoConDescuento;
  var precioTotalSinDescuento;
  var respuesta = "si";
  var acumuladorArena = 0; // para saber unidades del tipo
  var acumuladorCal = 0;
  var acumuladorCemento = 0;
  var acumuladorPrecioArena = 0; // para acumular precio para promedio
  var acumuladorPrecioCal = 0;
  var acumuladorPrecioCemento = 0;
  //var contadorBolsasArena = 0; //cuantas veces se compro el tipo
  //var contadorBolsasCal = 0;
  //var contadorBolsasCemento = 0;
  var mayorCantidadBolsas;
  var precioMaximo;

  while(respuesta == "si")
  {
    tipoDeProducto = prompt("Ingrese un producto (arena/cal/cemento): ");
    while(tipoDeProducto != "arena" && tipoDeProducto != "cal" && tipoDeProducto != "cemento")
    {
      tipoDeProducto = prompt("Error, ingrese un producto (arena/cal/cemento): ");
    }
    cantidadBolsas = parseInt(prompt("Ingrese cantidad de bolsas: "));
    precioBolsa = parseInt(prompt("Ingrese un precio mayor a cero: "));
    while(precioBolsa <1)
    {
      precioBolsa = parseInt(prompt("Error, ingrese un precio mayor a cero: "));
    }

    switch(tipoDeProducto)
    {
      case "arena":
        if(cantidadBolsas > 10)
        {
          precioTotalArenaConDescuento = precioBolsa*cantidadBolsas*0.15;
          acumuladorArena++;
          acumuladorPrecioArena+=precioBolsa;
        }
        else
        {
          if(cantidadBolsas > 30)
          {
            precioTotalArenaConDescuento = precioBolsa*cantidadBolsas*0.25;
            acumuladorArena++;
            acumuladorPrecioArena+=precioBolsa;
          }
          else
          {
            precioTotalSinDescuento = precioBolsa*cantidadBolsas;
            acumuladorArena++;
            acumuladorPrecioArena+=precioBolsa;
          }
        }
      break;
      case "cal":
        if(cantidadBolsas > 10)
        {
          precioTotalCalConDescuento = precioBolsa*cantidadBolsas*0.15;
          acumuladorCal++;
          acumuladorPrecioCal+=precioBolsa;
        }
        else
        {
          if(cantidadBolsas > 30)
          {
            precioTotalCalConDescuento = precioBolsa*cantidadBolsas*0.25;
            acumuladorCal++;
            acumuladorPrecioCal+=precioBolsa;
          }
          else
          {
            precioTotalSinDescuento = precioBolsa*cantidadBolsas;
            acumuladorCal++;
            acumuladorPrecioCal+=precioBolsa;
          }
        }
      break;
      case "cemento":
        if(cantidadBolsas > 10)
        {
          precioTotalCementoConDescuento = precioBolsa*cantidadBolsas*0.15;
          acumuladorCemento++;
          acumuladorPrecioCemento+=precioBolsa;
        }
        else
        {
          if(cantidadBolsas > 30)
          {
            precioTotalCementoConDescuento = precioBolsa*cantidadBolsas*0.25;
            acumuladorCemento++;
            acumuladorPrecioCemento+=precioBolsa;
          }
          else
          {
            precioTotalSinDescuento = precioBolsa*cantidadBolsas;
            acumuladorCemento++;
            acumuladorPrecioCemento+=precioBolsa;
          }
        }
      break;
    }

    respuesta = prompt("¿Desea seguir ingresando productos?");
  }

  if(acumuladorArena > acumuladorCal && acumuladorArena > acumuladorCemento)
  {
    mayorCantidadBolsas = acumuladorArena;
  } 
  else
  {
    if(acumuladorCal > acumuladorCemento)
    {
      mayorCantidadBolsas = acumuladorCal;
    }
    else
    {
      mayorCantidadBolsas = acumuladorCemento;
    }
  }
  if(acumuladorPrecioArena > acumuladorPrecioCal && acumuladorPrecioArena > acumuladorPrecioCemento)
  {
    precioMaximo = acumuladorPrecioArena;
  } 
  else
  {
    if(acumuladorPrecioCal > acumuladorPrecioCemento)
    {
      precioMaximo = acumuladorPrecioCal;
    }
    else
    {
      precioMaximo = acumuladorPrecioCemento;
    }
  }

  document.write("importe a pagar con descuento de arena es: " + precioTotalArenaConDescuento);
  document.write("<br>" + "importe a pagar con descuento de cal es: " + precioTotalCalConDescuento);
  document.write("<br>" + "importe a pagar con descuento de cemento es: " + precioTotalCementoConDescuento);
  document.write("<br>" + "importe a pagar sin descuento de arena es: " + precioTotalSinDescuento);
  document.write("<br>" + "importe a pagar sin descuento de cal es: " + precioTotalSinDescuento);
  document.write("<br>" + "importe a pagar sin descuento de cemento es: " + precioTotalSinDescuento);
  document.write("<br>" + "El tipo con más bolsas es: " + mayorCantidadBolsas);
  document.write("<br>" + "El tipo mas caro es: " + precioMaximo);

}