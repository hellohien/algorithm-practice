// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
function humanReadable(secs) {
  let hours = Math.floor(secs / 3600);
  let minutes = Math.floor((secs / 60) % 60);
  let seconds = Math.floor(secs % 60);
  let pad = (val) => {
    return val < 10 ? `0${val}` : val;
  };
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}
