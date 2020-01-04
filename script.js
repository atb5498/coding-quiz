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
        choices: ["<java>", "<javascript>", "<js>", "<script>"],
        answer: "<script>"
    },
];

var startMenu = document.getElementById("start-menu");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var choicesEl = document.getElementById("choices");
var endMenu = document.getElementById("end-menu");
var finalScore = document.getElementById("final-score");
var initialsEl = document.getElementById("initials");
var highscoresList = document.getElementById("highscores-list");

var index = 0;
var time = questions.length * 10;
var timerId;

function startQuiz() {
    startMenu.setAttribute("class", "hide");
    // Displays and starts timer
    timer.textContent = time;
    timerId = setInterval(timeTick, 1000);

    question.removeAttribute("class", "hide");
    choicesEl.removeAttribute("class", "hide");

    getQuestion();
}

function getQuestion() {
    // Gets and displays current question
    var currentQuestion = questions[index].title;
    question.textContent = currentQuestion;
    // Clears choices from previous question
    choicesEl.innerHTML = "";

    questions[index].choices.forEach(function (choice) {
        // Creates new button for each choice
        var choiceButton = document.createElement("button");
        choiceButton.setAttribute("class", "choice");
        choiceButton.setAttribute("value", choice);
        choiceButton.textContent = choice;
        // Displays choices
        choicesEl.appendChild(choiceButton);
        // Attaches click event listener to each choice
        choiceButton.onclick = choiceSelect;
    });
}

function choiceSelect() {
    // Decreases timer by 10 if selected choice is incorrect
    if (this.value !== questions[index].answer) {
        time -= 10;
        timer.textContent = time;
    }

    // Ensures timer does not fall below 0
    if (time < 0) {
        time = 0;
        timer.textContent = time;
    }

    index++;

    // Ends quiz once all questions have been answered
    if (index === questions.length) {
        quizEnd();
    } else {
        getQuestion();
    }
}

// Updates time
function timeTick() {
    time--;
    timer.textContent = time;

    // Ends quiz if timer reaches 0
    if (time <= 0) {
        quizEnd();
    }
}

function quizEnd() {
    // Stops timer
    clearInterval(timerId);

    question.setAttribute("class", "hide");
    choicesEl.setAttribute("class", "hide");
    endMenu.removeAttribute("class", "hide");
    // Displays final score
    finalScore.textContent = "Your final score is " + time;
}

function saveScore() {
    var initials = initialsEl.value.trim();

    if (initials !== "") {
        // Gets saved scores from localstorage. If none, sets to empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        // Formats new score object for current user
        var newScore = {
            score: time,
            initials: initials
        };

        // Saves to localstorage
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));

        printHighscores();
    }
}

function printHighscores() {
    startMenu.setAttribute("class", "hide");
    timer.setAttribute("class", "hide");
    endMenu.setAttribute("class", "hide");
    highscoresList.removeAttribute("class", "hide");
    // Gets saved scores from localstorage. If none, sets to empty array
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // Sorts highscores by score property in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
        // Creates li tag for each highscore
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        // Displays highscores
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}

// Clears local storage and returns page to start menu
function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}
