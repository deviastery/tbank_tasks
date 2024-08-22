const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let countWorkers, timeLeavingWorker, floors, numLeavingWorker;

  rl.question('', (answer1) => {
    [countWorkers, timeLeavingWorker] = answer1.split(' ').map(Number);
  
    rl.question('', (answer2) => {
      floors = answer2.split(' ').map(Number); 
  
      rl.question('', (answer3) => {
        numLeavingWorker = Number(answer3);
  
        if (floors.length !== countWorkers) {
          console.error("Ошибка: Количество этажей не соответствует количеству рабочих");
          rl.close();
          return;
        }

        const floorLeavingWorker = floors[numLeavingWorker-1];
        if (floorLeavingWorker - floors[0] < timeLeavingWorker || floors[countWorkers-1] - floorLeavingWorker < timeLeavingWorker) {
          console.log(floors[countWorkers-1] - floors[0]);
        } else {
          if (floorLeavingWorker-floors[0] < floors[countWorkers-1]-floorLeavingWorker) {
            console.log(floorLeavingWorker-floors[0]+floors[countWorkers-1] - floors[0]);
          } else {
            console.log(floors[countWorkers-1]-floorLeavingWorker+floors[countWorkers-1] - floors[0]);
          }
        }
        rl.close();
      });
    });
  });