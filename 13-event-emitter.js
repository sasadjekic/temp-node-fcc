const EventEmitter = require('events')

//nova instanca tj emit event and listen for it
//metodi u objektu kao: on, emit
const customEmitter = new EventEmitter()

//on - listen for event, (ime eventa, triger callback funkcija (a koja moze imati parametre 
//ciji su argumenti navedeni u emiteru!))
customEmitter.on('response', (name, id) => {
    console.log(`data received ${name} with id: ${id}`)
})

//mozemo dodati koliko hocemo listenera na isti event sa drugom logikom tj triger funkcijom tj da radi 
//nesto drugo 
customEmitter.on('response', () => {
    console.log(`some other logic here `)
})

//emit - emitovanje eventa - na koji se slusa/ceka preko on
//ime eventa, argumenti... kojima se pristupa preko proiyvoljnih varijabli unutar listener callback funkcija
customEmitter.emit('response', 'john', 34)

//RED JE BITAN! - PRVO IDU LISTENERI PA IDE EMITER!

