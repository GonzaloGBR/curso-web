/*
Crea una aplicación que le pida dos números al usuario y este pueda
elegir entre sumar, restar, multiplicar y dividir. La aplicación debe tener
una función para cada operación matemática y deben devolver sus
resultados para imprimirlos en el main.
*/

let num1=+prompt("Ingrese numero 1: ");
let num2=+prompt("Ingrese numero 2: ");
let op=+prompt("Ingrese que desea realizar :\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir.");

switch(op){
    case 1:
        console.log(sumarNumero(num1,num2))
        break;
    case 2:
        console.log(restarNumero(num1,num2))
        break;
    case 3:
        console.log(multiplicarNumero(num1,num2))
        break;
    case 4:
        console.log(dividirNumero(num1,num2))
        break;
}

function sumarNumero(num1,num2){
    return num1+num2
}

function restarNumero(num1,num2){
    return num1-num2
}

function multiplicarNumero(num1,num2){
    return num1*num2
}

function dividirNumero(num1,num2){
    return num1/num2
}
