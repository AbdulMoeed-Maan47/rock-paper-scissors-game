const choices = document.querySelectorAll(".choice");
const userScore = document.querySelector("#user-score");
const compScore = document.querySelector("#comp-score");
const msg = document.querySelector("#msg");

let uScore = 0;
let cScore = 0;

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    const compChoice = getCompChoice();
    compareChoices(userChoice, compChoice);
  });
});

const getCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  let randomIdx = Math.floor(Math.random() * 3);
  return options[randomIdx];
};

const drawGame = () => {
  msg.innerText = "It was a Draw";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    uScore++;
    userScore.innerText = uScore;
    msg.innerText = `You won! ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "#008000";
  } else {
    cScore++;
    compScore.innerText = cScore;
    msg.innerText = `You lost. ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "#ff0000";
  }
};

const compareChoices = (userChoice, compChoice) => {
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = null;
    if (userChoice === "rock") {
      userWin = compChoice === "scissors" ? true : false;
    } else if (userChoice === "paper") {
      userWin = compChoice === "rock" ? true : false;
    } else if (userChoice === "scissors") {
      userWin = compChoice === "paper" ? true : false;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
