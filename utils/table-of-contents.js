function generateTable(userAnswers, userInfo) {

  // Generate Table of Contents with user input
  let tableCon = `## Table of Contents`;

  if (userAnswers.installation !== '') { tableCon += `
  * [Installation](#installation)` };

  if (userAnswers.usage !== '') { tableCon += `
  * [Usage](#usage)` };

  if (userAnswers.contribution !== '') { tableCon += `
  * [Contribution](#contribution)` };

  if (userAnswers.tests !== '') { tableCon += `
  * [Tests](#tests)` };


  // Generate table of contents for required fields of README
  let sections = 
  `# ${userAnswers.title}

  
  
  ## Description 

  
  ${userAnswers.description}
  `

  // Add Table of Contents 
 sections += tableCon;
 
  // Add License section 
 sections += `
  * [License](#license)`;
  

  // Installation section
  if (userAnswers.installation !== '') {
  
  sections +=
  `
  
  ## Installation
  
  *Steps required to install the application:*
  
  ${userAnswers.installation}`
  };
  

  // Usage section
  if (userAnswers.usage !== '') {
  
  sections +=
  
  `
  
  ## Usage 
  
  *Instructions for use:*
  
  ${userAnswers.usage}`
  };
  
  
  // Contribution section
  if (userAnswers.contribution !== '') {
  `
  
  ## Contribution 
  
  *If you would like to contribute to this project, follow these instructions on how to do so.*
  
  ${userAnswers.contribution}`
  };
  

  // tests section
  if (userAnswers.tests !== '') {
  
sections +=  console.log("line 126")
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${userAnswers.tests}`
  };


  // License section 
  sections += ` ## License ${userAnswers.license} `;


  // About the developer section

  let contactInfo = 
  `
 
  ## Questions?
  
  Questions? Please contact me below:
 
  GitHub: [@${userAnswers.login}](${userAnswers.url})
  `;

  // If GitHub email is not equal to null, add to About developer section
  if (userAnswers.email !== null) {
  
  contactInfo += ` Email: ${userAnswers.email} `};

  // Add about developer section 
  sections += contactInfo;

  // Return 
  return sections;
  
}

module.exports = generateTable;
