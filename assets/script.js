const quizContainer = $('#quiz');
const resultsContainer = $('#results');
const submitButton = $('#submit');

// storing quiz questions, sorted in an array
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

// want to immediately run this function
function buildQuiz() {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name='question${questionNumber}' value='${letter}'></input>
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="question"> ${currentQuestion.question}</div>
                <div class="answers"> ${answers.join('')}</div>`
            );
        }
    );    
    quizContainer.innerHTML = output.join('');
}

// this functions runs on click
function showResults() {

}


buildQuiz();

submitButton.addEventListener('click', showResults);