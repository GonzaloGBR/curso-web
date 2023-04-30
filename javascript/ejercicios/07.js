/*
Dibujar un cuadrado de N elementos por lado utilizando el carácter “*”.
Por ejemplo, si el cuadrado tiene 4 elementos por lado se deberá dibujar
lo siguiente:
/* * * *
/*     *
/*     *
/* * * *
*/

let n=4;

for(let i=0;i<=n-1;i++){
    for(let j=0;j<=n-1;j++){
        if(i==1 || i==2){
            if(j==0 || j==3){
                document.write("* ")
            }else{
                document.write("n ")
            }
        }else{
            document.write("* ")
        }
    }
    document.write("<p></p>");
}