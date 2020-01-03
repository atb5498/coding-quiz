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
var startButton = document.getElementById("start-btn");
var timer = document.getElementById("timer");
var question = document.getElementById("question");
var choiceDisplay = document.getElementById("choices");
var endMenu = document.getElementById("end-menu");
var outro = document.getElementById("outro");
var submitButton = document.getElementById("button-addon2");
var initialsInput = document.getElementById("initials");
var highscoresList = document.getElementById("highscores-list")

var index = 0;
var time = questions.length * 10;
var timerId;

function startQuiz() {
    //Hides start menu
    startMenu.setAttribute("class", "hide");
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

    questions[index].choices.forEach(function (choice) {
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

    if (time < 0) {
        time = 0;
        timer.textContent = time;
    }

    index++;

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

    if (time <= 0) {
        quizEnd();
    }
}

function quizEnd() {
    clearInterval(timerId);
    question.setAttribute("class", "hide");
    choiceDisplay.setAttribute("class", "hide");
    endMenu.removeAttribute("class", "hide");
    outro.textContent = "Your final score is " + time;
}

function saveScore() {
    var initials = initialsInput.value.trim();

    if (initials !== "") {
        // get saved scores from localstorage, or if not any, set to empty array
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

        // format new score object for current user
        var newScore = {
            score: time,
            initials: initials
        };

        // save to localstorage
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
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];

    // sort highscores by score property in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;
    });

    highscores.forEach(function (score) {
        // create li tag for each high score
        var liTag = document.createElement("li");
        liTag.textContent = score.initials + " - " + score.score;

        // display on page
        var olEl = document.getElementById("highscores");
        olEl.appendChild(liTag);
    });
}

function clearHighscores() {
    window.localStorage.removeItem("highscores");
    window.location.reload();
}