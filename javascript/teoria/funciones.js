function escribirBienvenida(nombre){
console.log("Hola "+ nombre);
}
escribirBienvenida("Agustin");
// O podemos hacerlo con una variable
let nombre ="Agustin";
escribirBienvenida(nombre);


function media(valor1,valor2){
    let resultado;
    resultado = (valor1 + valor2) / 2;
    return resultado;
}


function saludar(nombre){
    let saludo=`Hola ${nombre}`
    return saludo
}

miSaludo=saludar("gonzalo")
console.log(miSaludo);
