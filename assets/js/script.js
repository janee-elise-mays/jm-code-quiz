var start_btn = document.querySelector(".start-button");
var ques_box = document.querySelector(".question-box");
var timeCount = ques_box.querySelector(".timer");


// If start button is clicked
start - button.onclick = () =>
    question - box.classlist.add("activeInfo");
    startTimer(75);

let counter;
let timeValue = 75;

let questions = [
    {
        number: 1,
        question: "What does HTML stand for?",
        correctAnswer: "Hyper Text Markup Language"
options: [
            "1. Hyper Text Marketing Language",
            "2. Hyper Text Markup Language",
            "3. Happy Times Meeting Luau",
            "4. Handy Tool Multiple Language"
        ]
    },
    {
        number: 2,
        question: "Which one of these is NOT a coding language",
        correctAnswer: "Dinosaur"
options: [
            "1. CSS",
            "2. JavaScript",
            "3. Python",
            "4. Dinosaur"
        ]
    },
    {
        number: 3,
        question: "What does CSS stand for?",
        correctAnswer: "Cascading Style Sheet"
options: [
            "1. Cascading Style Sheet",
            "2. Country style sausages",
            "3. Computer Styling System",
            "4. Common Security Sheet"
        ]
    },
    {
        number: 4,
        question: "What is a good resource for coding?",
        correctAnswer: "All of the above"
options: [
            "1. developer.mozill.org",
            "2. w3schools.com",
            "3. stackoverflow.com",
            "4. All of the above"
        ]
    },
    {
        number: 5,
        question: "What is CSS used for?",
        correctAnswer: "It provides styling to HTML elements,"
options: [
            "1. It's used to prioritize javascript variables",
            "2. It provides styling to HTML elements",
            "3. It's an independent document that runs a website",
            "4. None of the above"
        ]
    },
];

let que_count = 0;

function showQuestions() {
    const question_box = document.querySelector("question-box");
    const option_list = document.querySelector("option-list");
    let que_tag = "<span>" + questions[index].number + "." + questions[index].question + "</span>";
    let option_tag = 'div class = "option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class ="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class ="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class ="option">' + questions[index].options[3] + '<span></span></div>'
    question_box.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer)
    let userAns = answer.textContent;
    let correctAns = questions[index].correctAnswer;
    if(userAns == correctAns){
        userScore += 1;
        console.log(userScore);
        answer.classlist.add("correct");
        console.log("Answer is Correct");
    }
    else{
        answer.classlist.add("incorrect");
        console.log("Answer is incorrect");
    }
    
    function startTimer(time){
        counter = setInterval(timer, 1000)
        function timer(){
            timeCount.textContent = time;
            time --;
            if(time > 0){
                clearInterval(counter);
                timeCount.textContent = "00";
            }
        }
    }

















// const quizContainer = document.getElementById('quiz');
// const resultsContainer = document.getElementById('results');
// const startButton = document.getElementsByClassName('start-button');
// const submitButton = document.getElementById('submit');

// function startButton(){}
// output.push(
//     ${currentQuestion.question}
//     ${answers.join('')}
// )
// // begin quiz after clicking start button
// startButton.addEventListener('click', beginQuiz)

// function buildQuiz(){}
// // variable to store the HTML output
// const output = [];


// function showResults(){}

// // show quiz right away
// buildQuiz();

// // on submitButton, show results
// submitButton.addEventListener('click', showResults);


// var startButton = document.querySelector("start-button");
// const questionBox = document.querySelector(".question-box");
// const generateBtn = document.querySelector("#generate");
// const enterInitial = document.getElementById("enterInitials");

// var startButton = 10;
// var interval = setInterval(function(){
//     document.querySelector('start-button').innerHTML=count;
//     count--;
//     if (count === 0){
//       clearInterval(interval);
//       document.querySelector('start-button').innerHTML='Done';
//       // or...
//       alert("You're out of time!");
//     }
//   }, 1000);

//   const codingQuestions = [{
// question: "What does HTML stand for?" ,
// answers: {
// // 1. Hyper Text Marketing Language,
// // 2. Hyper Text Markup Language,
// // 3. Happy Times Meeting Luau,
// // 4. Handy Tool Multiple Language
// },
// correctAnswer: "2"
// },
// {
// question: "Which one of these is NOT a coding language" ,
// answers: {
// // 1. CSS,
// // 2. JavaScript,
// // 3. Python,
// // 4. Dinosaur
// },
// correctAnswer: "4"
// },
// {
// question: "What does CSS stand for?" ,
// answers: {
// // 1. Cascading Style Sheet, 
// // 2. Country style sausages,
// // 3. Computer Styling System ,
// // 4. Common Security Sheet 
// },
// correctAnswer: "1"
// },
// {
// question: "What is a good resource for coding?" ,
// answers: {
// // 1. developer.mozill.org,
// // 2. w3schools.com, 
// // 3. stackoverflow.com, 
// // 4. All of the above
// },
//  correctAnswer: "4"
// },
// {
// question: "What is CSS used for?" ,
// answers: {
// // 1. It's used to prioritize javascript variables,
// // 2. It provides styling to HTML elements, 
// // 3. It's an independent document that runs a website,
// // 4. None of the above
// },
// correctAnswer: "2"
// }
// ];