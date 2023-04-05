const {createReadStream } = require('fs')

//Kreiranje varijable za stream podataka sa putanjom fajla
const stream = createReadStream('../content/big.txt', {highWaterMark: 90000, encoding: 'utf8'})
//GRESKA NAMERNO UBACENA ../
// default 64 kb
// last buffer - remainder
// highWaterMark - control size   - OPCIJE
//const stream = createReadStream('./content/big.txt', {highWaterMark: 90000})
//const stream = createReadStream('./content/big.txt', {encoding: 'utf8'})

//Na kreirani strema objekat kacimo listener koji aktivira svoju callback funkciju na event DATA tj kad poteku podaci
stream.on('data', (result) => {
    console.log(result)
})
//Listener za slucaj greske - event ERROR
stream.on('error', (err) => console.log(err))

