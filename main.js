
const questions  = [
    {
        question: 'What is life?',
        answer: 'beautiful'
    },
    {
        question: '1',
        answer: 'bananas'
    },
    {
        question: '2',
        answer: 'apples'
    },
    {
        question: '3',
        answer: 'mangos'
    },
]

var randomQuestion = questions[Math.floor((Math.random()*questions.length-1)+1)];

let question = randomQuestion.question
let answer = randomQuestion.answer


let label = document.createElement("label");
label.setAttribute("id", "someid")
label.innerHTML = question;

let parent = document.getElementsByClassName("flashcard")[0];
parent.appendChild(label);

function pressAnswer(){

document.getElementById("someid").innerHTML = answer 
    
 }




// var found = questions.find(function())

// var check = questions.getElementsByClassName("label")
// console.log(check.id)


// if (condition) {
    
// } else {
    
// }

// questions []


