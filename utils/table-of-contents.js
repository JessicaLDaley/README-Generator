function generateTable(userAnswers, githubInfo) {

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
  
 
   ${userAnswers.installation}`
  };
  

  // Usage section
  if (userAnswers.usage !== '') {
  
  sections +=
    `
  
  ## Usage 
  
 
  ${userAnswers.usage}`
  };
  
  
  // Contribution section
  if (userAnswers.contribution !== '') {
  sections +=
  `
  
  ## Contribution 
  
  
  ${userAnswers.contribution}`
  };
  

  // tests section
  if (userAnswers.tests !== '') {
  
  sections +=
  `
  
  ## Tests
  
 
 ${userAnswers.tests}`
  };


  // License section 
  sections += ` ## License 
  
  ${userAnswers.license} `;


  // About the developer section

  let contactInfo = 
  `
 
  ## Questions?
  
  Please contact me below:
 
  GitHub: [@${githubInfo.login}](${githubInfo.url})
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
