/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento() //importe     resultado
{
	var importe;
	var descuento;
	var resultao;

	importe=parseInt(document.getElementById("importe").value);
	descuento=[25*importe/100];
	descuento=parseInt(descuento);
	resultado= importe - descuento;
	document.getElementById("resultado").value=resultado;

}
