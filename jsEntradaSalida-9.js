/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var s;
var aumento; 
var resultado;

     s=parseInt(document.getElementById("sueldo").value);


     aumento=[(s/100)*10];

     aumento=parseInt(aumento);

     resultado=s+aumento;

     document.getElementById("resultado").value=resultado;


 



	
}
