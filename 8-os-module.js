console.log("**************************** OS *************************")
const os = require('os');

//info about current user 
const user = os.userInfo()
console.log({user})

//system uptime
console.log(`System uptime ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS)