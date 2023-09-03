function clock() {
  let time = new Date();
  let hour = time.getHours();
  let minutes = time.getMinutes();
  let second = time.getSeconds();
  if (second < 10) {
    second = '0' + second;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (hour < 10) {
    hour = '0' + hour;
  }
  document.getElementById('hour').innerHTML = hour;
  document.getElementById('minutes').innerHTML = minutes;
  document.getElementById('second').innerHTML = second;
  document.getElementById('ampm').innerHTML = 'AM';
  if (hour >= 12) {
    document.getElementById('ampm').innerHTML = 'PM';
  }
}
let update = setInterval(clock, 1000);

let month = new Date();
let dayName = month.toLocaleDateString('default', { weekday: 'long' });
document.getElementById('day').innerHTML = dayName;
let monthName = month.toLocaleDateString('default', { month: 'short' });
document.getElementById('month').innerHTML = monthName;
let date = month.getDate();
document.getElementById('date').innerHTML = date;
let year = month.getFullYear();
document.getElementById('year').innerHTML = year;