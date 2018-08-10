
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
        //checkbox.id = "box" + nextTodoId();
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
}

function updateCounters(){
    var totalCount = document.getElementById('total-count');
    var totalQuestions = document.getElementsByClassName("listItem").length;
    totalCount.innerHTML = totalQuestions;
  }
  
  updateCounters();
