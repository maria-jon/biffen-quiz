import "./style.css";
import quizQuestions, { IQuestion } from "./questions.mts";

// Variables for quiz and timer
const timerElement = document.getElementById("timer") as HTMLElement;
let timerInterval: number;
let elapsedTime: number = 0;
let isTimerRunning: boolean = false;

// Start quiz button
const startQuizBtn = document.getElementById("startQuizBtn") as HTMLButtonElement;
const endQuizBtn = document.getElementById("endQuizBtn") as HTMLButtonElement;
const playAgainBtn = document.getElementById("playAgainBtn") as HTMLButtonElement;
const feedbackElement = document.getElementById("feedback") as HTMLParagraphElement;

startQuizBtn.addEventListener("click", startQuiz);
endQuizBtn.addEventListener("click", endQuiz);
playAgainBtn.addEventListener("click", playAgain);


const welcomeSection = document.getElementById("welcome") as HTMLElement;
const questionsSection = document.getElementById("questions") as HTMLElement;
const scoreboardSection = document.getElementById("scoreboard") as HTMLElement;
const nextQuestionBtn = document.getElementById("nextQuestionBtn") as HTMLElement;

// Hide welcome page and show the quiz page
function startQuiz() { 

  startTimer();

  welcomeSection.classList.add("hidden");
  questionsSection.classList.remove("hidden");
  //questionsSection.classList.add("flex");
  
  selectedQuestions = selectRandomQuestions();
    currentQuestionIndex = 0;

    displayQuestion();

    nextQuestionBtn.addEventListener("click", handleNextQuestion);
}

// Variabel for questions
let currentQuestionIndex = 0;
let selectedQuestions: IQuestion[] = [];
const usedQuestions: Set<number> = new Set();

// Function for randomize questions
function selectRandomQuestions(): IQuestion[] {
  // If all question is used, reset
  if (usedQuestions.size === quizQuestions.length) {
    usedQuestions.clear();
  }

  const availableQuestions = quizQuestions.filter((q) => !usedQuestions.has(q.id));

  const shuffled = availableQuestions.sort(() => Math.random() - 0.5);
  
  const questions = shuffled.slice(0, 10);
  
  // Add to usedQuestions by id
  questions.forEach((q) => usedQuestions.add(q.id));
  
  return questions;
}

const questionTitle = document.getElementById("questionTitle")!;
const questionElement = document.getElementById("question")!;
const questionExpo = document.getElementById("expo")!;

// Function for display a question
function displayQuestion(): void {
  
  const question = selectedQuestions[currentQuestionIndex];
  questionTitle.textContent = `Fråga nr ${currentQuestionIndex + 1}`;
  questionElement.textContent = `${question.question}`;
  // Disable "Next question"-btn 
  nextQuestionBtn!.setAttribute("disabled", "true");
  if (currentQuestionIndex <= 8) {
    // Show "Next question"-btn
    nextQuestionBtn.hidden = false;
  } else {
    // Hide "Next question"-btn and show "End game"-btn 
    nextQuestionBtn.hidden = true;
    endQuizBtn.hidden = false;
  }
  feedbackElement.textContent = "";
  questionExpo.textContent = "";

  // Show the answer for the question as well
  displayQuizAnswers();
}

// Function for next question
function handleNextQuestion(): void {
  currentQuestionIndex++;
  displayQuestion();
  displayQuizAnswers();
}

// Start over the quiz
function handlePlayAgain(): void {
  nextQuestionBtn.removeAttribute("disabled");
    startQuiz();
}
  
// When the page is loaded
function init() {
    const startQuizButton = document.getElementById("startQuiz");
    const playAgainButton = document.getElementById("playAgain");
  
    // If the buttons exist, add event listener
    if (startQuizButton) {
      startQuizButton.addEventListener("click", startQuiz);
    }
  
    if (playAgainButton) {
      playAgainButton.addEventListener("click", handlePlayAgain);
    }
};

const answersContainer = document.getElementById("answers") as HTMLElement;

