function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}  

const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

startBtn.addEventListener('click', onBtnstart);
stopBtn.addEventListener('click', onBtnStop);

function onBtnstart() {
    timerId = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startBtn.setAttribute('disabled', true);
    stopBtn.removeAttribute('disabled');
}
function onBtnStop() {
    clearInterval(timerId);

    stopBtn.setAttribute('disabled', true)
    startBtn.removeAttribute('disabled');
};




