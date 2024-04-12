
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
        question: "What should you do to stop the spread of misinformation?",
        options: ["Fact-Check", "Think Critically", "Report", "All of the Above"],
        answer: "All of the Above"
    },

         {
        question: "A friend keeps sharing posts from a website that you know is unreliable. What's the best way to help them?",
        options: ["Call them out and start an argument. You know you are right!", "Tell everyone that your friend is a bad person.", "Suggest checking out fact-checking websites and be patient with them.", "Phone the police."],
        answer: "Suggest checking out fact-checking websites and be patient with them."
    },

];

let questionIndex = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.querySelectorAll(".option");
const nextBtn = document.getElementById("next-button");
const restartButton = document.getElementById('restart-button');
const resultsEl = document.getElementById("results");

function loadQuestion() {
    deselectAnswers(); 

    const currentQuestion = quizData[questionIndex];
    questionEl.innerText = currentQuestion.question;

    // Dynamically adjust number of options
    const optionsContainer = document.getElementById('choices');
    optionsContainer.innerHTML = ''; // Clear existing buttons

    for (let i = 0; i < currentQuestion.options.length; i++) {
        const optionButton = document.createElement('button'); 
        optionButton.classList.add('option');
        optionButton.innerText = currentQuestion.options[i];
        optionsContainer.appendChild(optionButton); 
    }

    // Reattach event listeners since we are regenerating the buttons
    optionsContainer.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', () => checkAnswer(option))
    });
}

function deselectAnswers() {
    optionsEl.forEach(option => option.classList.remove('selected'));
}

function checkAnswer(selectedOption) {
    deselectAnswers(); // Reset styles before applying new ones

    selectedOption.classList.add('selected'); // Mark as selected

    if (selectedOption.innerText === quizData[questionIndex].answer) {
        score++;
        selectedOption.classList.add('correct'); 
    } else {
        selectedOption.classList.add('incorrect'); // Add for wrong answers
    }
    }
     document.querySelectorAll('.option').forEach(option => option.classList.remove('selected'));
  function deselectAnswers() {
    nextBtn.disabled = false; // Enable next button
}

function restartQuiz() {
    questionIndex = 0;
    score = 0;
    resultsEl.innerText = ""; 
    restartButton.style.display = 'none';
    loadQuestion(); 
}

if (nextBtn) {
    loadQuestion();
    deselectAnswers();

    nextBtn.addEventListener('click', () => {
        questionIndex++;
        if (questionIndex < quizData.length) {
            loadQuestion();
            nextBtn.disabled = true;
        } else {
            resultsEl.innerText = `Well done! Your score is ${score}/${quizData.length}`;
            restartButton.style.display = 'block'; // Show restart button
        }
    });

    restartButton.addEventListener('click', restartQuiz);
}



