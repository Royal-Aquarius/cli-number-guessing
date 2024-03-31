#! /usr/bin/env node

import inquirer from "inquirer";
import { right } from "inquirer/lib/utils/readline.js";
import chalk from "chalk";

// 1) Computer will generate a random number - Done

// 2) User input for guessing number - Done

// 3) Compare user input with computer generated number -Done

const randomNumber = Math.floor(Math.random() * 6 + 1);

console.log(chalk.cyanBright("Welcome To A Number Guessing Game"));

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: chalk.greenBright("Please Guess A Number Between 1-6: "),
    },
]);

//Ager condition true hai tu wo if ke bracket ko run kera ga

if (answers.userGuessedNumber === randomNumber){
    console.log(chalk.blueBright("Congratulations! You Guessed Right Number"));
}else{
    console.log(chalk.redBright("Sorry You Guessed A Wrong Number"));
}   