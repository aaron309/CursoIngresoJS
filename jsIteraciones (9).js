function Mostrar()
{

	var contador=0;
	// declarar variables
	
	var respuesta='si';

	while(respuesta=="si")
	{
		numero= prompt("Ingrese un numero");
		numero= parseInt(numero);
		acumulador=acumulador + numero;
		contador++
		respuesta= confirm("Desea continuar?");
	}


}//FIN DE LA FUNCIÓN