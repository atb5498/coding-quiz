var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var menu = document.getElementById("menu")
var answerButtons = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    questionContainer.classList.remove("hide");
    menu.style.display = ("none");
    document.getElementById("question").textContent = questions[0].title;
    for (var i = 0; i < questions[0].length; i++) {
        var btn = document.answerButtons.createElement("button");
    }
}

function showQuestion() {
}

function selectAnswer() {
}

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
        title: "Which is the correct CSS syntax?",
        choices: ["body {color: black;}", "body:color=black;", "{body:color=black;}", "{body;color:black;}>"],
        answer: "body {color: black;}"
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
    {
        title: "How do you call a function named myFunction?",
        choices: ["myFunction()", "call myFunction()", "myFunction()call", "call function myFunction()"],
        answer: "myFunction()"
    },
];
