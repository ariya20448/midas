function getRandomTime() {
  const randomHour = Math.floor(Math.random() * 24);
  const randomMinute = Math.floor(Math.random() * 60);

  const hour = randomHour < 10 ? "0" + randomHour : String(randomHour);
  const minute = randomMinute < 10 ? "0" + randomMinute : String(randomMinute);

  return `${hour}:${minute}`;
}

function getClockAngle(time) {
  // split hour and min
  const [hour, minute] = time.split(":").map(Number);

  // Calculate hour and minute
  const hourAngle = (hour % 12) * 30 + (minute / 60) * 30;
  const minuteAngle = (minute / 60) * 360;

  // Calculates the ratio difference between hour and minute hands.
  let angle = Math.abs(hourAngle - minuteAngle);

  // choose a shorter angle
  if (angle > 180) {
    angle = 360 - angle;
  }

  return angle;
}

console.log(getClockAngle(getRandomTime()));
