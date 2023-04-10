//Función para obtener valores numéricos
 const getNumber = () => {
    let n = prompt("Ingrese un número");
    
    if (isNaN(n)) {
         alert("Debe ingresar un número")
         n = getNumber();
     }
    else {
         return n;
     }
 }


//1)Par o impar
 const parImpar = (number) => {
     if (number % 2 === 1) {
         console.log(number + " Es un número impar");
     }

     else {
         console.log(number + " Es un número par");
     }
 }

 alert("Ingrese un número para saber si es par o impar");
 parImpar(getNumber());


//2)Comparar números
 const comparar = (number1, number2) => {
     if (number1 === number2) {
         console.log(number1 + " Es igual a "+ number2);
     }
     else {
         if(number1 > number2) {
             console.log(number1 + " Es mayor a " + number2);
         }
         else {
             console.log(number1 + " Es menor que " + number2);
         }
     }
 }

 alert("Ingrese dos números para saber cuál es mayor"); 
 comparar(getNumber(), getNumber());


//3)Múltiplo de 5
 const multiploDeCinco = (number) => {
    if (number % 5 === 0) {
        console.log(number + " Es múltiplo de 5");
    }

    else {
        console.log(number + " No es múltiplo de 5");
    }
 }

 alert("Ingrese un número para saber si es múltiplo de 5");
 multiploDeCinco(getNumber());


//4)Contar hasta n
 const contarHasta = (number) => {
    for (let i = 0; i <= number; i++) {
        console.log(i);   
    }
 }

 alert("Ingrese un número para vizualizar todos los números desde 0 hasta el número ingresado");
 contarHasta(getNumber());


//5)Imprimir palabra n veces
 const imprimirPalabraNVeces = (chain, number) => {
    for (let i = 1; i <= number; i++) {
        console.log(chain);
    }
 }
 
 alert("Ingrese una palabra y un numero para ver esa palabra repetida en la cantidad ingresada");
 imprimirPalabraNVeces(prompt("Ingrese una palabra"),getNumber());