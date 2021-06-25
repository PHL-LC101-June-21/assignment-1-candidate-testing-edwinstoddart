const input = require('readline-sync');
let candidateName = '';
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = ['', '', '', '', ''];

function askForName() {
  candidateName = input.question('Hello Candidate Q2364, would you please provide your name below:\n')
}

function askQuestion() {
  console.log('Please answer the following questions:');
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question((i+1) + ') ' + questions[i] + '\n');
  }
}

function gradeQuiz(candidateAnswers) {
  console.log(`\nThank you for taking the test, ${candidateName}!`)
  let score = 0;
  for (i = 0; i < candidateAnswers.length; i++) {
    console.log(`${i+1}) ${questions[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}\n`);
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) { score++;
    }
  }
  let grade = (score / correctAnswers.length) * 100;
  console.log(`Your overall score is: ${grade}`);
  if (grade >= 80) {
    console.log('Congratulations! You passed!!')
  } else {
    console.log("I'm sorry, but you've failed.")
  }
  return grade;
}

function runProgram() {
  askForName();
  console.log(`Candidate Q2364 has been set to ${candidateName}...\nHello ${candidateName}!`)
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};