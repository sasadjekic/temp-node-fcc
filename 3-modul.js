/* PREGLED import / eksport modula
module.exports = sayHello; -> const sayHello = require('./5-utils') -> sayHello(names.john)
module.exports = {peter, john} -> const names = require('./4-names') -> names.john 
                                  const {john, peter} = require('./4-names') -> john
*/

//import modula tj dela modula iz fajla 
const names = require('./4-names') //pristup name.john  
//Eksportovano iz gorepomenutog fajla je u OBJEKTU names - sto povlaci nacin pristupa tim resursima

const {john, peter} = require('./4-names') // ILI sa destrukturiranjem //pristup john

//Import funkcije istog imena iz ovog fajla ALI mozemo varijabli da imenujemo kako hocemo.(najbolje isto)
//const sayHellooo = require('./5-utils')
const sayHello = require('./5-utils')
//const writeHello = require('./5-utils')

//Proba sa alternativnim za eksport modula
const data = require('./6-alt-flav')
console.log(data)
console.log(data.singlePerson)
console.log(data.items)

//Poziv modula u kome je vec pozvana funkcija
require('./7-mind-grenade')


//Importovano preko {objekta u export modulu}
//sayHellooo.sayHello("susan");

//Importovano preko navedenog samog 
sayHello(names.john) //prvi require names
sayHello(john) // drugi require {dest}

const n = 5;
console.log({n})

//sayHellooo.writeHello(peter)