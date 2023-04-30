let cadenaTexto,correctas,incorrectas,opSeguir;
correctas=0;
incorrectas=0;
opSeguir=true;

while(opSeguir==true){
    cadenaTexto=prompt("Ingrese una cadena de texto: ");
    if(cadenaTexto=="&&&&&"){
        opSeguir=false
    }else{
        if(((cadenaTexto.length)==5)&((cadenaTexto.substring(0,1))=="X")&((cadenaTexto.substring(4,5))=="O")){
            correctas+=1
        }else{
            incorrectas+=1
        }
    }
}
alert("Las correctas son: "+correctas)
alert("Las incorrectas son: "+incorrectas)