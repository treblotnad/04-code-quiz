var startButton = document.querySelector('#start');
var mainTitle = document.querySelector('#mainTitle');
var timerEl = document.querySelector('#timer');
var mainP = document.querySelector('#mainP');
var main = document.querySelector('#main');
var timeAmt = 75;
var questionNum = 0;
var questions = ["Commonly used data types DO NOT include:","The condition in an if/else statement is enclosed within ____."];
var answers = [["1. strings","2. booleans","3. alerts","4. numbers"],["1. quotes","2. curly brackets","3. parentheses","4. square brackets"]];
var answerKey=[2,1]
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

var score = 0;
var answerBox = [answer1, answer2, answer3, answer4];



startButton.addEventListener('click',function(event){
    event.preventDefault();
    countdown();
    startButton.setAttribute("style","display: none");
    mainP.textContent="";
    main.setAttribute("style","align-items: start");
    quizStart(answerKey[questionNum]);

}
)

function countdown(){
    timerEl.textContent = 'Time Remaining: ' + timeAmt;
    var timeInterval = setInterval(function(){
        timeAmt--;
        timerEl.textContent = 'Time Remaining: ' + timeAmt;

        if(timeAmt<=0){
            timerEl.textContent = 'Game Over!'
            clearInterval(timeInterval);
            mainTitle.textContent ="";
            answerBox[0].setAttribute("style","display:none");
            answerBox[1].setAttribute("style","display:none");
            answerBox[2].setAttribute("style","display:none");
            answerBox[3].setAttribute("style","display:none");
        }
    },1000)
}


function quizStart(correctQuestionNum){
    mainTitle.textContent = questions[questionNum]; 
    for (let i=0;i<answerBox.length;i++){
        answerBox[i].textContent = answers[questionNum][i];
        main.appendChild(answerBox[i]);
    }
    answerBox[correctQuestionNum].setAttribute("status", "correct");
}
function quizUpdate(correctQuestionNum){
    mainTitle.textContent = questions[questionNum]; 
    for (let i=0;i<answerBox.length;i++){
        answerBox[i].textContent = answers[questionNum][i];
    }
    answerBox[correctQuestionNum].setAttribute("status", "correct");
}




main.addEventListener('click', function(event){
    event.preventDefault();
    var e = event.target;
    if((e.getAttribute("class")=="btn" )){
        var clickTime = timeAmt;
        var clickedBoxStatus = e.getAttribute("status");
        if (clickedBoxStatus == 'incorrect'){
            timeAmt = clickTime - 10 ;
        }
        if (questionNum<questions.length-1){
        questionNum++;
        quizUpdate(answerKey[questionNum]);
        } else {
        score = clickTime;
        console.log(score)
        }

        mainP.textContent = ""
    }
    }
)