// Show the answers for the quiz questions
function displayQuizAnswers() {
  answersContainer.innerHTML = "";

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  currentQuestion.answers.forEach((answer, index) => {
    answersContainer.innerHTML += `
      <label>
        <input type="radio" name="quizAnswer" value="${answer}" id="answer${index}">
        <span>${answer}</span>
      </label>
    `;
  })
 
  const radioButtons = document.querySelectorAll(`input[name="quizAnswer"]`);

  // Handle keyboard for navigation with left & right arrows
  radioButtons.forEach((radioButton, index) => {
    (radioButton as HTMLInputElement).addEventListener("keydown", (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" || e.key === "ArrowRight" || e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();

        let nextIndex = index;

        if (e.key === "ArrowRight" || e.key === "ArrowDown") {
          nextIndex = (index + 1);
        } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
          nextIndex = (index - 1);
        }

        const nextRadioBtn = radioButtons[nextIndex] as HTMLInputElement;
        if (nextRadioBtn) nextRadioBtn.focus();
      }

      // Marks selected answer with Enter or Space
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!(radioButton as HTMLInputElement).checked) {
          (radioButton as HTMLInputElement).checked = true;
          radioButton.dispatchEvent(new Event("change"));
        }
      }
    });
  });

  // Add an event for each radioBtn when pressing it
  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", () => {
      const correctAnswer = currentQuestion.correctAnswer;

      // Resets the markings on all answers and to the default color
      document.querySelectorAll("label").forEach((label) => {
        label.style.color = "initial";
      });

      let isAnswerCorrect = false;

      // Mark which options are correct/incorrect and adds color
      radioButtons.forEach((button) => {
        const answerValue = (button as HTMLInputElement).value;

        if (answerValue === correctAnswer) {
          button.parentElement!.style.color = "#47af51";
          button.parentElement!.innerHTML += `
            <i class="fa fa-check" aria-description="Rätt svar"></i>
            `;
            isAnswerCorrect = true;
        } else {
          button.parentElement!.style.color = "#af4747";
          button.parentElement!.innerHTML += `
            <i class="fa fa-close" aria-description="Fel svar"></i>	
          `;
        }
      });
  

      // Increment points if the answer is correct
      const selectedValue = (radioButton as HTMLInputElement).value;
      if (selectedValue === correctAnswer) {
        points++;
      }
      
      // Show feedback to the user
      if (isAnswerCorrect) {
        feedbackElement.textContent = "Rätt svar!";
        feedbackElement.style.color = "#47af51";
      } else {
        feedbackElement.textContent = "Fel svar!";
        feedbackElement.style.color = "#af4747";
      }
      
      questionExpo.textContent = `${currentQuestion.expo}`;
      
      console.log(`Current Points: ${points}`);
      // Enable next question-btn 
      nextQuestionBtn!.removeAttribute("disabled");

      if (currentQuestionIndex >= 9) {
        endQuizBtn.removeAttribute("disabled");
      }
    });
  });
}

let points: number = 0;

// Function to reset the points to 0
function resetPoints(): void {
  points = 0;
} 

// Timer functions
function startTimer() {
  if (isTimerRunning) 
    return; 
  
  timerInterval = setInterval(() => {
    elapsedTime++;
    timerElement.textContent = `Tid: ${elapsedTime}s`; 
  }, 1000);

  isTimerRunning = true;
}

function stopTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
}

function resetTimer() {
  elapsedTime = 0;
  timerElement.textContent = `Tid: 0s`;
}

// End of the quiz and show results
function endQuiz() {
  stopTimer();

  // Show scoreboard and hide quiz page
  questionsSection.classList.add("hidden");
  scoreboardSection.classList.remove("hidden");
  // scoreboardSection.classList.add("flex");

  const scoreboardSectionContainer = document.getElementById("scoreboardContainer") as HTMLElement;

  scoreboardSectionContainer.innerHTML = "";

  scoreboardSectionContainer.innerHTML += `
    <div>
    <p><span>Poäng:</span> ${points * 100}</p>
    <p>${points} av 10 rätt</p>
    <p><span>Din tid: </span>${elapsedTime} sekunder</p>
    </div>  
  `;

  if (points >= 8) {
    scoreboardSectionContainer.innerHTML += `
      <p>Supersnyggt! Du är en Biff-expert!</p>
    `;
  } else if (points >= 5) {
    scoreboardSectionContainer.innerHTML += `
      <p>Bra, du har helt klart koll på Biffen.</p>
    `;
  } else {
    scoreboardSectionContainer.innerHTML += `
      <p>Känner du ens Biffen...?</p>
    `;
  }

  summariseQuestions();  
}

const summaryList = document.getElementById("summaryList") as HTMLElement;

// Summarise questions 
function summariseQuestions() {
  summaryList.innerHTML += "";

  selectedQuestions.forEach((question) => {
    
    summaryList.innerHTML += `
      <div class="summary-object-container">
        <ul class="summary-object">
          <li class="questions-summary">
            ${question.question}
            <ul class="questions-summary-ul">
              <li class="answers-summary">${question.correctAnswer}</li>
            </ul>
          </li>
        </ul>
        <div class="expo">${question.expo}</span>
      </div>
    `;
  })
}

// Start over the quiz
function playAgain() {
  resetTimer();
  currentQuestionIndex = 0;

  resetPoints();

  // Disable and hide "End game"-btn if playing again
  endQuizBtn.setAttribute("disabled", "true");
  endQuizBtn.hidden = true;

  // Show welcome page and hide scoreboard
  scoreboardSection.classList.add("hidden");
  welcomeSection.classList.remove("hidden");
}

init();


// ----------- DARK MODE -----------
const darkModeBtn = document.getElementById("dark-mode") as HTMLButtonElement;
const darkModeBtnSpan = document.getElementById("dark-mode-span") as HTMLElement;

darkModeBtn.addEventListener("click", darkMode);

function darkMode() {
  document.body.classList.toggle("dark-mode")

  if (darkModeBtnSpan.textContent === `dark_mode`) {
    darkModeBtnSpan.textContent = `light_mode`;
  } else {
    darkModeBtnSpan.textContent = `dark_mode`;
  }
}