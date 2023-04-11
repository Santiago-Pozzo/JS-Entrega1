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

//  alert("Ingrese un número para saber si es par o impar");
//  parImpar(getNumber());


//2)Comparar números
 const comparar = (number1, number2) => {
     if (number1 === number2) {
        console.log(number1 + " Es igual a "+ number2);
     }    
     if(number1 > number2) {
        console.log(number1 + " Es mayor a " + number2);
     }
     else {
        console.log(number1 + " Es menor que " + number2);
     }
 }

//  alert("Ingrese dos números para saber cuál es mayor"); 
//  comparar(getNumber(), getNumber());


//3)Múltiplo de 5
 const multiploDeCinco = (number) => {
    if (number % 5 === 0) {
        console.log(number + " Es múltiplo de 5");
    }

    else {
        console.log(number + " No es múltiplo de 5");
    }
 }

//  alert("Ingrese un número para saber si es múltiplo de 5");
//  multiploDeCinco(getNumber());


//4)Contar hasta n
 const contarHasta = (number) => {
    for (let i = 0; i <= number; i++) {
        console.log(i);   
    }
 }

//  alert("Ingrese un número para vizualizar todos los números desde 0 hasta el número ingresado");
//  contarHasta(getNumber());


//5)Imprimir palabra n veces
 const imprimirPalabraNVeces = (chain, number) => {
    for (let i = 1; i <= number; i++) {
        console.log(chain);
    }
 }
 
//  alert("Ingrese una palabra y un numero para ver esa palabra repetida en la cantidad ingresada");
//  imprimirPalabraNVeces(prompt("Ingrese una palabra"),getNumber());

//6) Imprimir valores de un arreglo
 const imprimirArray = (array) => {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]);        
    }
 }

//  imprimirArray (["hola", "esto", "es", "un", "array", "muy", "variado", 1, 3, null, "pancho con papitas", true])

//7) Imprimir array de 10 números menos el 5to elemento 
 const imprimirArraySinElQuinto = (array) => {
    for (let index = 0; index < 10; index++) {
        if (index===4) continue;             
        else console.log(array[index]);        
    }
 }
//  imprimirArraySinElQuinto([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//8) Imprimir elementos del array multiplicados por n
 const elementosMultiplicados = (array, n) => {
    for (let index = 0; index < array.length; index++) {
        console.log(array[index]*n);
    }    
 }
//  elementosMultiplicados ([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], getNumber());