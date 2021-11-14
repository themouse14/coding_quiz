// want to immediately run this function
function buildQuiz() {
    const output = [];
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="question${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }
            output.push(
                `<div class="slide">
                <div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join("")} </div>
                </div>`
        );
        }
    );        
    quizContainer.innerHTML = output.join('');
}



// this functions runs on click
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.answers');
    let numCorrect = 0;
    myQuestions.forEach( (currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if(userAnswer === currentQuestion.correctAnswer){
            numCorrect++; // adds 1 to score
            answerContainers[questionNumber].style.color = 'green'; // adds styling to answers
        } else{
            answerContainers[questionNumber].style.color = 'red';
            //timeleft - 10; not sure what ti put here to take away time for wrong answers
        }
    });
    resultsContainer.innerHTML = `Score: ${numCorrect * 25} out of 100`;
}

function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
    previousButton.style.display = 'none';
    }
    else{
    previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
    nextButton.style.display = 'none';
    submitButton.style.display = 'inline-block';
    }
    else{
    nextButton.style.display = 'inline-block';
    submitButton.style.display = 'none';
    }
}

function showNextSlide() {
    showSlide(currentSlide + 1);
}

function showPreviousSlide() {
    showSlide(currentSlide - 1);
}

function tryAgain() {
    location.reload();
    showSlide(currentSlide = 0);
}

// timer functionvar 
timeleft = 30;
var downloadTimer = setInterval(function(){
    timeleft--;
    document.getElementById("timer").textContent = timeleft;
    if(timeleft <= 0)
        clearInterval(downloadTimer);
    },1000);


const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

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
    correctAnswer: "b"
    },
    {
    question: "What is possible with CSS?",
    answers: {
        a: "Changing font, margins, and borders",
        b: "Adapting screen size based on the device being used",
        c: "Positioning elements such as images on the page",
        d: "All of the above!"
        },
    correctAnswer: "d"
    },
    {
    question: "What is Bootstrap?",
    answers: {
        a: "A large library of images not protected by copyright",
        b: "An agency that protects software developers from theft",
        c: "The world's most popular front-end open source toolkit",
        d: "A boss in the video game series Spyro"
        },
    correctAnswer: "c"
    },
    {
    question: "Which of the following is NOT a data type?",
    answers: {
        a: "Boolean",
        b: "Alert",
        c: "String",
        d: "Number"
    },
    correctAnswer: "b"
    }
]

//run this function
buildQuiz();

  // Pagination
const previousButton = document.getElementById("previous");
const nextButton = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

const tryAgainButton = document.getElementById("try-again");

  // Show the first slide
showSlide(currentSlide);

  // Event listeners
submitButton.addEventListener('click', showResults);
previousButton.addEventListener("click", showPreviousSlide);
nextButton.addEventListener("click", showNextSlide);
tryAgainButton.addEventListener("click", tryAgain);
