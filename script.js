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
var choice = document.getElementById("choices");
var question = document.getElementById("question");
var index = 0;

startButton.addEventListener("click", startGame);

function startGame() {
    //Hides menu
    menu.setAttribute("class", "hide");
    //Displays current question
    question.removeAttribute("class", "hide");
    for (var i = 0; i < questions.length; i++) {
        var currentQuestion = questions[index].title;
        question.textContent = currentQuestion;
    }

    //Displays current choices
    choice.removeAttribute("class", "hide");
    for (var i = 0; i < 4; i++) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = questions[index].choices[i];
        choice.appendChild(choiceButton);
    }
    index++;
}
