let sec_v = document.getElementById("sec");
let interval
let seconds = document.getElementById("seconds");

const sound = new Howl({
  src: ['/howler/tests/audio/sound1.mp3'],
  volume: 0.1
});

document.getElementById('start').addEventListener("click", () => {

  let sec = parseInt(sec_v.value);
  seconds.textContent = sec;
  interval = setInterval(() => {
    if (sec != 0) {
      sec--
      seconds.textContent = sec;
    } else {
      sound.play();
      alert("Время вышло")
      clearInterval(interval)
    }
  }, 1000)
});

document.getElementById('stop').addEventListener("click", () => {
  clearInterval(interval)
});


