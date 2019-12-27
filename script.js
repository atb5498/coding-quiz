var questions = [
    {
        title: "What tag is used to define a list item in a bulleted list?",
        choices: ["<ul>", "<ui>", "<a>", "<li>"],
        answer: "<ul>"
    },
    {
        title: "What is the name of the property that is used to define the special state of an element?",
        choices: ["Alignment", "Pseudo-class", "Style", "Syntax"],
        answer: "Pseudo-class"
    },
    {
        title: "What tag is used to define an interactive field where users can enter data?",
        choices: ["<input>", "<datalist>", "<enterpoint>", "<dialog>"],
        answer: "<input>"
    },
    {
        title: "CSS stands for ____ Style Sheets.",
        choices: ["Content", "Concept", "Cascading", "Context"],
        answer: "Cascading"
    },
    {
        title: "Which HTML tag is used to define an internal style sheet?",
        choices: ["<script>", "<style>", "<css>", "<meta>"],
        answer: "<style>"
    },
    {
        title: "Inside which HTML element do we put the JavaScript?",
        choices: ["<java>", "<javascript>", "<script>", "<js>"],
        answer: "<script>"
    },
];

var timer = document.getElementById("timer");
var menu = document.getElementById("menu");
var startButton = document.getElementById("start-btn");
var choiceDisplay = document.getElementById("choices");
var question = document.getElementById("question");

var index = 0;
var time = questions.length * 10;
var timerId;

startButton.addEventListener("click", startQuiz);

function startQuiz() {
    //Hides menu
    menu.setAttribute("class", "hide");
    //Displays and starts timer
    timer.textContent = time;
    timerId = setInterval(timeTick, 1000);
    question.removeAttribute("class", "hide");
    choiceDisplay.removeAttribute("class", "hide");
    getQuestion();
}

function getQuestion() {
    var currentQuestion = questions[index].title;
    question.textContent = currentQuestion;
    choiceDisplay.innerHTML = "";

    questions[index].choices.forEach(function (choice, i) {
        // create new button for each choice
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = choice;
        // attach click event listener to each choice
        choiceButton.onclick = choiceSelect;
        // display on the page
        choiceDisplay.appendChild(choiceButton);
    });
}

function choiceSelect() {
    if (this.value !== questions[index].answer) {
        time -= 10;
        timer.textContent = time;
    }

    index++;
    getQuestion();
}

// Updates time
function timeTick() {
    time--;
    timer.textContent = time;
}
