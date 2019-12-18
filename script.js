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

var startButton = document.getElementById("start-btn");
var scoresButton = document.getElementById("score-btn");
var optionButton = document.getElementById("options");
var activeQuestion;
var index = 0;

startButton.addEventListener("click", startGame);

function startGame() {
    //Hides start and scores buttons
    startButton.classList.add("hide");
    scoresButton.classList.add("hide");
    optionButton.classList.remove("hide");
    question.classList.remove("hide");
    //Displays question and choices
    activeQuestion = questions[index].title;
    $("#question").text(activeQuestion);
    for (var i = 0; i < questions[index].choices.length; i++) {
        var optionsBtn = $("<button>");
        optionsBtn.text(questions[index].choices[i]);
        $("#options").append(optionsBtn);
    }
    index++;
}

// function answerTrue() {
//     if (activeQuestion.choices === answer) {
//         alert("YOU GOT IT RIGHT!");
//     } else {
//         alert("ACTUALLY THAT WAS FALSE");
//     }
//     index++;
//     startGame();
// }

// function answerFalse() {
//     if (activeQuestion.a === "t") {
//         alert("ACTUALLY THAT WAS TRUE");
//     } else {
//         alert("YOU GOT IT RIGHT");
//     }
//     index++;
//     startGame();
// }
// $("#true").click(function (event) {
//     answerTrue();
// })
// $("#false").click(function (event) {
//     answerFalse();
// })
