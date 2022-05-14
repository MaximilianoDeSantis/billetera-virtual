'use strict'

alert('FUNCIONALIDADES POR CONSOLA. si no llega a mostrar datos por consola recargar pagina')

let nombreUsuario = prompt("Bienvenido a su billetera virtual, Ingrese su nombre");
const cryptoCurrencySupported = [];

// let saldoCuentaDolares = 0;
let saldoCuentaBTC = 0;
let cambioActualBTC = 0.000026;


const Wallet = {

    saldoCuentaDolares : 0,

    ingresoSaldoDolares(saldo) {
        if (controlIngresoNumerico(saldo)){
            this.saldoCuentaDolares = this.saldoCuentaDolares + saldo;
            return true;
        } else {
            return false;
        }
    },

    retiroSaldoDolares(saldo) {
        if (controlIngresoNumerico(saldo)){
            if (controlSaldoSuficiente(saldo)) {
                this.saldoCuentaDolares = this.saldoCuentaDolares - saldo;
                return true;
            }
            else {
                alert('No posee saldo suficiente para extraccion');
                return false;
            }     
        } else {
            return false;
        }  
    },

    consultaSaldoDolares() {
        return this.saldoCuentaDolares;
    },

    transfenciaSaldoDolares(saldo) {

    },



    consultaSaldoBTC() {
        return saldoCuentaBTC;
    },
    ingresoSaldoBTC(saldo) {
        this.saldoCuentaDolares = this.saldoCuentaDolares + saldo;
    },
    retiroSaldoBTC(saldo) {
        this.saldoCuentaDolares = this.saldoCuentaDolares - saldo;
    }

}


const SupportedCrypto = class {
    constructor(name,symbol,price) {
        this.name = name,
        this.symbol = symbol,
        this.price = price;
    }

    static showSupportedCrypto() {
        cryptoCurrencySupported.forEach( e => {

            console.log(`
            *******************************************************

                ${e.name}           ${e.symbol}             $ ${e.price}

            ********************************************************
            `)
           
        })
    }

    static searchSupportedCrypto(search) {
        // cryptoCurrencySupported.forEach(e => {
        //     // INTENTE ARMARLO CON UN .FIND PERO NO BUSCA UNA IGUALDAD ABSOLUTA Y ME RETORNABA VARIOS RESULTADOS ENCONTRADOS
        //     if (e.name.toUpperCase() === search.toUpperCase() || e.symbol === search.toUpperCase()){
        //         console.clear();
        //         console.log(`
        //         Crypto encontrada:

        //         Nombre: ${e.name}          Simbolo: ${e.symbol}            Valor: $ ${e.price}
        //         `)
        //         return a
        //     }
        //   //  console.clear();
        //     console.log(`${search} no se encuentra en nuestras cryptos soportadas`)
        //     return false
            
        // })

        for (const e in cryptoCurrencySupported) {
            if (cryptoCurrencySupported[e].name.toUpperCase() === search.toUpperCase() || cryptoCurrencySupported[e].symbol === search.toUpperCase()){

                return cryptoCurrencySupported[e]
            }
        }
        return false
    }

}

cryptoCurrencySupported.push(new SupportedCrypto("Bitcoin","BTC",28825.6));
cryptoCurrencySupported.push(new SupportedCrypto("Ethereum","ETH",1950.86));
cryptoCurrencySupported.push(new SupportedCrypto("Tether","USDT",1));
cryptoCurrencySupported.push(new SupportedCrypto("Dai","DAI",1));
cryptoCurrencySupported.push(new SupportedCrypto("BNB","BNB",271.2));
cryptoCurrencySupported.push(new SupportedCrypto("Cardano","ADA",0.4772));




// Funciones controlar errores en ingresos
    
const controlIngresoNumerico = (valor) => {
    if (!isNaN(valor)){
        return true
    }
    else return false
    
}

const controlSaldoSuficiente = (valor) => {
    if (Wallet.saldoCuentaDolares >= valor) {
        return true
    } else return false
}


// Funciones controlar errores en ingresos

const bienvenidaUsuario = (user) => {
    console.log (`
    ******************************************************************
    *                                                                *
                 Bienvenido ${user} a tu billetera virtual           
    *                                                                *
    ******************************************************************`
    )
}


