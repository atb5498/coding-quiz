var startButton = document.getElementById("start-btn");
var questionContainer = document.getElementById("question-container");

var randomQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.classList.add("hide");
    randomQuestions = questions.sort(() => Math.random() - .5)
    questionContainer.classList.remove("hide");
    nextQuestion();
}

function nextQuestion() {

}

function selectAnswer() {

}

var questions = [
    {
        question: "What tag is used to define a list item in a bulleted list?",
        answer: [
            { text: "<ul>", correct: true },
            { text: "<uj>", correct: false },
            { text: "<a>", correct: false },
            { text: "<li>", correct: false },
        ]
    },
    {
        question: "What tag defines a division or individual section in an HTML document?\n(a) <img>\n(b) <table>\n(c) <meta>\n(d) <div>",
        answer: "<div>"
    },
    {
        question: "What tag is used to render or transform text into an important (bold) version?\n(a) <em>\n(b) <blockquote>\n(c) <a>\n(d) <strong>",
        answer: "<strong>"
    },
    {
        question: "What tag is used to define an interactive field where users can enter data?\n(a) <input>\n(b) <datalist>\n(c) <enterpoint>\n(d) <dialog>",
        answer: "<input>"
    },
    {
        question: "What is the name of the property that is used to define the special state of an element?\n(a) Alignment\n(b) Pseudo-class\n(c) Style\n(d) Syntax",
        answer: "Pseudo-class"
    },
    {
        question: "CSS stands for ____ Style Sheets.\n(a) Content\n(b) Concept\n(c) Cascading\n(d) Context",
        answer: "Cascading"
    },
    {
        question: "Where in an HTML document is the correct place to refer to an external style sheet?\n(a) At the end of the document\n(b) In the <head> section\n(c) In the <body> section\n(d) None of the above",
        answer: "In the <head> section"
    },
    {
        question: "Which HTML tag is used to define an internal style sheet?\n(a) <script>\n(b) <style>\n(c) <css>\n(d) <meta>",
        answer: "<style>"
    },
    {
        question: "Inside which HTML element do we put the JavaScript?\n(a) <java>\n(b) <javascript>\n(c) <script>\n(d) <js>",
        answer: "<script>"
    },
    {
        question: "How do you call a function named myFunction?\n(a) myFunction()\n(b) call myFunction()\n(c) myFunction()call\n(d) call function myFunction()",
        answer: "myFunction()"
    },
]
