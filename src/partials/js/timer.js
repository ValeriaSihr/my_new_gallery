import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";

const timeInput = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const span = document.querySelectorAll('.value');
const days = document.querySelector('[data-days]');
const hours = document.querySelector('[data-hours]');
const minutes = querySelector('[data-minutes]');
const seconds = document.querySelector('[data-seconds]');


let timerId = null;
btn.disabled = true;

flatpickr(timeInput, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= new Date()) {
      alert('Plese, chose the date in the future');
      btn.disabled = true;
    } else {
      btn.disabled = false;
      alert('Move, bitch!')
    }
  },
})

btn.addEventListener('click', onStartBtnClick);

function onStartBtnClick() {

}





