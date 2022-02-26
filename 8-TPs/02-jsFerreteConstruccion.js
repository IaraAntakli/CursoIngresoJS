/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 

{
    var base = txtIdLargo.value;
    var altura = txtIdAncho.value;
    var perimetro = base *2 + altura *2;
    var cantidadDeAlambre = perimetro *3;

    base = parseInt(base);
    altura = parseInt(altura);

    alert("Se necesitan " + cantidadDeAlambre + " mts de alambre.");
    
}

function Circulo () 
{
    var radio = txtIdRadio.value;
    var perimetro = radio * 3.14 *2;
    var cantidadDeAlambre = perimetro *3;

    radio = parseInt(radio);

    alert("Se necesitan " + cantidadDeAlambre + " mts de alambre. ");
}

function Materiales () 
{
	var base = txtIdLargo.value;
    var altura = txtIdAncho.value;
    var superficie = base * altura;
    var cantidadDeCemento = superficie *2;
    var cantidadDeCal = superficie *3;
    
    base = parseInt(base);
    altura = parseInt(altura);

    alert("Se necesitan " + cantidadDeCemento + 
    " bolsas de cemento " + " y " +  cantidadDeCal + 
    " bolsas de cal.");
}