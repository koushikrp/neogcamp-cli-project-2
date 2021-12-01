//Author: Koushik
//Title: Are you a Fan of Technology

var readlineSync = require("readline-sync");
var score = 0;
var answerSheet = [
	{
		question: "1. What is the BRAIN of Computer? (abbreviation)\n",
		answer: "CPU",
	},
	{
		question: "2. Who is the Father of Computer?\n",
		answer: "Charles Babbage",
	},
	{
		question: "3. What does RAM stand for?\n",
		answer: "Random Access Memory",
	},
	{
		question: "4. What does BIOS stand for?\n",
		answer: "Basic Input Output System",
	},
	{
		question: "5. How many bits does One Byte contain?\n",
		answer: "8",
	},
];

var highestScores = [
	{
		name: "Kanishk",
		marks: 4,
	},
	{
		name: "Singh",
		marks: 3,
	},
];

function play(curQuestion, reqAnswer) {
	givenAnswer = readlineSync.question(curQuestion);
	if (givenAnswer.toLowerCase() === reqAnswer.toLowerCase()) {
		console.log("You are CORRECT! Well done.");
		score++;
	} else {
		console.log("Oops..you are Wrong.");
	}
	console.log("------------------");
	console.log("Your Current Score is: " + score);
	console.log("------------------");
}

// Welcome the User
userName = readlineSync.question("Give me your Name:\n");
console.log("Welcome", userName.toUpperCase(), ". Let me test your knowledge about Computer\nLets go..\n");

//Ask Questions
for (let i = 0; i < answerSheet.length; i++) {
	curProblem = answerSheet[i];
	play(curProblem.question, curProblem.answer);
}

//print current Leaderboard
console.log("LEADERBOARD:");
for (let i = 0; i < highestScores.length; i++) {
	console.log(highestScores[i].name, " : ", highestScores[i].marks);
}
console.log("-------------------");

//Give the Result
console.log("-------------------");
console.log("Your Final Score is: ", score, " out of 5");
console.log("-------------------");

//Update final scores
var isHighest = false;
for (let i = 0; i < highestScores.length; i++) {
	if (score > highestScores[i].marks) {
		isHighest = true;
		break;
	}
}

if (isHighest) {
	console.log("Congrats on getting a Great score.\nWe will include you in the Leaderboard.");
} else {
	console.log("You did OK. Better luck next time!");
}
