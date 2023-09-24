// Declaración de variables para llevar el registro de los puntos del jugador y la computadora
let pointsUser = 0;
let pointsPC = 0;

// Seleccionar elementos HTML relevantes y asignarlos a variables para su posterior uso
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

// Agregar un evento de clic a cada botón de arma
buttonsArms.forEach((button) => {
  button.addEventListener("click", startGame);
});

// Agregar un evento de clic al botón de reinicio
reset.addEventListener("click", resetGame);

// Función principal del juego que se ejecuta al hacer clic en un botón de arma
function startGame(e) {
  // Generar una elección aleatoria para la computadora (0, 1, o 2)
  let numberPC = Math.floor(Math.random() * 3);
  let selectionUser = e.currentTarget.id;

  // Asignar valores legibles por humanos en lugar de números a la elección de la computadora
  if (numberPC === 0) {
    numberPC = "Piedra🪨";
  } else if (numberPC === 1) {
    numberPC = "Papel📃";
  } else if (numberPC === 2) {
    numberPC = "Tijeras✂️";
  }

  // Determinar el resultado del juego y actualizar la interfaz en consecuencia
  if (
    (selectionUser === "Piedra🪨" && numberPC === "Tijeras✂️") ||
    (selectionUser === "Tijeras✂️" && numberPC === "Papel📃") ||
    (selectionUser === "Papel📃" && numberPC === "Piedra🪨")
  ) {
    winUser(); // El jugador gana
    electionUser.textContent = selectionUser;
    electionPC.textContent = numberPC;
  } else if (
    (numberPC === "Piedra🪨" && selectionUser === "Tijeras✂️") ||
    (numberPC === "Tijeras✂️" && selectionUser === "Papel📃") ||
    (numberPC === "Papel📃" && selectionUser === "Piedra🪨")
  ) {
    winPc(); // La computadora gana
    electionUser.textContent = selectionUser;
    electionPC.textContent = numberPC;
  } else {
    draw(); // Empate
    electionPC.textContent = numberPC;
    electionUser.textContent = selectionUser;
  }

  // Verificar si alguien ha alcanzado 5 puntos y mostrar un mensaje de resultado
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

// Función para manejar la victoria del jugador
function winUser() {
  pointsUser++;
  containerPointsUser.textContent = pointsUser;
  containerWinPoint.textContent = "¡Haz ganado un punto! 🙌";
  message.classList.remove("disable");
  containerWinPoint.classList.remove("disable");
  electionUser.textContent = `Haz utilizado `;
}

// Función para manejar la victoria de la computadora
function winPc() {
  pointsPC++;
  containerPointPC.textContent = pointsPC;
  containerWinPoint.textContent = "¡La computadora acaba de ganar un punto! 😥";
  message.classList.remove("disable");
  containerWinPoint.classList.remove("disable");
}

// Función para manejar empates
function draw() {
  containerWinPoint.textContent = "¡Empate! 👌";
  message.classList.remove("disable");
  containerWinPoint.classList.remove("disable");
}

// Función para reiniciar el juego
function resetGame() {
  location.reload();
}
