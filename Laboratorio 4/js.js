function pedirnumero() {
	var numero=parseInt(prompt("Por favor ingresa el número que quieras."));
	var body = document.getElementsByTagName("body")[0];
  	var tabla   = document.createElement("table");
   	var tblBody = document.createElement("tbody");

	  for (var i = 1; i <=numero; i++) {
	    var hilera = document.createElement("tr");
	 	var celda = document.createElement("td");
	    for (var j = 1; j <=3; j++) {
	    	if (j==1) {
	    		var celda1 = document.createElement("td");
		     	var textoCelda = document.createTextNode(i);
		     	celda1.appendChild(textoCelda);
      			hilera.appendChild(celda1);
	    	}else if (j==2) {
	    		var celda2 = document.createElement("td");
		   		var textoCelda = document.createTextNode(i*i);      		
		    	celda2.appendChild(textoCelda);
      			hilera.appendChild(celda2);
	    	}else{
	    		var celda3 = document.createElement("td");
		   		var textoCelda = document.createTextNode(i*i*i);
		   		celda3.appendChild(textoCelda);
      			hilera.appendChild(celda3);
	    	}  		
		}
		tblBody.appendChild(hilera);  
	 }
 	tabla.appendChild(tblBody); 
	body.appendChild(tabla);
	tabla.setAttribute("border", "2");
  	tabla.setAttribute("align", "center");
  	alert("La tabla se muestra al final de la página. Desplazarse para abajo por favor.");
}

function pedirresultadosuma(){
	let a=Math.floor(Math.random() * (1100 - 0));
	let b=Math.floor(Math.random() * (1100 - 0));
	let inicio=performance.now();
	let numero=prompt("Por favor ingresa el resultado al sumar "+a+"+"+b+": ");
	let fin=performance.now();
	if (numero==a+b) {
		alert("El resultado de la suma es correcto. Usted tardo "+((fin-inicio)/1000).toFixed(3)+" segundos en contestar");
	}else{
		alert("El resultado de la suma es incorrecto. Usted tardo "+((fin-inicio)/1000).toFixed(3)+" segundos en contestar")
	}
}

function countnumbers(){
	let arg=pedirarreglo();
	numerosnegativos(arg,arg.length);
}

function numerosnegativos(arreglo, numero){
	let negativos=0, positivos=0, ceros=0;
	for (var i = 1; i <=arreglo[0]; i++) {
		if (arreglo[i]<0) {
			negativos++;
		}else if (arreglo[i]>0) {
			positivos++;
		}else{
			ceros++;
		}
	}
	alert("Hay "+negativos+" número(s) negativos, "+positivos+" número(s) positivos y "+ceros+ " cero(s).");

}

function pedirarreglodearreglos(){
	let numero=parseFloat(prompt("Por favor ingresa la cantidad de arreglos en el arreglo."));
	let arreglo=new Array (numero);
	let promedio=new Array (numero);
	for (var i = 0; i <numero; i++) {
		arreglo[i]=pedirarreglo();
		promedio[i]=promedioarreglo(arreglo[i]);

	}
	for (var i = 0; i <numero; i++) {
		alert("El promedio del arreglo número "+(i+1)+" es "+(promedio[i]).toFixed(2));
	}
}

function pedirarreglo(){
	let numero=parseInt(prompt("Por favor ingresa la cantidad de números en el arreglo."));
	let arreglo=new Array(numero);
	arreglo[0]=numero;
	for (var i = 1; i <=numero; i++) {
		arreglo[i]=parseFloat(prompt("Por favor ingresa el número de su eleción."));
	}
	return arreglo;
}

function promedioarreglo(arreglo){
	let aux=0;
	let promedio=0;
	for (var j = 1; j <=arreglo[0]; j++) {
		aux=aux+parseFloat(arreglo[j]);
	}
	promedio= parseFloat(aux)/parseFloat(arreglo[0]);
	return promedio;
}

function invertirnumero(){
	let numero=  parseInt(prompt("Por favorintroduzca el número a invertir:"));
	let resto=numero, invertido=0;
	do {
    	invertido = invertido * 10 + (resto % 10)
    	resto = Math.floor(resto / 10)
 	}while ( resto > 0 )
    alert("El número invertido es: "+invertido);
}










