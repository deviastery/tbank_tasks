const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

function slicesCount(n) {
    if (n <= 1) {
        return 0; 
    }
    if (n === 2) {
        return 1; 
    }
    if (n === 3) {
        return 2; 
    }
    if (n % 2 === 0) {
      return slicesCount(n/2) + 1;
    } else {      
      return slicesCount(Math.floor(n / 2) + 1) + 1;
    }
}

rl.question('', (answer) => {
  const num = Number(answer);
  console.log(slicesCount(num));
  rl.close();
});