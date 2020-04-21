console.log(this)

// Esto imprime el objeto global
function definicion() {
  console.log(this)
}

definicion()

// =======================================

const persona = {
  nombre: 'Lucas',
  saludo: function() { console.log('Hola, ' + this.nombre) }
}

persona.saludo() // Hola, Lucas

// =====================================

const amigo = {
  nombre: 'Pedro',
}

amigo.saludo = persona.saludo

amigo.saludo() // Hola, Pedro

// ====================================

const saludoPersona = persona.saludo

saludoPersona() // Hola, undefined

// saludoPersona() funcionaria solo en la consola
this.nombre = 'Global'

// Esto funcionaria solo en la consola: Hola, Global
saludoPersona()

const personaGenial = person.saludo.bind(person)
personaGenial() // Hola, Lucas

person.saludo.call({nombre: 'Karina'}) // Hola, Karina
person.saludo.apply({nombre: 'Ana'}) // Hola, Ana

// ====================================

const nuevaPersona = {
  nombre: 'Lucas',
  // Notacion de array, le bindea `this` en contexto.
  saludo: () => console.log('Hola, ' + this.nombre)
}

nuevaPersona.saludo() // Hola, Global

// Funciones bindeadas no puede ser bindeadas de nuevo.
nuevaPersona.saludo.call(person) // Hola, Global
