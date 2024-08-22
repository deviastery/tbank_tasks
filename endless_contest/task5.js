const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


rl.question('', (answer) => {
  const numbers = answer.split(' ').map(Number);
  
  console.log(price);
  rl.close();
});