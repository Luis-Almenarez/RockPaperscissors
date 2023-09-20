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

let buttonsArms = document.querySelectorAll(".arm");

buttonsArms.forEach((button) => {
  button.addEventListener("click", startGame);
});

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

  console.log("Usuario " + selectionUser);
  console.log("PC " + numberPC);
}
