var readlineSync = require("readline-sync");
var userName = readlineSync.question("What is your name?");
console.log("Welcome " + userName + " to DO YOU KNOW Gurman?");
var score = 0;
function questions(question, answer) {
    var userAnswer = readlineSync.question(question);
    if (userAnswer === answer) {
        console.log("Right!");
        score = score + 1;
    }
    else {
        console.log("Wrong!");
        score = score - 1;
    }
    console.log("Score: ", score);
}

var ques = [
    quesOne = {
        question: "What is my nickname?",
        answer: "shaan"
    },
    quesTwo = {
        question: "What is my age?",
        answer: "24"
    },
    quesThree = {
        question: "What is my favourite color?",
        answer: "black"
    },
    quesFour = {
        question: "What is my favourite food?",
        answer: "chicken"
    },
    quesFive = {
        question: "Which city I live?",
        answer: "jammu"
    }
]

for (i = 0; i < ques.length; i++) {
    var q = ques[i];
    questions(q.question, q.answer);
}

console.log('Your final score: ' + score);

var highScores = [
    {
        name: "shaan",
        score: 5
    },
    {
        name: "king",
        score: 4
    }
]

console.log("Check out the high scores, if you should there, please ping me!,I'll update it!");
for (i = 0; i < highScores.length; i++) {
    console.log(highScores[i].name + ":" + highScores[i].score);
}
