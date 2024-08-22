const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })


rl.question('', (answer) => {
  const numbers = answer.split(' ').map(Number);
  let price;
  if (numbers[3] > numbers[1]) {
    price = (numbers[3] - numbers[1]) * numbers[2] + numbers[0];
  } else {
    price = numbers[0];
  }
  console.log(price);
  rl.close();
});