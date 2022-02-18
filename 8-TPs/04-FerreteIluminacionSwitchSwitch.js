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