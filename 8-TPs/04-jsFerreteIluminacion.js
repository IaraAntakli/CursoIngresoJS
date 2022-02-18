/* Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta 
al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo 
tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" 
se hace un descuento del 40 % 
y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o 
“FelipeLamparas” se hace un descuento del 25 % 
y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  
el descuento es del 15%, si es  “FelipeLamparas” 
se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  
se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó.  */

function CalcularPrecio () 

{   var marca;
    var cantidadLamparas;
    var precio;
    var descuento;
    var porcentaje;
    var precioSinDescuento;
    var importeFinal;
    var aumentoIIBB;
    var importeConImpuesto;

    marca = document.getElementById("Marca").value;

    cantidadLamparas = document.getElementById("txtIdCantidad").value;
    cantidadLamparas = parseInt(cantidadLamparas);

    precio = 35;

    precioSinDescuento = cantidadLamparas * precio;

    porcentaje = 0;
    
    switch(cantidadLamparas)
    {
        case 1:
        case 2:
            porcentaje = 0;
            break;
        case 3:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 15;
                    break;
                case "FelipeLamparas":
                    porcentaje = 10;
                    break;
                default:
                    porcentaje = 5;
                    break;        
            }
        break;    
        case 4:
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 25;
                    break;
                default:
                    porcentaje = 20;
                    break;    
            }
        break;    
        case 5:
            switch(marca)
            {
                case "ArgentinaLuz":
                    porcentaje = 40;
                    break;
                default:
                    porcentaje = 30;
                    break;

            }
        break;    
        default:
            porcentaje = 50;
            break;                   
    }
    

    descuento = precioSinDescuento*porcentaje/100;

    importeFinal = precioSinDescuento - descuento;

    aumentoIIBB = importeFinal * 0.10;

    if(importeFinal >= 120)
    {
        importeFinal = importeFinal + aumentoIIBB;
        alert("Usted pagó $" + importeFinal + " siendo $" + aumentoIIBB + " el impuesto que se pagó")
    }


    document.getElementById("txtIdprecioDescuento").value = importeFinal;
        
}


/* Solo If
if(cantidadLamparas >= 6) //A
    {
       porcentaje = 50;
    }    
    else
    {
        if(cantidadLamparas == 5) //B
        {
            if(marca == "ArgentinaLuz")
            {
                porcentaje = 40;
            }
            else
            {
                porcentaje = 30;
            }
        }
        else
        {
            if(cantidadLamparas == 4)//C
            {
                if(marca == "ArgentinaLuz" || marca == "FelipeLamparas")
                {
                    porcentaje = 25;
                }
                else
                {
                    porcentaje = 20;
                }
            }
            else
            {
                if(cantidadLamparas == 3)//D
                {
                    if(marca == "ArgentinaLuz")
                    {
                        porcentaje = 15;
                    }
                    else
                    {
                        if(marca == "FelipeLamparas")
                        {
                            porcentaje = 10;
                        }
                        else
                        {
                            porcentaje = 5;
                        }
                    }
                }
                
            }
        }
    }*/

/* If y switch
    if(cantidadLamparas >= 6) //A
    {
       porcentaje = 50;
    }    
    else
    {
        if(cantidadLamparas == 5)
        {
           switch(marca)
           {
            case "ArgentinaLuz":
                porcentaje = 40;
                break;
            default:
                porcentaje = 30;
                break;
           } 
        }
        
        if(cantidadLamparas == 4)//B
        {
            switch(marca)
            {
                case "ArgentinaLuz":
                case "FelipeLamparas":
                    porcentaje = 25;
                    break;
                default:
                    porcentaje = 20;
                    break;    
            }
        }
        else
        {
            if(cantidadLamparas == 3)//C
                {
                    switch(marca)
                    {
                        case "ArgentinaLuz":
                            porcentaje = 15;
                            break;
                        case "FelipeLamparas":
                            porcentaje = 10;
                            break;
                        default:
                            porcentaje = 5;
                            break;       
                    }
                }
        }
                
    }*/