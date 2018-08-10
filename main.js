
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

let showQuestion = randomQuestion.question
let showAnswer = randomQuestion.answer


let label = document.createElement("label");
label.setAttribute("id", "someid")
label.innerHTML = showQuestion;
let parent = document.getElementsByClassName("flashcard")[0];
parent.appendChild(label);



function pressAnswer(){
    document.getElementById("someid").innerHTML = showAnswer 
 }



 function submitFlashcard(){
    let inputQuestionField = document.getElementById("inputQuestion")
    let question = inputQuestionField.value

    let inputAnswerField = document.getElementById("inputAnswer")
    let answer = inputAnswerField.value

    questions.push({question, answer})
    callList();


 }


   function callList() {
       
    let parentListQuestions = document.getElementById("listQuestions") 
    parentListQuestions.innerHTML = ""

    for (var i = 0; i <= (questions.length- 1); i++){


        let listQuestions = document.createElement("li");
        listQuestions.innerHTML += questions[i].question

        // document.write(questions[i].question)

        parentListQuestions.appendChild(listQuestions);

    }
}

callList();





// var found = questions.find(function())

// var check = questions.getElementsByClassName("label")
// console.log(check.id)


// if (condition) {
    
// } else {
    
// }

// questions []


