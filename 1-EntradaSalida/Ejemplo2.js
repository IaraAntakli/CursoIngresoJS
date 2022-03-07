/*La solución será planteada sobre una arquitectura flexible que permita
a futuro realizar cambios, mejoras y sumar nuevas funcionalidades que 
potencien las plataformas.

se deben realizar  ingresos:
  Zonas(CABA-BuenosAires-GBA)
  Nombre de Choferes
  Edad del chofer(mayor a 18 años)
  Clientes(McDonals-Rodicio-SigaALaVaca)
  CantidadDeAceite(entre 800 y 1500 Litros)
debemos informar:
a)La zona mas visitada 
B)El nombre del chofer mas joven
C)La mayor cantidad de aceite recolectada en Rodicio
*/

function mostrar()
{

  var zona;
  var nombreChofer;
  var edadChofer;
  var clientes;
  var cantidadAceite;
  var respuesta = "si";
  var contadorCaba = 0;
  var contadorBA = 0;
  var contadorGBA = 0;
  var zonaMasVisitada;
  var banderaDelPrimero = 0;
  var edadChoferMasJoven;
  var nombreChoferMasJoven;
  var cantidadAceiteRodicio;
  var segundaBandera = 0;

  while(respuesta=="si")
  {
    zona=prompt("Ingrese la zona");
    while(zona!="caba" && zona!="buenos aires" && zona!="gba")
    {
      zona=prompt("Error.Ingrese zona correcta.");

    }
    nombreChofer=prompt("Ingrese el nombre del chofer");
    edadChofer=prompt("Ingrese edad del chofer");
    edadChofer=parseInt(edadChofer);
    while(edadChofer<18)
    {
      edadChofer=prompt("Error.Ingrese edad del chofer");
        edadChofer=parseInt(edadChofer);
    } 
    clientes=prompt("Ingrese el nombre del cliente");
    while(clientes!="mcdonals" && clientes!="rodicio" && clientes!="sigaalavaca")
    {
      clientes=prompt("Error.Ingrese el cliente");
    } 
    cantidadAceite=prompt("Ingrese la cantidad de aceite");
    cantidadAceite=parseInt(cantidadAceite);
    while(cantidadAceite<800 || cantidadAceite>1500)
    {
      cantidadAceite=prompt("Error.Ingrese la cantidad de aceite");
    cantidadAceite=parseInt(cantidadAceite);
    }

    if(zona=="caba")
    {
      contadorCaba++;
    }
    else
    {
        if(zona=="buenos aires")
          {
            contadorBA++;
          }
       else
          {
            contadorGBA++;
          }
    }

    if(edadChofer < edadChoferMasJoven  || banderaDelPrimero==0)
    {
      edadChoferMasJoven = edadChofer;
      nombreChoferMasJoven = nombreChofer;
      banderaDelPrimero= 1;
    }
    if(cantidadAceite>cantidadAceiteRodicio && clientes=="rodicio" || segundaBandera==0)
    {
      cantidadAceiteRodicio=cantidadAceite;
      segundaBandera=1;
    }

    respuesta=prompt("Desea ingresar mas datos?");
  }   

 if (contadorCaba>contadorBA && contadorCaba>contadorGBA)
   {
    zonaMasVisitada="Caba";
   }
   else 
   {
     if(contadorGBA>contadorBA)
      { 
        zonaMasVisitada="Gba";
      }
     else
      {
        zonaMasVisitada="Buenos aires";
      } 
   }

  document.write("La zona mas visitada es: "+zonaMasVisitada);
  document.write("<br>El nombre del chofer mas joven es: "+nombreChoferMasJoven);
  document.write("<br>La mayor cantidad de aceite recolectada en rodicio es : "+cantidadAceiteRodicio);
}