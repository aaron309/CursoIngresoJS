/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ //numeroUno numeroDos
function sumar()
{	
	var x;
	var y;
	var resultado;

	x=document.getElementById("numeroUno").value;
	y=document.getElementById("numeroDos").value;
	y=parseInt(y);
	x=parseInt(x);
	resultado=x+y;
alert("el resultado de la operacion es "+resultado);

}

function restar()
{
	var x;
	var y;
	var resultado;
		x=document.getElementById("numeroUno").value;
	y=document.getElementById("numeroDos").value;
	y=parseInt(y);
	x=parseInt(x);
	resultado=x-y;
alert("el resultado de la operacion es "+resultado);

}

function multiplicar()
{ 
	var x;
	var y;
	var resultado;
		x=document.getElementById("numeroUno").value;
	y=document.getElementById("numeroDos").value;
	y=parseInt(y);
	x=parseInt(x);
	resultado=x*y;
alert("el resultado de la operacion es "+resultado);

}

function dividir()
{
	var x;
	var y;
	var resultado;
		x=document.getElementById("numeroUno").value;
	y=document.getElementById("numeroDos").value;
	y=parseInt(y);
	x=parseInt(x);
	resultado=x/y;
alert("el resultado de la operacion es "+resultado);

}


