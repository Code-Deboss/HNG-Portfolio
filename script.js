document.addEventListener('DOMContentLoaded', () => {
  function updateTimeAndDay() {
    const now = new Date();
    const utcTime = now.toUTCString().split(' ')[4]; 

    document.getElementById('time-utc').textContent = utcTime;
    document.getElementById('day-of-week').textContent = dayOfWeek;
  }

  updateTimeAndDay();
  setInterval(updateTimeAndDay, 1000); 
});
