
// Esto crea la misma funcion enclousre como en el ejemplo anterior, pero no
// le carga valores. 
const sayHello = (function () {
  var message = 'Hello!'

  function sayHello() {
    console.log(message)
  }

  return sayHello
})()

//Este tipo de acciones nos permiten crear variables que son inacesibles desde el ambito global
const counter = (function() {
  let count = 0

  return {
    inc: function() { count = count + 1 },
    get: function() { console.log(count) },
    sum: function() { count = count + count },
    elemens: [1234, 5, 7,9],
    obj1: {

    }
  }
})()

counter.get()
counter.inc()
counter.get()
counter.sum()
counter.get()
