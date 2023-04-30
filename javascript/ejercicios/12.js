/*
Simular la división usando solamente restas. Dados dos números enteros
mayores que uno, realizar un algoritmo que calcule el cociente y el
residuo usando sólo restas. Método: Restar el dividendo del divisor hasta
obtener un resultado menor que el divisor, este resultado es el residuo, y
el número de restas realizadas es el cociente
*/

let dividendo=50;
let divisor=13;
let cociente=0;
if(dividendo>1 & divisor>1){
    while(dividendo>divisor){
        dividendo=dividendo-divisor;
        cociente+=1;
    }
}
console.log("El cociente es: "+cociente);
console.log("El residuo es: "+dividendo);