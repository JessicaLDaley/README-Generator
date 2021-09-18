/*// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

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

module.exports = generateMarkdown;*/
function generateMarkdown(useranswers, userInfo) {

  // Generate Table of Contents conditionally based on useranswers
  let draftToC = `## Table of Contents`;

  if (useranswers.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (useranswers.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (useranswers.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (useranswers.tests !== '') { draftToC += `
  * [Tests](#tests)` };


  // Generate markdown for the top required portions of the README
  let draftMarkdown = 
  `# ${useranswers.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${useranswers.username}/${useranswers.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${useranswers.username}/${useranswers.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${useranswers.description}
  `

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (useranswers.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${useranswers.installation}`
  };
  

  // Optional Usage section
  if (useranswers.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${useranswers.usage}`
  };
  
  
  // Optional Contributing section
  if (useranswers.contributing !== '') {
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${useranswers.contributing}`
  };
  

  // Optional Tests section
  if (useranswers.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${useranswers.tests}`
  };


  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${useranswers.license}
  `;


  // Questions / About Developer section
  let draftDev = 
  `
  ---
  
  ## Questions?
  
  ![Developer Profile Picture](${userInfo.avatar_url}) 
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userInfo.login}](${userInfo.url})
  `;

  // If GitHub email is not null, add to Developer section
  if (userInfo.email !== null) {
  
  draftDev +=
  `
  Email: ${userInfo.email}
  `};

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;
