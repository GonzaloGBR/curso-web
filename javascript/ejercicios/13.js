/*
Escribir un programa que lea un número entero y devuelva el número de
dígitos que componen ese número. Por ejemplo, si introducimos el
número 12345, el programa deberá devolver 5. Calcular la cantidad de
dígitos matemáticamente utilizando el operador de división. Nota:
recordar que las variables de tipo entero truncan los números o
resultados
*/
let num=12345678910;
let cant=0;
while(num>0){
    num=parseInt(num/10);
    cant+=1
}
console.log("El numero tiene: "+cant+ " digitos");