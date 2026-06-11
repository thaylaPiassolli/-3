const startDate = new Date('2023-08-26T00:00:00');

function updateCountdown() {
  const now = new Date();
  let years = now.getFullYear() - startDate.getFullYear();

  const anniversary = new Date(startDate);
  anniversary.setFullYear(startDate.getFullYear() + years);

  if (anniversary > now) {
    years -= 1;
    anniversary.setFullYear(startDate.getFullYear() + years);
  }

  let months = now.getMonth() - anniversary.getMonth();
  if (months < 0) {
    months += 12;
  }

  anniversary.setMonth(anniversary.getMonth() + months);
  if (anniversary > now) {
    months -= 1;
    anniversary.setMonth(anniversary.getMonth() - 1);
  }

  const diff = now - anniversary;
  const secondsTotal = Math.floor(diff / 1000);
  const days = Math.floor(secondsTotal / 86400);
  const hours = Math.floor((secondsTotal % 86400) / 3600);
  const minutes = Math.floor((secondsTotal % 3600) / 60);
  const seconds = secondsTotal % 60;

  document.getElementById('years').textContent = years;
  document.getElementById('months').textContent = months;
  document.getElementById('days').textContent = days;
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);
