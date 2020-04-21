
const o = new Object()
o.firstName = 'Daniel'
o.lastName = 'Guzman'
o.isTeaching = true
o.saludo = function() { console.log('Hola Mundo!') }

console.log(JSON.stringify(o))

const o2 = {}
o2['firstName'] = 'Daniel'
const a = 'lastName'
o2[a] = 'Guzman'

const o3 = {
  firstName: 'Daniel',
  lastName: 'Guzman',
  saludo: function() {
    console.log('Hola')
  },
  address: {
    street: "Mi calle",
    number: '111'
  }
}


