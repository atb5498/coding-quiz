var questions = [
    {
        prompt: "What tag is used to define a list item in a bulleted list?\n(a) <uj>\n(b) <ul>\n(c) <u>\n(d) <li>",
        answer: "<ul>"
    },
    {
        prompt: "What tag defines a division or individual section in an HTML document?\n(a) <img>\n(b) <table>\n(c) <meta>\n(d) <div>",
        answer: "<div>"
    },
    {
        prompt: "What tag is used to render or transform text into an important (bold) version?\n(a) <em>\n(b) <blockquote>\n(c) <a>\n(d) <strong>",
        answer: "<strong>"
    },
    {
        prompt: "What tag is used to define an interactive field where users can enter data?\n(a) <input>\n(b) <datalist>\n(c) <enterpoint>\n(d) <dialog>",
        answer: "<input>"
    },
    {
        prompt: "What is the name of the property that is used to define the special state of an element?\n(a) Alignment\n(b) Pseudo-class\n(c) Style\n(d) Syntax",
        answer: "Pseudo-class"
    },
    {
        prompt: "CSS stands for ____ Style Sheets.\n(a) Content\n(b) Concept\n(c) Cascading\n(d) Context",
        answer: "Cascading"
    },
    {
        prompt: "Where in an HTML document is the correct place to refer to an external style sheet?\n(a) At the end of the document\n(b) In the <head> section\n(c) In the <body> section\n(d) None of the above",
        answer: "In the <head> section"
    },
    {
        prompt: "Which HTML tag is used to define an internal style sheet?\n(a) <script>\n(b) <style>\n(c) <css>\n(d) <meta>",
        answer: "<style>"
    },
    {
        prompt: "Inside which HTML element do we put the JavaScript?\n(a) <java>\n(b) <javascript>\n(c) <script>\n(d) <js>",
        answer: "<script>"
    },
    {
        prompt: "How do you call a function named myFunction?\n(a) myFunction()\n(b) call myFunction()\n(c) myFunction()call\n(d) call function myFunction()",
        answer: "myFunction()"
    },
]

for (var i = 0; i < questions.length; i++) {
    var response = window.prompt(questions[i]);
    if (response === questions[i].answer) {

    } else {

    }
}