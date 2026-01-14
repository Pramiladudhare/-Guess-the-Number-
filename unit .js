let random;
let max;

const startBtn = document.getElementById("startBtn");
const gameArea = document.getElementById("gameArea");
const rangeText = document.getElementById("range");
const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const quitBtn = document.getElementById("quitBtn");
const message = document.getElementById("message");

startBtn.addEventListener("click", () => {
  max = document.getElementById("maxNum").value;
  if (!max || max <= 1) {
    alert("Please enter a valid number greater than 1");
    return;
  }
  random = Math.floor(Math.random() * max) + 1;
  rangeText.textContent = max;
  gameArea.classList.remove("hidden");
  message.textContent = "";
  guessInput.value = "";
});

guessBtn.addEventListener("click", () => {
  let guess = parseInt(guessInput.value);
  if (!guess) {
    message.textContent = "⚠️ Please enter a number!";
    return;
  }

  if (guess === random) {
    message.textContent = `🎉 You are right! The number was ${random}`;
  } else if (guess < random) {
    message.textContent = "⬆️ Too small! Try again.";
  } else {
    message.textContent = "⬇️ Too large! Try again.";
  }
});

quitBtn.addEventListener("click", () => {
  message.textContent = "🚪 You quit the game!";
  gameArea.classList.add("hidden");
});
