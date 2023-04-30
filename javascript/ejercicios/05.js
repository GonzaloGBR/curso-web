let num1,num2,op,op2,opSalir,suma,resta,mult,div;
let seguirMenu=true;
do {
    num1=+prompt("Ingrese el primer numero: ");
    num2=+prompt("Ingrese el segundo numero");
    op=+prompt("MENU\n1. Sumar\n2. Restar\n3. Multiplicar\n4. Dividir\n5. Salir\nElija opcion: ");
    switch (op) {
        case 1:
            suma=num1+num2;
            alert(suma);
            break;
        case 2:
            resta=num1-num2;
            alert(resta);
            break;
        case 3:
            mult=num1*num2;
            alert(mult);
            break;
        case 4:
            div=num1/num2;
            alert(div);
            break;
        case 5:
            opSalir=prompt(" ¿Está seguro que desea salir del programa (S/N)?");
            if(opSalir.toLowerCase()=="s"){
                seguirMenu=false;
            }
            break;
        default:
            alert("Porfavor ingrese una opcion correcta.");
            break;
    }

} while (seguirMenu==true);

