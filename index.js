
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

    var genLicense

    // set the license depending on what was chosen
    if(response.license == 'MIT')
    {
      genLicense = fs.readFileSync('MIT.txt', 'utf-8')
      
    }
    else if (response.license == 'GNU')
    {
      // Use fs.readFile() method to read the file 
      genLicense = fs.readFileSync('GNU.txt', 'utf8') 
      
       // response.license = data
      
        // Display the file content 
     // console.log(data); 
    
    }

    // set the variables for the readME
    const fileName = "ReadME.md"

    // set the profile for the readME
    var profile = "https://github.com/"+response.gitHubUser
    
    // create the total contents for the readME
    let readContents = `# ${response.title}
    
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
${response.license}
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