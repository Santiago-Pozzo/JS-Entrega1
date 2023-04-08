// //1)Par o impar

// const parImpar = (number) => {
//     if (number % 2 === 1) {
//         console.log(number + " Es un número impar");
//     }

//     else {
//         console.log(number + " Es un número par");
//     }
// }

// let numero=prompt("Ingrese un número para saber si es par o impar");
// parImpar(numero);

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

let numero1=prompt("Ingrese el primer número a comparar");
let numero2=prompt("Ingrese el segundo número a comparar");
comparar(numero1, numero2);