let limite = parseInt(prompt("Ingrese un numero limite positivo: "));
let num;
let suma=0;
while (suma<limite) {
    num=parseInt(prompt("Ingrese un numero: "));
    suma=suma+num;
    num=0;
}
console.log(limite);
console.log(suma);

