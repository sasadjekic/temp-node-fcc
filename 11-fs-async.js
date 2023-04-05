const {readFileSync, writeFileSync} = require('fs');
const {readFile, writeFile} = require('fs');

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

/**
 * VAZNO - kada se startuje async funkcija program - main flow nastavlja dalje izvrsavanje
 */

//Sihrono pisanje i kreiranje fajla (ako ga nema) ALI sa flag a dodajemo append u fajl ako ga ima
//znaci kreira i upise ako nema, a dodaje content ako ga ima
writeFileSync(
    './content/result-sync.txt', 
    `Here is the result: ${first}, ${second}`,
    {flag: 'a'}
    )

console.log('start')

//Asihrono citanje i pisanje u fajl - Ugnjezdeni callbac-kovi
readFile('./content/first.txt', 'utf8', (err, result) => {
    if(err) {
        console.log(err)
        return err;
    } 
    //console.log(result)
    //Smestamo content iz prvog citanja u varijablu a zatim citamo drugi fajl i ponavljamo radnju...
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err) {
            console.log(err);
            return;
        }
        
        const second = result;
        //...a onda to sve upisujemo u treci fajl
        writeFile('./content/result-async.txt', `Here is the result ${first}, ${second}`,
        (err, result) => {
            if(err) {
                console.log(err)
                return;
            }
            console.log(result) //undefined
            console.log('done with the task')

        })
    })
})


console.log('start next task') //OVO CE ICI PRE OVOG GORE CONSOLA.LOG-a!