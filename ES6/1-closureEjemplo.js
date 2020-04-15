function makeHelloFunction() {
  var message = 'Hola mundo!'

  function sayHello() {
    console.log(message)
  }

  return sayHello
}

const sayHello = makeHelloFunction()

// La variable `message` no está dentro del ámbito quí
console.log('typeof message:', typeof message)
// pero la funcion sayHello todavía referencia a la variable llamada message
console.log(sayHello.toString())

// Por la funcion clousure, `sayHello` todavia tiene acceso
// a la variable dentro del ambito de la funcion cuando fue declarada
sayHello()
