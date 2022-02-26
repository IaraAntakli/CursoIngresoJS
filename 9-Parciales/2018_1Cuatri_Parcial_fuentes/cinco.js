/* Iara Antakli
Bienvenidos (SWITCH).
pedir el ingreso de un planeta del sistema solar
Si es la tierra mostrar "acá vivimos".
Si está más cerca del sol, "acá hace más calor".
Si está más lejos del sol, "acá hace más frio".
Si no es un planeta valido informarlo.
Aclaración: los planetas se ingresan en minúscula
(Mercurio y Venus están antes que la tierra).
*/
function mostrar()
{
	var planeta;

	planeta = prompt("Ingrese un planeta del sistema solar: ");
	
	switch(planeta)
	{
		case "tierra":
			alert("Acá vivimos")
			break;
		case "mercurio":
		case "venus":
		case "marte":
			alert("Acá hace más calor")
			break;
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
		case "plutón":
		case "pluton":
			alert("Acá hace más frío")
			break;
		default:
			alert("Este no es un planeta valido")
			break;
	}
}
