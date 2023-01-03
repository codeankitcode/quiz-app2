let readlineSync = require("readline-sync")
let userName = readlineSync.question("What is your name? ")
console.log("Welcome " + userName + ", and wish you luck as you're going to play a quiz about books and their author")

console.log("Hint - You just have to type either 'a' or 'b'")
let score = 0

function play(question, answer) {
  let userAns = readlineSync.question(question)
  if (userAns == answer) {
    console.log("You're right")
    score++
    console.log("current score:  " + score)
  } else (
    console.log("You're wrong")
  )
  console.log("total score: " + score)
}

let quizQues = [
  {
    question: "Who has written the book 'Three Mistakes Of My Life? Here are your options: (a)Chetan Bhagat, (b)Arundhati Roy ",
    answer: "a"
  },
  {
    question: "Who has written the book 'Sapiens'? Here are your options: (a)O.P Tondon, (b)Yuval Noah Harari ",
    answer: "b"
  }, {
    question: "Who has written the book 'Shoe Dog'? Here are your options: (a)Socrates, (b)Phil Knight ",
    answer: "b"
  },
  {
    question: "Do you know the writer of 'Zero To One'? Here are your options: (a)Peter Thiel, (b)Kunal Shah ",
    answer: "a"
  },
  {
    question: "You might have heard about 'Atomic Habits', tell me the authors name? Here are your options: (a)Dale Carnegie, (b)James Clear ",
    answer: "b"
  }, {
    question: "You definately have read this book 'The Alchemist', who is the author? Here are your options: (a)Paulo Coelho, (b)Adam Grant ",
    answer: "a"
  }
]

for (let i = 0; i < quizQues.length; i++) {
  let render = quizQues[i]
  play(render.question, render.answer)
}

let highScore = [
  {
    name: "Amit",
    score: 6
  }, {
    name: "Utsav",
    score: 5
  }
]
function highScorer() {
  for (let i = 0; i < highScore.length; i++) {
    let render = highScore[i]
    console.log("Previous High Scores: " + render.name + " - " + render.score)
  }
}
highScorer()

console.log("If your score is more than this, please share your screenshot, so that I'll update.")