function variableVar(){
    //En este caso creamos la variable I con var, por lo tanto nos permite acceder a la variable I fuera del bucle for, pq es una variable global
    for(var i=0;i<5;i++){

    }
    console.log(i)
}

function variableLet(){
    //Al intentar lo mismo con let, nos salta error de que j no esta declarada, ya que let se crea para ser utilizada dentro del bloque de codigo donde fue creada.
    for(let j=0;j<5;j++){

    }
    console.log(j)
}


function varPrueba() {
    var x = 31;
    if (true) {
        var x = 71; // Misma variable!
        console.log(x); // Imprime el valor 71
    }
    console.log(x); // Imprime el valor 71
}

function letPrueba() {
    let x = 31;
    if (true) {
        let x = 71; // variable diferente
        console.log(x); // Imprime el valor 71
    }
    console.log(x); // Imprime el valor 31
}

function sentenciaConst(){
    const PI = 3.141592653589793;
    PI = 3.14; // Esto dará un error
    PI = PI + 10; // Esto también dará un error
}