/*
Realice un programa que calcule y visualice el valor máximo, el valor
mínimo y el promedio de n números (n>0). El valor de n se solicitará al
principio del programa y los números serán introducidos por el usuario.
Realice dos versiones del programa, una usando el bucle “while” y otra
con el bucle “do - while”
*/

let n = 5;
let cant =0, min,max,num,promedio=0;

op=prompt("Elija en que quiere hacer el calculo: \n1. While\n2. Do-While");
if(op==1){
    while(cant<n){
        num=+prompt("Ingrese numero: ");
        if(cant==0){
            max=num;
            min=num;
        }else{
            if(num>max){
                max=num;
            }
            if(num<min){
                min=num;
            }
        }
        promedio+=num;
        num=0;
        cant+=1;
    }
    console.log("La cantidad de nums ingresados :", cant);
}else if(op==2){
    do {
        num=+prompt("Ingrese numero: ");
        if(cant==0){
            max=num;
            min=num;
        }else{
            if(num>max){
                max=num;
            }
            if(num<min){
                min=num;
            }
        }
        promedio+=num;
        num=0;
        cant+=1;
    } while (cant<n);
}

promedio/=cant;
console.log("El maximo es: ",max);
console.log("El minimo es: ",min);
console.log("El promedio es: ",promedio);