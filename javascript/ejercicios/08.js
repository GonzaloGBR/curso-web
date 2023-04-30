// * Elaborar un algoritmo en el cuál se ingrese una letra y se detecte si se trata de una vocal.

let letra = "b";
let letraMinuscula=letra.toLowerCase();

if(letraMinuscula=="a" || letraMinuscula=="e" || letraMinuscula=="i" || letraMinuscula=="o" || letraMinuscula=="u"){
    console.log("La letra es vocal");
}else{
    console.log("La letra no es vocal ");
}
