const sayHello = (name) => {
    console.log( `Hello to node ${name}`);
}

const writeHello = (name) => {
    console.log( `Write to node ${name}`);
}

//mora biti istog imena ako nenavodimo sta se exportuje
module.exports = sayHello;
//module.exports = writeHello;
//module.exports ={ sayHello, writeHello};