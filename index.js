const inquirer = require('inquirer');// TODO: Include packages needed for this application
const fs = require('fs');
const util = require('util');

// Modules
const api = require('./utils/api.js');
const generateReadme = require('./utils/table-of-contents.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "PLease enter your GitHub username. (No @ needed)",
        name: 'username',
        default: 'JessicaDaley',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid GitHub username to generate a README");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "PLease enter your email address",
        name: 'email',
        default: 'jessicadaley127@gmail.com',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the name of your GitHub repository?",
        name: 'repo',
        default: 'readme-generator',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("You must enter a valid GitHub repository");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Share the steps required to install your project.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide information and instructions pertaining to your project.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contribution'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];


// Write to file  
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Your README file has been generated!")
    });
}

const saveFile = util.promisify(writeToFile);



async function init() {
    try {

        // Prompt Inquirer questions
        const userAnswers = await inquirer.prompt(questions);
        console.log("Your answers: ", userAnswers);
        console.log("Hold tight! Fetching your GitHub...");

        // Call GitHub api for user info
        const userInfo = await api.getUser(userAnswers);
        console.log("Your GitHub user info: ", userInfo);

        // Pass Inquirer userAnswers and GitHub userInfo to readme
        console.log("Generating your README...")
        const input = generateReadme(userAnswers, userInfo);
        //console.log(input);

        // Write table-of-contents to file
        await saveFile('README.md', input);

    } catch (error) {
        console.log(error);
    }
};

init();

