let maxDate = new Date();
maxDate.setMonth(maxDate.getMonth() + 3);

flatpickr('#startAt', {
  enableTime: true,
  time_24hr: true,
  dateFormat: "Y-m-d H:i",
  minTime: "11:00",
  maxTime: "22:30",
  minuteIncrement: 30,
  locale: 'ja',
  minDate: 'today',
  maxDate: maxDate
});