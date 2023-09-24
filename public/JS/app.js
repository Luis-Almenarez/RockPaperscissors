let pointsUser = 0;
let pointsPC = 0;

let instructions = document.querySelector(".instructions");
let containerPointsUser = document.querySelector(".point__user");
let containerPointPC = document.querySelector(".point__pc");
let message = document.querySelector(".message");
let containerWinPoint = document.querySelector("#win__point");
let electionUser = document.querySelector("#election__user");
let electionPC = document.querySelector("#election__pc");
let atack = document.querySelector("#atack");
let winMessage = document.querySelector(".win__message");
let reset = document.querySelector("#reset");
let buttonsArms = document.querySelectorAll(".arm");

buttonsArms.forEach((button) => {
  button.addEventListener("click", startGame);
});

reset.addEventListener("click", resetGame);

function startGame(e) {
  let numberPC = Math.floor(Math.random() * 3);
  let selectionUser = e.currentTarget.id;

  if (numberPC === 0) {
    numberPC = "rock🪨";
  } else if (numberPC === 1) {
    numberPC = "paper📃";
  } else if (numberPC === 2) {
    numberPC = "scissors✂️";
  }

  if (
    (selectionUser === "rock🪨" && numberPC === "scissors✂️") ||
    (selectionUser === "scissors✂️" && numberPC === "paper📃") ||
    (selectionUser === "paper📃" && numberPC === "rock🪨")
  ) {
    winUser();
    electionUser.textContent = selectionUser;
    electionPC.textContent = numberPC;
  } else if (
    (numberPC === "rock🪨" && selectionUser === "scissors✂️") ||
    (numberPC === "scissors✂️" && selectionUser === "paper📃") ||
    (numberPC === "paper📃" && selectionUser === "rock🪨")
  ) {
    winPc();
    electionUser.textContent = selectionUser;
    electionPC.textContent = numberPC;
  } else {
    draw();
    electionPC.textContent = numberPC;
    electionUser.textContent = selectionUser;
  }

  if (pointsUser === 5) {
    winMessage.classList.remove("losser__message");
    winMessage.classList.add("win__message");
    instructions.classList.add("disable");
    winMessage.textContent = "¡GANASTE LA PARTIDA!";
    containerPointsUser.textContent = 0;
    containerPointPC.textContent = 0;
  } else if (pointsPC === 5) {
    winMessage.classList.remove("win__message");
    winMessage.classList.add("losser__message");
    instructions.classList.add("disable");
    winMessage.textContent = "Perdiste la partida";
    containerPointPC.textContent = 0;
    containerPointsUser.textContent = 0;
  }
}

function winUser() {
  pointsUser++;
  containerPointsUser.textContent = pointsUser;
  containerWinPoint.textContent = "¡Haz ganado un punto! 🙌";
  message.classList.remove("disable");
  containerWinPoint.classList.remove("disable");
  electionUser.textContent = `Haz utilizado `;
}

function winPc() {
  pointsPC++;
  containerPointPC.textContent = pointsPC;
  containerWinPoint.textContent = "¡La computadora acaba de ganar un punto! 😥";
  message.classList.remove("disable");
  containerWinPoint.classList.remove("disable");
}

function draw() {
  containerWinPoint.textContent = "¡Empate! 👌";
  message.classList.remove("disable");
  containerWinPoint.classList.remove("disable");
}

function resetGame() {
  location.reload();
}
