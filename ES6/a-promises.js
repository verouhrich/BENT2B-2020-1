// Esto en realidad no hace nada. Es solo un ejemplo de de la sintaxis de una Promesa. 

// Metodo fecth: La API Fetch proporciona una interfaz JavaScript para acceder y manipular 
// partes del canal HTTP, tales como peticiones y respuestas. Cliente nativo HTTP basado en promesas.
const url = 'http://mi_url.com'
console.log("Muestra uno")
fetch(url)
  .then(function(res) {
    // Esto se ejecuta cuando es correcto.
    console.log(res);
    return res.json()
  })
  .then(function(json) {
    return ({
      importantData: json.importantData,
    })
  })
  .then(function(data) {
    console.log(data)
  })
  .catch(function(err) {
    // handle error
    console.error("ERROR en llamada API");
  })
  console.log("Muestra dos")