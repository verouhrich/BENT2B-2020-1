// FUnciones de alto orden. Toman funciones como argumentos o retornan funciones
function map(arr, fn) {
  const newArr = []

  arr.forEach(function(val) {
    newArr.push(fn(val))
  })

  return newArr
}

//Funcion incremental
function addOne(num) { return num + 1 }

const x = [0,1,2,3]
// [1, 2, 3, 4]

console.log(map(x, addOne))


function filter(arr, fn) {
  const newArr = []
  arr.forEach(val => {
    if (fn(val)) newArr.push(val)
  })

  return newArr
}

function reduce(arr, fn, initialVal) {
  let returnVal = initialVal

  arr.forEach(val => {
    returnVal = fn(returnVal, val)
  })

  return returnVal
}
