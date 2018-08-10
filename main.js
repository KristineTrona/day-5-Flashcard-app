
const questions  = [
    {
        question: 'What is life?',
        answer: 'to fix all bugs'
    },
    {
        question: '1',
        answer: 'to fix all bugs'
    },
    {
        question: '2',
        answer: 'to fix all bugs'
    },
    {
        question: '3',
        answer: 'to fix all bugs'
    },
]

var randomQuestion = questions[Math.floor((Math.random()*questions.length-1)+1)];
// console.log(randomQuestion)

let question = questions.question

function showQuestion(){
    
    document.write(randomQuestion)
   
    //question.innerHTML = randomQuestion 
};
showQuestion();

// var found = questions.find(function())

// var check = questions.getElementsByClassName("label")
// console.log(check.id)


// if (condition) {
    
// } else {
    
// }

// questions []


