
// add the required libraries
const inquirer = require('inquirer')
// for file i/o
const fs=require('fs')

// prompts for the user
const questions = [
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
          'GNU'
        ]      }


  ]

  function generate() {
    inquirer.prompt(questions)
  .then((response)=> {
    console.log(response)

    // set the license depending on what was chosen
    if(response.license == 'MIT')
    {
      genLicense = fs.readFileSync('MIT.txt', 'utf-8')
      response.license = `![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)`
      
    }
    else if (response.license == 'GNU')
    {
      // Use fs.readFile() method to read the file 
      genLicense = fs.readFileSync('GNU.txt', 'utf8') 
      response.license = `![GitHub license](https://img.shields.io/badge/license-${response.license}-blue.svg)`
  
        // Display the file content 
     // console.log(data); 
    
    }

    // set the variables for the readME
    const fileName = `${response.title}` + '.md'

    // set the profile for the readME
    var profile = "https://github.com/"+response.gitHubUser
    
    // create the total contents for the readME
    let readContents = `# ${response.title}

    ${response.license}
    
    ## Description:
    ${response.description}
    
    
## Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contribute)
* [Tests](#tests)
* [Questions](#questions)
    
## Installation
${response.install}

## Usage
${response.usage}

## License

${genLicense}

## Contributing
${response.contribute}

## Tests
${response.test}

## Questions
For questions please contact: ${response.email}

Github Profile: ${profile} `

    

    fs.writeFile(fileName, readContents, (err) => err ? console.log(err) : console.log('We did it!'))
    })
  }

  // run it to generate readME
  generate()