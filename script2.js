var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");
var menu = document.getElementById("menu");
var answerButtons = document.getElementById("answer-buttons");

startButton.addEventListener("click", startGame);

var index = 0;

function startGame() {
    menu.classList.add("hide");
    questionContainer.classList.remove("hide");
    document.getElementById("question").textContent = questions[0].title;
    for (var i = 0; i < questions[index].choices.length; i++) {
        var buttons = document.createElement("button");
        buttons.textContent = questions[index].choices[i];
        answerButtons.appendChild(buttons);
    }
}

answerButtons.addEventListener("click", selectAnswer)

function selectAnswer() {
    index++;
}
