/*
Una obra social tiene tres clases de socios:
○ Los socios tipo ‘A’ abonan una cuota mayor, pero tienen un 50% de
descuento en todos los tipos de tratamientos.
○ Los socios tipo ‘B’ abonan una cuota moderada y tienen un 35% de
descuento para los mismos tratamientos que los socios del tipo A.
○ Los socios que menos aportan, los de tipo ‘C’, no reciben
descuentos sobre dichos tratamientos.
○ Solicite una letra (carácter) que representa la clase de un socio, y
luego un valor real que represente el costo del tratamiento (previo
al descuento) y determine el importe en efectivo a pagar por dicho
socio.

*/
let letra = "A",costo;
let costoTratamiento=5000;

switch(letra){
    case "A":
        costo=costoTratamiento-costoTratamiento*0.5
        console.log("El costo a pagar con el descuento es: "+costo);
        break;
    case "B":
        costo=costoTratamiento-costoTratamiento*0.35
        console.log("El costo a pagar con el descuento es: "+costo);
        break;
    case "C":
        console.log("El costo a pagar con el descuento es: "+costoTratamiento);
        break;
}