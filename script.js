'use strict';

// get user input
const userSelection = () => {
  if (document.querySelector('#opt-a').checked === true) {
    return 1000 * 600;
  }
  else if (document.querySelector('#opt-b').checked === true) {
    return 1000 * 450;
  }
  else if (document.querySelector('#opt-c').checked === true) {
    return 1000 * 300;
  }
  else if (document.querySelector('#op-d').checked === true) {
    return 1000 * 150;
  }
  document.querySelector('#start').textContent = 'Please select an option!';
};



  // set up the start button
  let timer;

  const handleStart = () => {
    const startTime = Date.now();
    const endTime = startTime + userSelection();
    if (document.querySelector('#start').textContent === 'PAUSE') {
      clearInterval(timer);
      document.querySelector('#start').textContent = 'RESUME'
      return;   
    };
    document.querySelector('#start').textContent = 'PAUSE';

    const countUp = document.querySelector('#count-up');
    const countDown = document.querySelector('#count-down');
    
    timer = setInterval(() => {
      const timeElapsed = Date.now() - startTime;
      const timeRemaining = endTime - Date.now();
      countUp.textContent = Math.floor(timeElapsed / 1000);
      countDown.textContent = Math.floor(timeRemaining / 1000);
    }, 1000);
  };

  document.querySelector('#start').addEventListener('click', handleStart)

  // set up the reset button

  const handleReset = () => {
    const countUp = document.querySelector('#count-up');
    const countDown = document.querySelector('#count-down');

    clearInterval(timer);
    countUp.textContent = '0';
    countDown.textContent = '0';

    document.querySelector('#start').textContent = 'START';
  };

  document.querySelector('#reset').addEventListener('click', handleReset);