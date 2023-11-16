var startButton = document.querySelector('#start');
var mainTitle = document.querySelector('#mainTitle');
var timerEl = document.querySelector('#timer');
var mainP = document.querySelector('#mainP');
var main = document.querySelector('#main');
var timeAmt = 75;
var questionNum = 0;
var questions = ["Commonly used data types DO NOT include:"];
var answers = [["1. strings","2. booleans","3. alerts","4. numbers"]];
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
answer3.setAttribute("status", "correct");
answer4.setAttribute("status", "incorrect");


var answerBox = [answer1, answer2, answer3, answer4];



startButton.addEventListener('click',function(){
    mainTitle.textContent='Working?';
    countdown(timeAmt);
    startButton.setAttribute("style","display: none");
    mainP.textContent="";
    main.setAttribute("style","align-items: start");
    quizStart();

}
)

function countdown(timeAmt){
    timerEl.textContent = 'Time Remaining: ' + timeAmt;
    var timeInterval = setInterval(function(){
        timeAmt--;
        timerEl.textContent = 'Time Remaining: ' + timeAmt;

        if(timeAmt===0){
            timerEl.textContent = 'Game Over!'
            clearInterval(timeInterval);
            mainTitle.textContent ="";
            answerBox[0]=setAttribute("style","display:none");
            answerBox[1]=setAttribute("style","display:none");
            answerBox[2]=setAttribute("style","display:none");
            answerBox[3]=setAttribute("style","display:none");
        }
    },1000)
}


function quizStart(){
    mainTitle.textContent = questions[questionNum]; 
    console.log(answerBox);
    for (let i=0;i<answerBox.length;i++){
        answerBox[i].textContent = answers[questionNum][i];
        main.appendChild(answerBox[i]);
    }
}

main.addEventListener('click',function(event){
    var e = event.target;
    var clickTime = timeAmt;
    var correctBox = e.getAttribute("status");
    if (correctBox== 'correct'){
        console.log("correct");
    } else {
        console.log("incorrect");
        timeAmt = clickTime - 10 ;
        console.log(timeAmt);
        
    }
    questionNum++;
    //quizStart();
}
)

