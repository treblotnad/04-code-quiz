var clearButton = document.querySelector("#clearBtn");

clearButton.addEventListener("click", function (e) {
  e.preventDefault();
  localStorage.clear();
  renderScores();
});

//need function to display all high scores
//need to sort high scores when displaying

function renderScores() {
  var scoreArray = [];
  var scoreUl = document.querySelector("#scores");
  var scoreLi = document.createElement("li");
  
  for (i = 0; i < localStorage.length; i++) {
    var scoreLi = document.createElement("li");
    scoreArray[i] = JSON.parse(localStorage.getItem(i));
    scoreLi.textContent = (i+1) + ". " + scoreArray[i].wInitials + " - " +scoreArray[i].wScore;
    scoreUl.appendChild(scoreLi);
  }
  console.log(localStorage.length)

}

renderScores();
