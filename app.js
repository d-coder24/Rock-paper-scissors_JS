let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//generate computer choice
const genCompchoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};

//drawgame
const drawGame = () => {
  msg.innerText = "Game was Draw! Play Again";
  msg.style.backgroundColor = "rgb(63, 115, 226)";
};
//show winner
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You Won!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You Lost :(  ${userChoice} beats your ${compChoice}`;
    msg.style.backgroundColor = "red";
  }
};
//userChoice
const playGame = (userChoice) => {
  //compChoice
  const compChoice = genCompchoice();

  if (userChoice === compChoice) {
    //Draw GAme
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissor
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
