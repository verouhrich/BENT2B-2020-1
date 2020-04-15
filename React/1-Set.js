/**
 * Clase Set
 * 
 * Mantiene una lista de valores y soporta los metodos add, delete y has.
 * Ademas, es capaz de retornar su tamaño.
 *
 * @class Set
 */
class Set {
  constructor(arr) {
    this.arr = arr
  }

  add(val) {
    if (!this.has(val)) this.arr.push(val)
  }

  delete(val) {
    this.arr = this.arr.filter(x => x !== val)
  }

  has(val) {
    return this.arr.includes(val)
  }

  get size() {
    return this.arr.length
  }
}

const s = new Set([1,2,3,4,5])

// Si se intenta agregar un valor existente no funciona.
s.add(1)
s.add(1)
s.add(1)
console.log('Deberia tener 5 elementos:', s.size)

console.log('Deberia contener 5:', s.has(5))

s.add(6)
console.log('Deberia devolver 6:', s.has(6))
console.log('Deberia tener 6 elementos:', s.size)

s.delete(6)
console.log('Ya no contniene el valor 6:', !s.has(6))
console.log('Deberia de tener otra vez 5 elementos:', s.size)
