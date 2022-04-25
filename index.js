// TODO: Include packages needed for this application
const fs= require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [title, descrition, installation, usage, license,
    contribution, github, email, test];

const readMe = (answers)=> 
`#${Title}

## Description
${Descrition}

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${licese}

## Badges
${badges}

![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)

## How to Contribute
${how-to-contribute}
${contact}

If you created an application or package and would like other developers to 
contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) 
is an industry standard, but you can always write your own if you'd prefer.

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
      message: 'What is the descrition of the application?',
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
    name: 'licese',
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

  .then((answers) => {
    const readMeContent = readMe(answers);

    fs.writeFile('README.md', readMeContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')
    );
  });

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
