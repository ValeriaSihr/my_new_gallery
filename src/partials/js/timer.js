import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const timeInput = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const span = document.querySelectorAll('.value');
const day = document.querySelector('[data-days]');
const hour = document.querySelector('[data-hours]');
const minute = document.querySelector('[data-minutes]');
const second = document.querySelector('[data-seconds]');


let timerId = null;
btn.disabled = true;

flatpickr(timeInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      alert('Plese, choose the date in the future');
      btn.disabled = true;
    } else {
      btn.disabled = false;
      alert('Move, bitch!')
    }
  },
})

btn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {
  span.forEach(item => item.classList.toggle('end'));
  btn.disabled = true;
  timeInput.disabled = true;
  timerId = setInterval(() => {
    const choosenDate = new Date(timeInput.value);
    const timeToFinish = choosenDate - Date.now();
    const { days, hours, minutes, seconds } = convertMs(timeToFinish);

    day.textContent = addLeadingZero(days);
    hour.textContent = addLeadingZero(hours);
    minute.textContent = addLeadingZero(minutes);
    second.textContent = addLeadingZero(seconds);

    if (timeToFinish < 1000) {
      span.forEach(item => item.classList.toggle('end'));
      clearInterval(timerId);
      timeInput.disabled = false;
    }
  }, 1000)

}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return `${value}`.padStart(2, "0");
}






