const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = '';
let questions = ['Who was the first American woman in space? ', 'True or false: 5 kilometer == 5000 meters? ', '(5 + 3)/2 * 10 = ? ', "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 'What is the minimum crew size for the ISS? '];
let correctAnswers = ['Sally Ride', 'true', '40', 'Trajectory', '3'];
let candidateAnswers = ['', '', '', '', ''];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Hello Candidate Q2364, would you please provide your name below:\n')
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  console.log('Please answer the following questions:');
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(`${i+1}) ${questions[i]}\nYour Answer: `);
    console.log(`Correct Answer: ${correctAnswers[i]}`)
  }

}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly //
  let score = 0;
  for (i = 0; i < candidateAnswers.length; i++) {
    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      score++;
    }
  }
  let grade = (score / correctAnswers.length) * 100;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Q2364 has been set to ${candidateName}...\nHello ${candidateName}!`)
  askQuestion();
  grade = gradeQuiz(this.candidateAnswers);
  console.log(`Thank you for taking the test, ${candidateName}! Your score is: ${grade}`)
  if (grade >= 80) {
    console.log("Congratulations! You've passed!!");
  } else {
    console.log("I'm sorry, you've failed...");
  }
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
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