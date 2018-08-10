


// let questions = document.getElementsByClassName("question");

// let answers = document.getElementsByClassName("answer");

// var questionsLength = questions.length;

let questions = ["Q1", "Q2", "Q3"];

let answers = ["A1", "A2", "A3"];

var randomQuestion = Math.floor((Math.random()*questions.length-1)+1);
console.log(randomQuestion)

function showQuestion(){
   console.log(questions[randomQuestion]) 
};
showQuestion();

// var found = questions.find(function())

// var check = questions.getElementsByClassName("label")
// console.log(check.id)


// if (condition) {
    
// } else {
    
// }

// questions []


