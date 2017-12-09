// Require the 'inquirer' package
var inquirer = require('inquirer');

// Import the flash cards constructor implementations
var flashCards = require('./flashCards.js');
// Import the full list of questions
var questions = require('./questions.js').questions;

// Variable that holds the cloze-deleted questions list
var closeQuestions = [];

// Populate the cloze-deleted questions list
for (var i = 0; i < questions.length; i++) {
	var q = new flashCards.ClozeCard(questions[i].full, questions[i].cloze);
	closeQuestions.push(q);
}

// What question the user is currently on
var currentQuestion = 0;
// How many questions the user has gotten right
var answerRight = 0;
// How many questions the user has gotten wrong
var answerWrong = 0;

// askQuestion prompts the user to answer a given cloze-deleted question
function askQuestion() {
    inquirer.prompt([
        {
            type: 'input',
			message: closeQuestions[currentQuestion].partial + '\nAnswer: ',
			name: 'userGuess'
        }
    ]).then(function (answers) {
        console.log("\n");

        // Check if user answered question correctly
        if (answers.userGuess.toLowerCase() === clozeQuestions[currentQuestion].clize.toLowerCase()) {
            console.log("CORRECT!");
            answerRight++;
        } else {
            console.log("INCORRECT!");
            answerWrong++;
        }

        // show the correct answer
        console.log(closeQuestions[currentQuestion].full);
        console.log("-----------------------------------------\n");

        // on to the next question


    })
}


// Begin asking the questions!
// askQuestion();