// Para concatenar variables usamos el operador "+", por ejemplo
    let nameUser="gonza"
    let surname="buitrago"
    let profile=nameUser+surname

/*    Esta sintaxis es correcta, pero cuando necesitamos concatenar muchas variables se vuelve
    mas enredoso, ej: */

    var nombre = 'Miguel Angel';
    var apellidos = 'Alvarez'
    var profesion = 'desarrollador';
    var perfil = ' ' + nombre + ' ' + apellidos + ' es ' + profesion;

/*EcmaScript6 tiene una herramienta llamada template string, que permite concatenar variables 
sin necesidad de utilizar el operador +
Para crear un template string simplemente tienes que usar un carácter que se usa poco,
como apertura y cierre de la cadena. Es el símbolo del acento grave. (`) Ej:
*/

var cadena = `Esto es un template String`;

//Concatenar con template string
var nombre = 'Miguel Angel';
var apellidos = 'Alvarez'
var profesion = 'desarrollador';
var perfil = `${nombre} ${apellidos} es ${profesion}`;

/*
En las expresiones podemos colocar código que queramos volcar, dentro de la cadena. Las
usamos generalmente para colocar valores de variables, pero también servirían para colocar
operaciones matemáticas, por ejemplo.
*/

var suma = `45 + 832 = ${45 + 832}`;

// O bien algo como esto:
var operando1 = 7;
var operando2 = 98;
var multiplicacion = `La multiplicación entre ${operando1} y ${operando2}
equivale a ${operando1 * operando2}`;


//En template string podemos hacer un salto de linea solo saltando el codigo, sin necesidad de utilizar /n
var textoLargo = `esto es un texto
con varias líneas`;

console.log(textoLargo); /*esto es un texto
                        con varias líneas
                        */

