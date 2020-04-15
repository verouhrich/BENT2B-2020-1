/**
 * En este ejemplo se puede ver como funciona la ejecución en pilas.
 */

// Cuando una excepcion es lanzada, la pila entera es mostrada. (ver las llamadas que muestra la consola)
function addOne(num) {
  throw new Error('oh no, an error!')
}

function getNum() {
  return addOne(10)
}

function c() {
  console.log(getNum() + getNum())
}

c()
