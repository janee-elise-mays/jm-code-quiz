var startBtn = document.getElementById('startBtn') 
var timeleft = 75;
var timeleftDisplay = document.getElementById('timer')

function countDown(){
    setInterval(function(){
        if(timeleft <= 0 ) {
            clearInterval(timeleft = 0)
        }
        timeleftDisplay.innerHTML = 'time: '+timeleft; 
        timeleft--;
    }, 1000)
}

startBtn.addEventListener('click',function(){countDown()});


var correctAnswers = ['Start','D', 'A', 'A', 'D', 'B'];
var currentQuestion = 0;

document.getElementById('question-box-' + currentQuestion).style.visibility = 'visible';

function checkAnswer(event) {
    var answer = event.value;

    if (correctAnswers[currentQuestion] == answer) {

    }

    // check answer against correctAnswer
    // if it's correct, you'll add to their score and move onto the next question
    // if they aren't correct, you'll subtract 10 from their time (move onto next)

    document.getElementById('question-box-' + currentQuestion).style.visibility = 'hidden';
    currentQuestion += 1;
    document.getElementById('question-box-' + currentQuestion).style.visibility = 'visible';
}


//  after clicking the start button a timer will start and the first question will appear