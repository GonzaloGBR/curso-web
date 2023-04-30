/*
.Crear un programa que dibuje una escalera de números, donde cada
línea de números comience en uno y termine en el número de la línea.
Solicitar la altura de la escalera al usuario al comenzar. Ejemplo: si se
ingresa el número 3:
1
12
123
*/
let numEscalera=101;

for(let i=1;i<=numEscalera;i++){
    for(let j=1;j<=i;j++){
        document.write(j)
    }
    document.write("<p></p>")
}