const o = {
  a: 'a',
  b: 'b',
  obj: {
    key: 'key',
  },
}

const o2 = o

o2.a = 'Nuevo valor'

// o y o2 hacen ahora referencia al mismo objeto
console.log(o.a)

// Esto copia o en o3. (sin referencia)
const o3 = Object.assign({}, o)

// Copiado en cascada
function deepCopy(obj) {
  // verifica si los valores son objetos
  // Si son objetos copio ese objeto a sí mismo
  // Sino retorno el valor
  const keys = Object.keys(obj)

  const newObject = {}

  for (let i = 0; i < keys.length; i++) {
    const key = keys[i]
    if (typeof obj[key] === 'object') {
      newObject[key] = deepCopy(obj[key])
    } else {
      newObject[key] = obj[key]
    }
  }

  return newObject
}

const o4 = deepCopy(o)

o.obj.key = 'Nuevo Valor!'
console.log(o4.obj.key)
