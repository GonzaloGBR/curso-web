let arrClientes=[]

class Cliente{
    constructor(nombre,apellido,dni,numeroCuenta,saldo,cantidadExtraccion){
        this.nombre=nombre
        this.apellido=apellido
        this.dni=dni
        this.numeroCuenta=numeroCuenta
        this.saldo=saldo
        this.cantidadExtraccion=cantidadExtraccion
    }
    CosultarDatos(){
        console.log(
        `
        Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        DNI: ${this.dni}
        Numero de cuenta: ${this.numeroCuenta}
        Saldo: ${this.saldo}
        Cantidad de extracciones realizadas: ${this.cantidadExtraccion}`
        
        )
    }
    Deposito(){
        let d=parseFloat(prompt("Ingrese cuanto desea depositar: "))
        this.saldo=this.saldo+d
    }
    Extraccion(){
        let e=parseFloat(prompt("Ingrese cuanto desea extraer: "))
        if(this.saldo<e){
            alert("No tiene esa cantidad")
        }else{
            this.saldo=this.saldo-e
            this.cantidadExtraccion=this.cantidadExtraccion+1
        }

    }
}

function MenuMain(){
    let opMain=parseInt(prompt(`Seleccione opcion: 
                    1. Login
                    2. Register
                    3. Salir`));
    return opMain
}

function MenuCajero(){
    let opCajero=parseInt(prompt(`Seleccione opcion: 
                        1. Consultar Datos
                        2. Deposito
                        3. Extraccion
                        4. Salir`))
    return opCajero
}
function Login(){
    let nc=parseInt(prompt("Ingrese numero de cuenta: "));
    let positionUser=-1;
    for(let i=0;i<arrClientes.length;i++){
        if(arrClientes[i].numeroCuenta==nc){
            positionUser=i
        }
    }
    return positionUser
}
function Register(){
    let n=prompt("Ingrese nombre: ")
    let a=prompt("Ingrese apellido: ");
    let d=parseInt(prompt("Ingrese dni: "))
    let nCo=parseInt(prompt("Ingrese numero de cuenta: "))
    let datosUser=[n,a,d,nCo]
    return datosUser
}
let opMain;
do{
    opMain=MenuMain()
    switch(opMain){
        case 1:
            let pasar=Login() 
            if(pasar>=0){
                let opCajero;
                do{
                    opCajero=MenuCajero()
                    switch(opCajero){
                        case 1:
                            arrClientes[pasar].CosultarDatos();
                            break;
                        case 2:
                            arrClientes[pasar].Deposito()
                            break;
                        case 3:
                            arrClientes[pasar].Extraccion()
                            break;
                    }
                }while(opCajero!=4)

            }else if(pasar==-1){
                alert("No hay una cuenta con ese codigo")
            }
            break;
    
        case 2:
            let datosUser=Register()
            const user=new Cliente(datosUser[0],datosUser[1],datosUser[2],datosUser[3],0,0)
            arrClientes.push(user)
            break;
    }
}while(opMain!=3)
