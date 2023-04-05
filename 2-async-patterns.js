const {readFile, writeFile} = require('fs').promises;   //(2) - promises i fs

//Gornjim metodom .promises na readfile, writeFile zaobilazimo UTIL modul i te funkcije iz FS modula
//cinimo promisima te ih pozivamo normalno 

//promisified poziv FS funkcija umesto UTIL modula i funkcije normalnog imena
const start = async() => {
    try {
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/result-mind-grenade.txt',
        `THIS IS AWESOME: ${first} ${second}`,
        {flag: 'a'} //OVO JE ZA DODAVANJE SADRZAJA PRI UPISU, AGAIN!!!!!!!
        )
        console.log(first, second)
    } catch (error) {
        console.log(error)
    }
} 

start()



//const util = require('util'); - III nacin sa UTIL modulom 
//Umesto funkcije sa promisom (getText) imamo modul UTIL i metod promisify - III nacin 
//const readFilePromise = util.promisify(readFile)
//const writeFilePromise = util.promisify(writeFile)

// promisified func umesto getText
// const start = async() => {
//     try {
//         const first = await readFilePromise('./content/first.txt', 'utf8')
//         const second = await readFilePromise('./content/second.txt', 'utf8')
//         await writeFilePromise('./content/result-mind-grenade.txt',
//         `THIS IS AWESOME: ${first} ${second}`)
//         console.log(first, second)
//     } catch (error) {
//         console.log(error)
//     }
// } 

//start()





//I nacin je u 10-fs-module - piramida callback func...

// II nacin za asihrono - promise - then ili async
// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf8', (err, data) => {
//             if (err){
//                 reject(err)
//             } else {
//                 resolve(data)
//             }
//         })
//     })
// }

//II nacin - poziv A (then, catch)
// getText('./content/first.txt')
//     .then((result) => console.log(result))
//     .catch((err) => console.log(err))

//II nacin - poziv B (Async/await)  - getText func
// const start = async() => {
//     try{
//         const first = await getText('./content/first.txt')
//         const second = await getText('./content/second.txt')
//         console.log(first, second)
//     } catch(error) {
//         console.log(error)
//     }
// } 





