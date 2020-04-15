function imprimeUno() {
  console.log('uno')
}

function imprimeDos() {
  console.log('dos')
}

function imprimeTres() {
  console.log('tres')
}

// Con este ejemplo se puede apreciar como trabaja la cola de funciones.
// No los imprime en orden sino que depende de las llamadas encoladas.
setTimeout(imprimeUno, 1000)
setTimeout(imprimeDos, 0)
imprimeTres()
