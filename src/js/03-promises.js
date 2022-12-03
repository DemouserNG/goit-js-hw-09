
const form = document.querySelector('.form');

form.addEventListener('submit', onSubmitButton);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {

    setTimeout(() => {

      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    })
  }, delay);

}

function onSubmitButton(e) {
  e.preventDefault();

  let delayValue = Number(e.target.elements.delay.value);
  let stepValue = Number(e.target.elements.step.value);
  let amountValue = Number(e.target.elements.amount.value);

  for (let i = 1; i <= amountValue; i += 1) {
    createPromise(i, delayValue).then(onSuccess).catch(onError);
    delayValue += stepValue;
  }

}


function onSuccess({ position, delay }) {
  console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);

};
function onError({ position, delay }) {
  console.log(`❌ Rejected promise ${position} in ${delay}ms`);
}
