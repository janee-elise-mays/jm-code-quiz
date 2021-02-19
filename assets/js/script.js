var startBtn = document.getElementById('startBtn') 
var timeleft = 75;
var timeleftDisplay = document.getElementById('timer')
var correctAnswers = ['Start','D', 'A', 'A', 'D', 'B'];
var currentQuestion = 0;
var score = 1;

function countDown(){
    setInterval(function(){
        if(timeleft <= 0 ) {
            clearInterval(timeleft = 0)
            document.getElementById('question-box-6').style.visibility = 'visible';
        }
        if(currentQuestion == 6 ) {
            clearInterval(timeleft = 0);
        }
        timeleftDisplay.innerHTML = 'time: '+timeleft; 
        timeleft--;
    }, 1000)
}

startBtn.addEventListener('click',function(){countDown()});


document.getElementById('question-box-' + currentQuestion).style.visibility = 'visible';

function checkAnswer(event) {
    var answer = event.value;

    if (correctAnswers[currentQuestion] != answer && currentQuestion !=0)  {
        timeleft=timeleft-10;
    }

    // check answer against correctAnswer
    // if it's correct, you'll add to their score and move onto the next question
    if (correctAnswers[currentQuestion] == answer && currentQuestion !=0)  {
        score++;
    }

    document.getElementById('question-box-' + currentQuestion).style.visibility = 'hidden';
    currentQuestion += 1;
    document.getElementById('question-box-' + currentQuestion).style.visibility = 'visible';
}
//  function showScore(){
//      document.getElementById('generate').innerHTML = 
//  }
