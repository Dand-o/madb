const quizData = [
    {
        question: "What percentage of 16-24 years olds use social media for news?",
        options: ["61%", "83%", "36%", "92%"],
        answer: "83%"
    },

     {
        question: "Misinformation and disinformation are the same thing.",
        options: ["True", "False"],
        answer: "False"
    },    

     {
        question: "You see a shocking headline about a celebrity scandal. It makes you really angry. What's the best thing to do?",
        options: ["Share it immediately so your friends can be warned too.", "Check if reliable news sources are reporting the same story.", "Write an angry comment on the post", "Make a post talking about the article"],
        answer: "Check if reliable news sources are reporting the same story."
    },

     {
        question: "Which of these website addresses looks MOST suspicious?",
        options: ["www.bbc.com ", "www.national-health-institute.info", "www.mayoclinic.org", "www.cdc.gov"],
        answer: "www.national-health-institute.info"
    },

     {
        question: "A friend shares an article claiming that a new scientific study has found a miracle cure for a common disease.  What makes you doubt this might be true?",
        options: ["The article is written in an informal style.", "The headline uses all capital letters and exclamation points.", "Lots of people have shared the post already.", "The article lists the names of the scientists who discovered it."],
        answer: "The headline uses all capital letters and exclamation points."
    },

     {
        question: "How can you tell a social media profile might NOT be a real person?",
        options: ["They have a funny username and weird profile picture.", "They write long, thoughtful comments on news articles.", "They share photos of their friends and family.", "They only post a few times each month."],
        answer: "They have a funny username and weird profile picture."
    },

     {
        question: "You see a meme with a funny picture that makes a celebrity look really silly. What should you do before sharing it?",
        options: ["Think about whether it's meant to be taken seriously or as a joke.", "Make sure the meme doesn't use any hurtful language.", "Check if anyone has already debunked it as a fake.", "All of the above."],
        answer: "All of the above."
    },

];

let questionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-button");
const resultsEl = document.getElementById("results");

loadQuestion();

function loadQuestion() {
    deselectAnswers(); // Reset previous selection

    const currentQuestion = quizData[questionIndex];
    questionEl.innerText = currentQuestion.question;

    for (let i = 0; i < optionsEl.length; i++) {
        optionsEl[i].innerText = currentQuestion.options[i];
}
}

function deselectAnswers() {
    optionsEl.forEach(option => option.classList.remove('selected'));
}

function checkAnswer(selectedOption) {
    if (selectedOption.innerText === quizData[questionIndex].answer) {
        score++;
        selectedOption.classList.add('correct');
    } else {
        selectedOption.classList.add('incorrect');
    }
    nextBtn.disabled = false; // Enable next button after answering
}

nextBtn.addEventListener('click', () => {
    questionIndex++;
    if (questionIndex < quizData.length) {
        loadQuestion();
        nextBtn.disabled = true; // Disable during question display
    } else {
        resultsEl.innerText = `Quiz Over! Your score is ${score}/${quizData.length}`;
    }
});

optionsEl.forEach(option => option.addEventListener('click', () => {
    checkAnswer(option);
}));
