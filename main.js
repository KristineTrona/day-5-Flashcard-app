const questions  = [
    {
        question: 'How can you add a comment in a JavaScript?',
        answer: '//This is a comment'
    },
    {
        question: 'How to insert a comment that has more than one line?',
        answer: '/*This comment has more than one line*/'
    },
    {
        question: 'How do you round the number 7.25, to the nearest integer?',
        answer: 'Math.round(7.25)'
    },
    {
        question: 'JavaScript is the same as Java?',
        answer: 'False'
    },
    {
        question: 'Which event occurs when the user clicks on an HTML element? ',
        answer: 'onclick'
    }, {
        question: 'Which operator is used to assign a value to a variable?',
        answer: '='
    }, {
        question: 'Is JavaScript case-sensitive?',
        answer: 'Yes'
    }, {
        question: 'Inside which HTML element do we put the JavaScript?',
        answer: '</script>'
    }, {
        question: 'What is a boolean?',
        answer: 'true or false'
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
    document.getElementById("someid").innerText = showAnswer 
 }

 function submitFlashcard(){
    let inputQuestionField = document.getElementById("inputQuestion")
    let question = inputQuestionField.value

    let inputAnswerField = document.getElementById("inputAnswer")
    let answer = inputAnswerField.value

    questions.push({question, answer})

    callList();
    updateCounters();
    inputQuestionField.value = null;
    inputAnswerField.value = null;
 }
 

   function callList() {
       
    let parentListQuestions = document.getElementById("listQuestions") 
    parentListQuestions.innerHTML = ""

    for (var i = 0; i <= (questions.length- 1); i++){

        let listQuestions = document.createElement("div");


        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.setAttribute("onchange", "toggleDone.bind(this)()")
       
        checkbox.checked = false;
        listQuestions.appendChild(checkbox)
        listQuestions.setAttribute("class", "listItem")
        listQuestions.innerHTML += questions[i].question

        parentListQuestions.appendChild(listQuestions);

    }
}

callList();

  function toggleDone() {
    var checkbox = this;

    // check the checked status of the checkbox
    if (checkbox.checked) {
     // the "completed" class is set on the parent element, the <li>
      checkbox.parentElement.className = "toDelete";
    } else {
      checkbox.parentElement.className = "listItem";
    }
  }

  function cleanUpFlashcards() {
    //var list = document.getElementById("todolist");
    var itemsToDelete = document.getElementsByClassName("toDelete");

// Reverse loop through the done todo items so we can remove them without changing the index of the remaining items when we remove them
    for (var i = itemsToDelete.length; i > 0; i--) {
    listQuestions.removeChild(itemsToDelete[i-1]);
    }
    updateCounters();
}

function updateCounters(){
    var totalCount = document.getElementById('total-count');
    var totalQuestions = document.getElementsByClassName("listItem").length;
    totalCount.innerHTML = totalQuestions;
  }
  
  updateCounters();

function nextQuestion(){
    var otherQuestion  = questions[Math.floor((Math.random()*questions.length-1)+1)];
    //var newFlashcard = document.getElementById('flashcard');

    showQuestion = otherQuestion.question
    showAnswer = otherQuestion.answer

    label.innerHTML = showQuestion;

}
