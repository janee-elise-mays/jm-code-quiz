var startBtn = document.getElementById('startBtn');
var genBtn = document.getElementById('generate');
var timeleft = 60;
var timeleftDisplay = document.getElementById('timer');
var correctAnswers = ['Start', 'D', 'A', 'A', 'D', 'B'];
var currentQuestion = 0;
var score = 0;
var userInput = document.getElementById('user');
var scoreBtn = document.getElementById('fnlScore');
var SubmitBtn = document.getElementById('submit');


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
    // if it's correct, add to user score and move onto the next question
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

SubmitBtn.onclick = function () {
    let key = userInput.value;
    let value = scoreBtn.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
};

fir (let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);


    genBtn.innerHTML += '${key}; ${value}<br />';

}

