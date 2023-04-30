/*
Escriba un programa que lea números enteros. Si el número es múltiplo
de cinco debe detener la lectura y mostrar la cantidad de números
leídos, la cantidad de números pares y la cantidad de números impares.
Al igual que en el ejercicio anterior los números negativos no deben
sumarse. Nota: recordar el uso de la sentencia break
*/
let seguir;
let num=0,numLeidos=0,numPares=0,numImpares=0,cant=0;
do {
    num = +prompt("Ingrese numero");
    if(num%5==0){
        seguir=false;
        break;
    }else{
        numLeidos+=1
        if(num%2==0){
            numPares+=1
        }else{
            numImpares+=1
        }
    }
    
} while(seguir=true);
console.log("Los numeros leidos son: "+numLeidos);
console.log("Los numeros pares son: "+numPares);
console.log("Los numeros impares son: "+numImpares);