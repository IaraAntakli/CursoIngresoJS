/* Iara Antakli
Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".*/

function mostrar()
{
	//tomo la hora
	var horaDelDia;
	horaDelDia = document.getElementById("txtIdHora").value;
	
	switch(horaDelDia)
	{
		case "07":
		case "08":
		case "09":
		case "10":
		case "11":
			alert("Es de mañana")
			break;
		default:
			alert(horaDelDia)
			break;	
	}
	
	



}//FIN DE LA FUNCIÓN