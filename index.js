
// add the required libraries
const inquirer = require('inquirer')
// for file i/o
const fs=require('fs')


//Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.
inquirer
  .prompt([
    {
      type: 'input',
      message: "What's the title of you project?",
      name: 'title',
    },
    {
      type: 'input',
      message: "Write a description for your project",
      name: 'description',
    },
    {
      type: 'input',
      message: 'Write out Installation instructions',
      name: 'install',
    },
    {
        type: 'input',
        message: 'Explain how this will be used',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'How can people contribute?',
        name: 'contribute',
      },
      {
          type: 'input',
          message: 'If your application has tests, say how to use them here',
          name: 'test',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubUser',
      },
      {
        type: 'input',
        message:'What is your email address?',
        name:'email',
      },
      {
        type:'list',
        name: 'license',
        message: "What kind of license",
        choices: [
          'MIT',
          'GNU',

        ]      }


  ])
  .then((response)=> {
    console.log(response)

    const fileName = "ReadME.md"
    var profile = ("https://github.com/"+response.gitHubUser)
    let readContents = `#${response.title}
    ##Description:
    ${response.description}
    
    
    ## Table of contents
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contribute)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ##Installation
      ${response.install}

      ##Usage
      ${response.usage}

      ##License
      ${response.license}

      ##Contributing
      ${response.contribute}

      ##Tests
      ${response.test}

      ##Questions
      For questions please contact: ${response.email}
      Github Profile: ${profile}

    
`
    fs.writeFile(fileName, readContents, (err) => err ? console.log(err) : console.log('We did it!'))
    })