// Comentario simple
/*
 * Bloque de comentario
 */

// camelCase es preferido
// Comilla doble para cadenas
//
const firstName = "Daniel";

// El punto y coma son opcionales
// Comillas simples también crean cadenas.
const lastName = 'Guzman'

// Los arrays pueden ser declarados en linea
// Los arrays pueden tener multiplos tipos de datos 
const arr = [
  'cadena',
  42,
  function() { console.log('Hola mundo!') },
]

// Esto retorna el elemento en la posicion 2 y lo invoca
arr[2]()

// Esto itera a traves del array y lo muestra por consola
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}
