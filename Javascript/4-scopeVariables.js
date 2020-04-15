// "var" tiene un ambito global, Lo que quiere decir que existe desde el momento de la 
// declaración hasta el final de la funcion
if (true) {
  var lexicallyScoped = 'Va a existir hasta el final de la funcion'
}

console.log(lexicallyScoped)

// "let" y "const" tienen un ambito de bloque
if (true) {
  let blockScoped = 'Va a exister hasta el proximo }'
  const alsoBlockScoped = 'Este tambien existe hasta el proximo }'
}

// Esta variable NO existe
console.log(typeof blockScoped)

thisIsAlsoAVariable = "hello"

const thisIsAConst = 50

// thisIsAConst++ // error!

const constObj = {}

// Los objetos constantes son mutables
constObj.a = 'a'

let thisIsALet = 51
thisIsALet = 50

// let thisIsALet = 51 // errors!

var thisIsAVar = 50
thisIsAVar = 51
var thisIsAVar = 'Nuevo valor!'
