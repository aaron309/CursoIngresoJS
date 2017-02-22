function Mostrar()
{
    
	var contador=0;
	var acumulador=0;
	var respuesta=true;

	while(respuesta==true)
	{
		numero= prompt("Ingrese un numero");
		numero= parseInt(numero);
		acumulador=acumulador + numero;
		contador++
		respuesta= confirm("Desea continuar?");
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
contador= parseInt(contador);



}//FIN DE LA FUNCIÓN