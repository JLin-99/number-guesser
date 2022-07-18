// Player must guess a number between a min and max
const min = 1, max = 10;
game = document.getElementById("game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.getElementById("guess-btn"),
  guessInput = document.getElementById("guess-input"),
  message = document.querySelector(".message");

let winningNum = Math.floor(Math.random() * (max - min + 1)) + min,
  guessesLeft = 3, guessValue;

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
})

guessBtn.addEventListener("click", function () {
  guessValue = parseInt(guessInput.value);

  if (!guessValue || guessValue < min || guessValue > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red")
    return;
  }

  if (guessValue === winningNum) {
    // Notify the player if win
    gameOver("win", `${winningNum} is correct, YOU WIN 😎!`)
  } else {
    // Player gets a certain amount of guesses
    --guessesLeft;
    if (!guessesLeft) {
      // Notify the player of the correct answer if lose
      gameOver("lose", `YOU LOST 😔 The correct number was ${winningNum}`)
    } else {
      // Notify player of guesses remaining
      guessInput.style.borderColor = "red";
      guessInput.value = "";
      setMessage(`${guessValue} is not correct, ${guessesLeft} guesses left`);
    }
  }
});

function gameOver(result, msg) {
  const color = result === "win" ? "green" : "red";

  guessInput.disabled = true;
  guessInput.style.borderColor = color;
  setMessage(msg, color);

  // Let player choose to play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}