let edad = 24

//* EQUIVALENTE A IF-ELSE
if(edad >=18){
    console.log("Puede pasar a la fiesta");
}else{
    console.log("No puede pasar a la fiesta");
}

//* OPERADOR TERNARIO
console.log((edad>=18) ? "Puede pasar a la fiesta " : "No puede pasar a la fiesta");

//* OPERADOR TERNARIO MULTIPLE
let message= (edad==18)? "Used tiene 18" : 
    (edad==20)? "Usted tiene 20" :
    (edad==25) ? "usted tiene 25" :
    "No sabemos su edad";
console.log(message)


let result;

(1+5 < 4)? result="Debajo" : result="Encima";
console.log(result);

