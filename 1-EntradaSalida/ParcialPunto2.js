/*una pinturería solicita nuestros servicios para desarrollar el siguiente programa:
tomar 5 pedidos
cantidad de litros validar (mayor a 0).
precio por litro validar (no puede ser menor a 4000).
marca validar (tersuave, colorin, plavicon).
Color.
a) la cantidad de litros que se compró en total.
b) de la compra más cara, mostrar su color y marca.
c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un mensaje el siguiente
mensaje:” usted es un gran vendedor”. */

function mostrar()
{
  var contador = 0;
  var litros;
  var importe;
  var marca;
  var color;

  var acumuladorLitrosTotal = 0;
  var acumuladorDeImporte = 0;

  var compraMasCara;
  var banderaCompraCara = 0;
  var colorCompraCara;
  var marcaMasCara;
  
    while(contador <2)
    {
        litros=prompt("Ingrese los litros : ");
        litros =parseInt(litros);
        while(litros < 0)
        {
            litros=prompt("Error, ingrese los litros : ");
            litros =parseInt(litros);
        }
        importe=prompt("Ingrese  importe mayor A 4000");
        importe =parseInt(importe);
        while(importe < 4000)
        {
            importe=prompt("Error, ingrese  importe mayor A 4000 ");
            importe =parseInt(importe);
        }
        marca=prompt("Ingrese la marca (tersuave, colorin, plavicon)");

		while(marca!= "tersuave" && marca!= "colorin" && marca != "plavicon")
		{
        	marca=prompt("Error, ingrese la marca (tersuave, colorin, plavicon)");
        }
        color=prompt("Ingrese color");

        //a) la cantidad de litros que se compró en total.
        acumuladorLitrosTotal += litros;
        acumuladorDeImporte += importe;


        //b) de la compra más cara, mostrar su color y marca.
        if(importe > compraMasCara || banderaCompraCara == 0)
        {
            compraMasCara = importe;
            colorCompraCara = color;
            marcaMasCara = marca;
            banderaCompraCara =1;
        }

        contador ++;
    }

    //a) la cantidad de litros que se compró en total.
    document.write("La cantidad de litros que se compró en total es de: " + acumuladorLitrosTotal +"<br>");
    
    //b) de la compra más cara, mostrar su color y marca.
    document.write("De la compra más cara, color y marca: " + colorCompraCara + ", " +  marcaMasCara +"<br>");

    //c)mostrar la cantidad total de importe por las ventas y si supera los 50000 mostrar un mensaje el siguiente mensaje:” usted es un gran vendedor”.
    document.write("Cantidad total de importe por las ventas:" + acumuladorDeImporte + "<br>");
    
    if(importe > 50000 )
    {
        document.write("usted es un gran vendedor");
    }

}
