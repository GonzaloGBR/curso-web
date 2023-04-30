/*
. Realizar un programa que lea 5 números (comprendidos entre 1 y 20) e imprima el número
ingresado seguido de tantos asteriscos como indique su valor. Por ejemplo:
5 *****
3 ***
11 ***********
2 **
9 *********
*/
let num;
let linea;
for(let i=1;i<=5;i++){
    num=i*(i+1);
    for(let j=1;j<=num;j++){
        if(j==1){
            linea=num+" *"
        }else{
            linea+="*"
        }
        
    }
    console.log(linea);
}