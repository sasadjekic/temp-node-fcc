const path = require('path');

console.log(path.sep); //   \ (posto je windows)

const filePath = path.join('./content/', '/subfolder', 'test.txt'); // uklanjaju se suvisne / k.crte
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

//Apsolutne putanje - sa resolve i join i __dirname
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

const path2 = path.join(__dirname, 'content', 'subfolder', 'test.txt');
console.log(path2)

