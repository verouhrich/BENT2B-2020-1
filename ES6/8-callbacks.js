// Esta funcion de primer nivel invoca una funcinon como argumento
function ejemploUno(callback) {
  return callback("Hola mundo!")
}

ejemploUno(console.log)



// Aqui se hace exactamente lo mismo pero hecho de forma asincrona
function ejemploUnoAsync(callback) {
  setTimeout(() => callback("Hola mundo!"), 1000)
}

ejemploUnoAsync(console.log)




// Con este ejemplo simulamos una llamada a una base de datos (o incluso a una API):
// Retorna un objeto que representa una persona.
function obtieneUsuarioDesdeDB(callback) {
    // Simula obtener la data desde una BD (con un tiempo de espera de 1000 ms)
    setTimeout(() => callback({firstName: 'Daniel', lastName: 'Guzman'}), 1000)
}

// Esta funcion saluda al usuario, que es pasado como un callback a `obtieneUsuarioDesdeDB``
function saludoUsuario(user) {
  console.log('Hola, ' + user.firstName)
}

obtieneUsuarioDesdeDB(saludoUsuario)
