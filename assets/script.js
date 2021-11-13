const quizContainer = $('#quiz');
const resultsContainer = $('#results');
const submitButton = $('#submit');

// displaying quiz functions, sorted in an array
const myQuestions = [
    {
    question: "What does CSS stand for?",
    answers: {
        a: "Constant Secondary Solutions",
        b: "Cascading Style Sheet",
        c: "Clown-nose Standard Spray",
        d: "Casting Style Set-ups"
        },
    correctAnswer: "b",
    },
    {
    question: "What is possible with CSS?",
    answers: {
        a: "Changing font, margins, and borders",
        b: "Adapting screen size based on the device being used",
        c: "Positioning elements such as images on the page",
        d: "All of the above!"
        },
    correctAnswer: "d",
    },
    {
    question: "What is Bootstrap?",
    answers: {
        a: "A large library of images not protected by copyright",
        b: "An agency that protects software developers from theft",
        c: "The world's most opoluar front-end open source toolkit",
        d: "A boss in the video game series Spyro"
        },
    correctAnswer: "c",
    },
    {
    question: "Which of the following is NOT a data type?",
    answers: {
        a: "Boolean",
        b: "Alert",
        c: "String",
        d: "Number"
    },
    correctAnswer: "b",
    }
];

// want to run this function immediately
function buildQuiz() {

}

// this functions runs on click
function showResults() {

}