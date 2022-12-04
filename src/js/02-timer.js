
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const ref = {
    dateTime: document.querySelector('#datetime-picker'),
    startButton: document.querySelector('[data-start]'),
    days: document.querySelector('[data-days]'),
    hours: document.querySelector('[data-hours]'),
    minutes: document.querySelector('[data-minutes]'),
    seconds: document.querySelector('[data-seconds]')
}

let startTime = null;

ref.startButton.setAttribute('disabled', true);
ref.startButton.addEventListener('click', onClickStartButton);


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    
    onClose(selectedDates) {
        console.log(selectedDates[0]);
        
        startTime = selectedDates[0];

      if (startTime >= Date.now()) {
        ref.startButton.removeAttribute('disabled');
    } else {
        window.alert('Please choose a date in the future')
    }
  },
};

flatpickr(ref.dateTime, options);

function onClickStartButton() {
    ref.startButton.setAttribute('disabled', true);

    const timerId = setInterval(() => {

        const deltaTime = startTime - Date.now();
        const { days, hours, minutes, seconds } = convertMs(deltaTime);
        console.log(`${days}, ${hours}, ${minutes}, ${seconds} `);

        ref.days.textContent = days;
        ref.hours.textContent = hours;
        ref.minutes.textContent = minutes;
        ref.seconds.textContent = seconds;

        if (deltaTime < 1000) {
            clearInterval(timerId);
        }
    }, 1000)

};



// це з тз

function addLeadingZero(value) {
     return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}



