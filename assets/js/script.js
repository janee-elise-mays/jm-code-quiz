var startBtn = document.getElementById('startBtn');
var genBtn = document.getElementById('generate')
var timeleft = 60;
var timeleftDisplay = document.getElementById('timer');
var correctAnswers = ['Start', 'D', 'A', 'A', 'D', 'B'];
var currentQuestion = 0;
var score = 0;
var initialsInput = document.getElementById('enterInitials');
var scoreBtn = document.getElementById('fnlScore');
var user = document.getElementById('user');



function countDown() {
    setInterval(function () {
        if (timeleft <= 0) {
            clearInterval(timeleft = 0)
            document.getElementById('question-box-6').style.visibility = 'visible';
        }
        if (currentQuestion == 6) {
            clearInterval(timeleft = 0);
        }
        timeleftDisplay.innerHTML = 'time: ' + timeleft;
        timeleft--;
    }, 1000)
}

startBtn.addEventListener('click', function () { countDown() });


document.getElementById('question-box-' + currentQuestion).style.visibility = 'visible';

function checkAnswer(event) {
    var answer = event.value;

    if (correctAnswers[currentQuestion] != answer && currentQuestion != 0) {
        timeleft = timeleft - 10;
    }

    // check answer against correctAnswer
    // if it's correct, you'll add to their score and move onto the next question
    if (correctAnswers[currentQuestion] == answer && currentQuestion != 0) {
        score++;
    }

    document.getElementById('question-box-' + currentQuestion).style.visibility = 'hidden';
    currentQuestion += 1;
    document.getElementById('question-box-' + currentQuestion).style.visibility = 'visible';
}
function showScore() {
    document.getElementById('fnlScore').innerHTML = score;
}
scoreBtn.addEventListener('click', function () { showScore() });

let enterInitials = user.value;
localStorage.setItem('user', )

// genBtn.addEventListener('click', function(event) {
//     event.preventDefault();

//     let enterInitials = user.value;
//     let fnlScore = score;
//     console.log(enterInitials);
//     console.log(fnlScore);
// }