// Funcion Menu Principal
const menuPrincipal = () => {
    console.log(`
    ******************************************************************
    
    Ingrese una opcion:
    
    1- Ingresar saldo.
    
    2- Retirar saldo.
    
    3- Consultar saldo.
    
    4- Transferir saldo.

    5- Cryptocurrency
        
    6- Cerrar Sesion.
    
    ******************************************************************
    `)

    let opcion = parseInt(prompt(`
    Ingrese una opcion:
    
    1- Ingresar saldo.
    2- Retirar saldo.
    3- Consultar saldo.
    4- Transferir saldo.
    5- Cryptocurrency
    6- Cerrar Sesion.
    `));
    let check = false;

    switch (opcion) {

        case 1:
            // Ingreso de saldo
            do {

                check = Wallet.ingresoSaldoDolares(parseInt(prompt('¿Cuanto saldo desea ingresar?')));

                if (check) {
                    console.clear();
                    bienvenidaUsuario(nombreUsuario);
                    alert(`Operacion realizada con exito!. Saldo actual $ ${Wallet.consultaSaldoDolares()}`)
                    console.log(`
                    ******************************************************************

                    Operacion realizada con exito!. Saldo actual $ ${Wallet.consultaSaldoDolares()}
                    
                    ******************************************************************`);
                    menuPrincipal();  
                }
                else {
                    alert('Datos incorrectos ingresados, por favor vuelva a ingresarlos')
                }

            } while (!check);

            break;

        case 2:
            // Retiro de saldo
            do {
                check = Wallet.retiroSaldoDolares(parseInt(prompt('¿Cuanto saldo desea retirar?')));
                if (check) {
                    console.clear();
                    bienvenidaUsuario(nombreUsuario);
                    alert(`Operacion realizada con exito!. Saldo actual restante $ ${Wallet.consultaSaldoDolares()}`)
                    console.log(`
                    ******************************************************************

                    Operacion realizada con exito!. Saldo actual restante $ ${Wallet.consultaSaldoDolares()}
                    
                    ******************************************************************`);
                    menuPrincipal();  
                }
                else {
                    check = true;
                    menuPrincipal();
                }
            } while (!check);

            break;

        case 3:
            // Consulta de saldo
            console.clear();
            bienvenidaUsuario(nombreUsuario);
            console.log(`
            ******************************************************************

                    Su saldo actual es: $ ${Wallet.consultaSaldoDolares()}
            
            ******************************************************************`);
            alert(`Su saldo actual es: $ ${Wallet.consultaSaldoDolares()}`);
            menuPrincipal();          
            break;

        case 4:
            // Transferencia de saldo
           alert('La transferencia esta fuera de servicio momentaneamente. Disculpe las molestias')
           console.clear();
           bienvenidaUsuario(nombreUsuario);
           menuPrincipal(); 


            break;

        case 5:
            console.clear();
            menuCrypto();

            break;
        case 6:
            console.clear();
            console.log(`
            ******************************************************************
    
                                    Se ha cerrado su sesion.
                
            ******************************************************************`);
    
            break;
        
        default:
            alert('Opcion no valida, vuelva a ingresarla nuevamente')
            console.clear();
            bienvenidaUsuario(nombreUsuario);
            menuPrincipal();
            break;
    }
}



const menuCrypto = () => {
    bienvenidaUsuario();
    console.log(`
    ******************************************************************
    
    Ingrese una opcion:
    
    1- Consultar cryptos en disposicion.
    
    2- Buscar crypto.
    
    3- Volver menu principal.
    
    4- Cerrar Sesion.
    
    ******************************************************************
    `)

    let opcion = parseInt(prompt(`
    Ingrese una opcion:
    
    1- Consultar cryptos en disposicion.
    2- Buscar crypto.
    3- Volver menu principal.
    4- Cerrar Sesion.
    `));


    switch (opcion) {
        case 1:
            console.clear();
            bienvenidaUsuario();
            SupportedCrypto.showSupportedCrypto();
            menuCrypto();
            break;
        case 2:
            let search = prompt('Ingrese crypto a buscar')
            let found = SupportedCrypto.searchSupportedCrypto(search)
            console.clear();
            if (found) {
                console.log(`
                ******************************************************************
                Cypto soportada por nuestra billetera virtual:

                Nombre: ${found.name}  Simbolo: ${found.symbol}  Precio: $ ${found.price}
                ******************************************************************`)
            }else {
                console.log(`${search} No es una crypto soportada en nuestra billetera virtual`)
            }

            
            menuCrypto();
            break;
        case 3:
            console.clear();
            bienvenidaUsuario();
            menuPrincipal();
            break;
        case 4:
            console.clear();
            console.log(`
            ******************************************************************

                                    Se ha cerrado su sesion.
            
            ******************************************************************`);

            break;
        
        default:
            alert('Opcion no valida, vuelva a ingresarla nuevamente')
            console.clear();
            bienvenidaUsuario(nombreUsuario);
            menuCrypto();
            break;
    }

}






bienvenidaUsuario(nombreUsuario);
menuPrincipal();

