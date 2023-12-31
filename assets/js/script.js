//var declarations
var startButton = document.querySelector("#start");
var mainTitle = document.querySelector("#mainTitle");
var timerEl = document.querySelector("#timer");
var mainP = document.querySelector("#mainP");
var main = document.querySelector("#main");
var textSection = document.querySelector("#textSection");
var timeAmt = 75;
var questionNum = 0;
var questions = [
  "Commonly used data types DO NOT include:",
  "The condition in an if/else statement is enclosed within ____.",
  "Arrays in JavaScript can be used to Store ____.",
  "String Values must be enclosed within ____ when being assigned to variable.",
  "A very useful tool used during development and debugging for printing content to the debugger is:",
];
var answers = [
  ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
  ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
  [
    "1. numbers and strings",
    "2. other arrays",
    "3. booleans",
    "4. all of the above",
  ],
  ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
  ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
];
var answerKey = [2, 1, 3, 2, 3];
var answer1 = document.createElement("button");
var answer2 = document.createElement("button");
var answer3 = document.createElement("button");
var answer4 = document.createElement("button");
answer1.setAttribute("class", "btn");
answer2.setAttribute("class", "btn");
answer3.setAttribute("class", "btn");
answer4.setAttribute("class", "btn");
answer1.setAttribute("id", "btn1");
answer2.setAttribute("id", "btn2");
answer3.setAttribute("id", "btn3");
answer4.setAttribute("id", "btn4");
answer1.setAttribute("status", "incorrect");
answer2.setAttribute("status", "incorrect");
answer3.setAttribute("status", "incorrect");
answer4.setAttribute("status", "incorrect");
var isCorrect = document.createElement("p");
isCorrect.setAttribute("style", "display:none");

var isDone = 0;
var answerBox = [answer1, answer2, answer3, answer4];
var initialBox = document.createElement("input");
initialBox.setAttribute("type", "text");
initialBox.setAttribute("placeholder", "Your initials here!");
initialBox.setAttribute("id", "initialBox");
var score = 0;
var submit = document.createElement("button");
submit.setAttribute("id", "submit");
submit.textContent = "Submit!";
var timeOut = "";

//functions and event listeners
startButton.addEventListener("click", function (event) {
  event.preventDefault();
  countdown();
  startButton.setAttribute("style", "display: none");
  mainP.textContent = "";
  main.setAttribute("style", "align-items: start");
  quizStart(answerKey[questionNum]);
});

function countdown() {
  timerEl.textContent = "Time Remaining: " + timeAmt;
  var timeInterval = setInterval(function () {
    timeAmt--;
    timerEl.textContent = "Time Remaining: " + timeAmt;

    if (timeAmt <= 0) {
      timerEl.textContent = "Game Over!";
      clearInterval(timeInterval);
      mainTitle.textContent = "";
      answerBox[0].setAttribute("style", "display:none");
      answerBox[1].setAttribute("style", "display:none");
      answerBox[2].setAttribute("style", "display:none");
      answerBox[3].setAttribute("style", "display:none");
    }
    if (isDone) {
      clearInterval(timeInterval);
      mainTitle.textContent = "All Done!";
      mainP.textContent = "Your final score is " + score;
      timerEl.textContent = "Time Remaining: " + score;
      answerBox[0].setAttribute("style", "display:none");
      answerBox[1].setAttribute("style", "display:none");
      answerBox[2].setAttribute("style", "display:none");
      answerBox[3].setAttribute("style", "display:none");
      textSection.appendChild(initialBox);
      textSection.appendChild(submit);
    }
  }, 1000);
}

function quizStart(correctQuestionNum) {
  mainTitle.textContent = questions[questionNum];
  for (let i = 0; i < answerBox.length; i++) {
    answerBox[i].textContent = answers[questionNum][i];
    main.appendChild(answerBox[i]);
  }
  answerBox[correctQuestionNum].setAttribute("status", "correct");
  main.appendChild(isCorrect);
}
function quizUpdate(correctQuestionNum) {
  mainTitle.textContent = questions[questionNum];
  for (let i = 0; i < answerBox.length; i++) {
    answerBox[i].textContent = answers[questionNum][i];
    answerBox[i].setAttribute("status", "incorrect");
  }
  answerBox[correctQuestionNum].setAttribute("status", "correct");
}

main.addEventListener("click", function (event) {
  event.preventDefault();
  clearTimeout(timeOut);
  var e = event.target;
  if (score > 0) return;

  if (e.getAttribute("class") == "btn") {
    var clickTime = timeAmt;
    var clickedBoxStatus = e.getAttribute("status");

    if (clickedBoxStatus == "incorrect") {
      timeAmt = clickTime - 10;
    }
    if (questionNum < questions.length - 1) {
      questionNum++;
      quizUpdate(answerKey[questionNum]);
    } else {
      isDone = 1;
      score = clickTime;
    }

    isCorrect.textContent = clickedBoxStatus;
    isCorrect.setAttribute("style", "display:block");
    timeOut = setTimeout(function () {
      clearMainP();
    }, 750);
  }
});

function clearMainP() {
  isCorrect.textContent = "";
  isCorrect.setAttribute("style", "display:none");
}

submit.addEventListener("click", function (e) {
  e.preventDefault();
  var inputInitials = initialBox.value;

  if (inputInitials.length < 3 || inputInitials.length > 3) {
    mainTitle.textContent = "Initials must be of length 3!";
    return;
  }
  mainTitle.textContent = "Score has been saved!";
  saveScore(inputInitials);
  textSection.setAttribute("style", "display:none");
});

function saveScore(inputInitials) {
  var winnerScore = {
    wInitials: inputInitials,
    wScore: score,
  };
  var scoreIndex = localStorage.length;
  localStorage.setItem(scoreIndex, JSON.stringify(winnerScore));
}
