'use strict'

/* Me faltaria encontrar una API para que me traiga el valor de Dolar a Pesos
y agregar el contenido a la pagina para mostralo mejor.
Pero como se me estaba complicando un poco con los modulos que cree y en la ultima clase vi que hablaban de paginas SPA queria ver de mudar el diseño y armar una con ese estilo */


const fetchDataCryto = 'https://api.binance.com/api/v3/ticker/price';
const dataCrypto = [];




fetch (fetchDataCryto)
    .then (response => response.json())
    .then(data => mostrarData(data) )
    .catch (error => console.log(error))


const mostrarData = (data) => {
   // console.log(data)

    for (const crypto in data) {


        if ((data[crypto].symbol ===  "ETHUSDT") || (data[crypto].symbol === "BTCUSDT")  || (data[crypto].symbol === "ADAUSDT")) {

            dataCrypto.push(data[crypto])
            
        }

        
        
    }
   // console.log(dataCrypto)
   const showData = document.getElementById("showData")
   dataCrypto.forEach(e => {
    console.log(e)
    showData.innerHTML += `
    <li>${e.symbol} - ${ e.price} </li>`
})
}






