// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');

// TODO: Create an array of questions for user input
//const questions = ['title', 'description', 'installation', 'usage', 'license',
    //'contribution', 'email', 'github', 'test'];

const readMe = ({title, description, installation, usage, license, contribution, email, github, test}) => 
`# ${title}

## Description
${description}

## Table of Contents (Optional)

## Installation
${installation}

## Usage
${usage}

## License
${license}

## Badges

## How to Contribute
${contribution}
${email}

## Github username
${github}

## Tests
${test}`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your application title?',
    },
  {
    type: 'input',
      name: 'description',
      message: 'What is the description of the application?',
  },

  {
    type: 'input',
      name: 'installation',
      message: 'What is the installation instruction?',
  },
  {
    type: 'input',
      name: 'usage',
      message: 'What is the usage of the application?',
  },
  {
    type: 'list',
    message: 'What is the licese?',
    name: 'license',
    choices: ['none', 'MIT', 'GNU GPL V3'],
  },
  {
    type: 'input',
      name: 'github',
      message: 'What is the github username?',
  },
  {
    type: 'input',
      name: 'email',
      message: 'What is your email?',
  },

  {
    type: 'input',
      name: 'contribution',
      message: 'How can other contribute?',
  },
  {
    type: 'input',
      name: 'test',
      message: 'What is the test instruction?',
  },
    
  ])
  .then((annswers) => {
    const readMeContent = readMe(annswers);

    fs.writeFile('README1.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README1.md!')
    );
  });

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();
