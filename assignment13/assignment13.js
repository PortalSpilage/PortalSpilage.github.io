// initialization -------------------------------------------------------------

const buttonThen = document.querySelector('.buttonThen');
const buttonCallBack = document.querySelector('.buttonCallBack');
const buttonPromise = document.querySelector('.buttonPromise');
const buttonAsync = document.querySelector('.buttonAsync');

const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
};
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");
  
  

async function tumbleAliceAsync() {
  
  
  const showAnimateObject = alice1.animate(aliceTumbling, aliceTiming);
  await showAnimateObject.finished;
  const showAnimateObject2 = alice2.animate(aliceTumbling, aliceTiming);
  await showAnimateObject2.finished;
  const showAnimateObject3 = alice3.animate(aliceTumbling, aliceTiming);
   
};

// button Set ----------------------------------------------------------
buttonAsync.addEventListener('click', tumbleAliceAsync);

  
    
    
    
    