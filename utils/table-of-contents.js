function generateTable(useranswers, userInfo) {

  // Generate Table of Contents with user input
  let tableCon = `## Table of Contents`;

  if (useranswers.installation !== '') { tableCon += `
  * [Installation](#installation)` };

  if (useranswers.usage !== '') { tableCon += `
  * [Usage](#usage)` };

  if (useranswers.contribution !== '') { tableCon += `
  * [Contributing](#contributing)` };

  if (useranswers.tests !== '') { tableCon += `
  * [Tests](#tests)` };


  // Generate table of contents for required fields of README
  let sections = 
  `# ${useranswers.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${useranswers.username}/${useranswers.repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${useranswers.username}/${useranswers.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  *The what, why, and how:* 
  
  ${useranswers.description}
  `

  // Add Table of Contents 
 sections += tableCon;
 
  // Add License section 
 sections += `
  * [License](#license)`;
  

  // Installation section
  if (useranswers.installation !== '') {
  
  sections +=
  `
  
  ## Installation
  
  *Steps required to install the application:*
  
  ${useranswers.installation}`
  };
  

  // Usage section
  if (useranswers.usage !== '') {
  
  sections +=
  
  `
  
  ## Usage 
  
  *Instructions for use:*
  
  ${useranswers.usage}`
  };
  
  
  // Contribution section
  if (useranswers.contribution !== '') {
  `
  
  ## Contribution 
  
  *If you would like to contribute to this project, follow these instructions on how to do so.*
  
  ${useranswers.contribution}`
  };
  

  // tests section
  if (useranswers.tests !== '') {
  
sections +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${useranswers.tests}`
  };


  // License section 
sections +=
  `
  
  ## License
  
  ${useranswers.license}
  `;


  // About the developer section
  
  let contactInfo = 
  `
 
  ## Questions?
  
  Questions? Please contact me below:
 
  GitHub: [@${useranswers.login}](${useranswers.url})
  `;

  // If GitHub email is not equal to null, add to About developer section
  if (useranswers.email !== null) {
  
contactInfo +=
  `
  Email: ${useranswers.email}
  `};

  // Add about developer section 
  sections += contactInfo;

  // Return 
  return tableCon;
  
}

module.exports = generateTable;
