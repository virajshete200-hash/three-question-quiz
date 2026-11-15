// The supplied question array is kept unchanged.
const questions = [
  { text: 'Which tag is a heading?', choices: ['h1', 'p', 'div'], answer: 0 },
  { text: 'Which language styles a page?', choices: ['CSS', 'SQL', 'C++'], answer: 0 },
  { text: 'How many days in a week?', choices: ['5', '7', '9'], answer: 1 }
];

let index = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const feedbackEl = document.getElementById('feedback');
const progressEl = document.getElementById('progress');
const nextButton = document.getElementById('next');
const restartButton = document.getElementById('restart');
const scoreEl = document.getElementById('score');

function renderQuestion() {
  const current = questions[index];
  questionEl.textContent = current.text;
  progressEl.textContent = `Question ${index + 1} of ${questions.length}`;
  feedbackEl.textContent = '';
  feedbackEl.className = 'feedback';
  scoreEl.textContent = '';
  answersEl.replaceChildren();
  answered = false;
  nextButton.disabled = true;
  nextButton.textContent = index === questions.length - 1 ? 'Show final score' : 'Next question';

  current.choices.forEach((choice, choiceIndex) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.textContent = choice;
    button.addEventListener('click', () => selectAnswer(choiceIndex));
    answersEl.appendChild(button);
  });
}

function selectAnswer(choiceIndex) {
  // Ignore repeat clicks so one question can only contribute once.
  if (answered) return;
  answered = true;

  const current = questions[index];
  const buttons = answersEl.querySelectorAll('button');
  const isCorrect = choiceIndex === current.answer;

  if (isCorrect) {
    score += 1;
    feedbackEl.textContent = 'Correct!';
    feedbackEl.classList.add('good');
  } else {
    feedbackEl.textContent = `Incorrect. The correct answer is ${current.choices[current.answer]}.`;
    feedbackEl.classList.add('bad');
  }

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === current.answer) button.classList.add('correct');
    if (buttonIndex === choiceIndex && !isCorrect) button.classList.add('incorrect');
  });

  nextButton.disabled = false;
}

function showFinalScore() {
  questionEl.textContent = 'Quiz complete!';
  progressEl.textContent = 'All questions answered';
  answersEl.replaceChildren();
  feedbackEl.textContent = 'You have finished the quiz.';
  feedbackEl.className = 'feedback good';
  scoreEl.textContent = `Your final score: ${score} out of ${questions.length}`;
  nextButton.hidden = true;
  restartButton.hidden = false;
}

nextButton.addEventListener('click', () => {
  // Do not advance until an answer has been selected.
  if (!answered) return;

  if (index < questions.length - 1) {
    index += 1;
    renderQuestion();
  } else {
    showFinalScore();
  }
});

restartButton.addEventListener('click', () => {
  index = 0;
  score = 0;
  answered = false;
  nextButton.hidden = false;
  restartButton.hidden = true;
  renderQuestion();
});

renderQuestion();
