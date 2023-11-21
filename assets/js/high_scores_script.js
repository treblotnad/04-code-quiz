var clearButton = document.querySelector("#clearBtn");

clearButton.addEventListener("click", function (e) {
  localStorage.clear();
  renderScores();
});

//need function to display all high scores
//need to sort high scores when displaying

function renderScores() {
  var scoreArray = [];
  var scoreUl = document.querySelector("#scores");
  scoreUl.innerHTML = "";

  for (i = 0; i < localStorage.length; i++) {
    scoreArray[i] = JSON.parse(localStorage.getItem(i));
  }
  var sortedScoreArray = scoreArray.sort(compareScore);

  for (i = 0; i < localStorage.length; i++) {
    var scoreLi = document.createElement("li");
    scoreLi.textContent =
      i +
      1 +
      ". " +
      sortedScoreArray[i].wInitials +
      " - " +
      sortedScoreArray[i].wScore;
    scoreUl.appendChild(scoreLi);
  }
}

function compareScore(a, b) {
  var score1 = a.wScore;
  var score2 = b.wScore;

  let compare = 0;
  if (score1 < score2) {
    compare = 1;
  } else if (score1 > score2) {
    compare = -1;
  }
  return compare;
}

renderScores();
