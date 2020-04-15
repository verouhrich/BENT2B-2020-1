// Funciones invocadas
hoistedFunction()

// Solo si son declaradas como funciones y no como variables inicializadas
console.log("typeof butNotThis: " + typeof butNotThis)

function thisShouldWork() {
    console.log("Las funciones estan declaradas al inicio del ambito")
}

var butNotThis = function() {
    console.log("Las variables no.")
}
