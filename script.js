alert("Realiza tu pedido de hamburguesa")
let elegida = prompt("Ingrese 1 para: COMBO INFANTIL $1500 \nIngrese 2 para: COMBO MEDIANO $1700 \nIngrese 3 para: COMBO GRANDE $2500")

let combos = [
   {id: 1, Nombre : "Combo infantil", precio: 1500},
   {id: 2, Nombre : "Combo mediano", precio: 1700},
   {id: 3, Nombre : "Combo grande", precio: 2500}]

let prod = combos.find(item => {
   return item.id == elegida
})
alert("Su pedido fue: Un " + prod.Nombre)
alert("Si abona con tarjeta le sumamos un 21% a su compra final")

let preg = prompt("Efectivo \nTarjeta")

let total = 0

let iva = Number(prod.precio * 0.21)
if (preg == "tarjeta") {

   total = Number(prod.precio + iva)

 alert("Su total es " + total)

}else if (preg == "efectivo") {
   alert("Su total es " + prod.precio + " pesos")
}

alert("Gracias por su compra")