const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let countNumbers, countReplace, numbers;

  rl.question('', (answer1) => {
    [countNumbers, countReplace] = answer1.split(' ').map(Number);
  
    rl.question('', (answer2) => {
      numbers = answer2.split(' ').map(Number); 

      let arrayIncrease = new Array(numbers.length).fill(0);

      for (let i = 0; i < numbers.length; i++) {
        let stringNum = numbers[i].toString();
        for (let j = 0; j < stringNum.length; j++) {
          if (stringNum[j] !== '9' ) {
            let increaseNumberString = stringNum.replace(stringNum[j], '9');
            arrayIncrease[i] = increaseNumberString - stringNum;
            break;
          }  
        }
      }

      arrayIncrease.sort((a, b) => b - a);

      let sum = 0;
      for (let i = 0; i < countReplace; i++) {
        if (i >= arrayIncrease.length) break;
        sum += arrayIncrease[i];
      }

      console.log(sum);

      rl.close();
    });
  });