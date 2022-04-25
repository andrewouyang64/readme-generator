// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge (license) {
  if (license='MIT') {
    var badge = 'https://img.shields.io/badge/License-MIT-yellow.svg'
    var licenseLink = 'https://choosealicense.com/licenses/mit/'
  }
  else if (license='GNU GPL V3') {
    badge = 'https://img.shields.io/badge/License-GPLv3-blue.svg'
    licenseLink = 'https://choosealicense.com/licenses/agpl-3.0/'
  }
else { badge = ''
       licenseLink = ''
}
  console.log(badge);
  return
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
