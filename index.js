// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs= require('fs');

// A function for markdown README file content
function readMe (data) {
let badge = '';
let licenseLink = '';
switch (data.license) {
    case 'MIT':
        badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
        licenseLink = '(https://opensource.org/licenses/MIT)'       
        break;
    case 'GNU GPL V3':
        badge = '[![License: GNU GPL V3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
        licenseLink = '(https://choosealicense.com/licenses/agpl-3.0)';
        break;
    case 'Mozilla':
        badge = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]';
        licenseLink = '(https://www.mozilla.org/en-US/MPL/2.0/)'
        break;
        default: console.error('Error, choose one license');
} 

readMeContent = 
`# ${data.title}

## Description
${data.description}

## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Installation
${data.installation}

## Usage
${data.usage}

![Screenshot](assets/images/screenshot.png)

## Credits
${data.credits}

## License
${data.license}

${badge}

Please see the license condition: 
${licenseLink}

## How to Contribute
${data.contribution}

My email: 
${data.email}

## Github username
${data.github}

## Tests
${data.test}`
return readMeContent;
};

// prompting all questions with inquirer module
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
    type: 'input',
      name: 'credits',
      message: 'Credits to',
  },

  {
    type: 'list',
    message: 'What is the licese?',
    name: 'license',
    choices: ['none', 'MIT', 'GNU GPL V3','Mozilla'],
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

  // Get input data and generate README1.md file
  .then((data) => {
    
    fs.writeFile('README1.md', readMe(data), (err) =>
      err ? console.log(err) : console.log('Successfully created README1.md!')
    );
  }); 

