// Vocabulary Data
const words = [
  {word: "Hola", meaning: "Hello"},
  {word: "Gracias", meaning: "Thank you"},
  {word: "Adiós", meaning: "Goodbye"}
];

// DAILY WORD
if (document.getElementById("dailyWord")) {
  const today = new Date().getDate() % words.length;
  document.getElementById("dailyWord").innerText =
    words[today].word + " = " + words[today].meaning;
}

// VOCAB LIST
if (document.getElementById("vocabList")) {
  let list = "";
  words.forEach(w => {
    list += <p>${w.word} = ${w.meaning}</p>;
  });
  document.getElementById("vocabList").innerHTML = list;
}

// FLASHCARDS
let flashIndex = 0;
function nextFlashcard() {
  const card = words[flashIndex];
  document.getElementById("flashcard").innerText =
    card.word + " = " + card.meaning;
  flashIndex = (flashIndex + 1) % words.length;
}

// QUIZ
let score = localStorage.getItem("score") || 0;

const quiz = {
  question: "What does 'Hola' mean?",
  correct: "A"
};

if (document.getElementById("question")) {
  document.getElementById("question").innerText = quiz.question;
}

function answer(choice) {
  if (choice === quiz.correct) {
    document.getElementById("result").innerText = "Correct!";
    score++;
    localStorage.setItem("score", score);
  } else {
    document.getElementById("result").innerText = "Wrong!";
  }
}

// PROGRESS
if (document.getElementById("score")) {
  document.getElementById("score").innerText = "Score: " + score;
      }
