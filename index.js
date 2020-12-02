
// add the required libraries
const inquirer = require('inquirer')
// for file i/o
const fs=require('fs')

const inquirer = require('inquirer');
const fs = require('fs');
//Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.
inquirer
  .prompt([
    {
      type: 'input',
      message: "What's your name?",
      name: 'name',
    },
    {
      type: 'input',
      message: "What's your location?",
      name: 'location',
    },
    {
      type: 'input',
      message: 'Please describe yourself in a brief Bio',
      name: 'Bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'LinkedIn',
      },
      {
        type: 'input',
        message: 'What is your GitHUb URL',
        name: 'GitHub',
      },
  ])
  .then((response)=> {
    console.log(response)
    const fileName = `${response.name.toLowerCase().split(' ').join('')}.html`
    let html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>
    <body>
        <div class="container">
            <div class="jumbotron">
              <h1>User Info</h1>      
              <p></p>
        <p id='name'>Name:${response.name} </p>
        <p id='location'>Location:${response.location} </p>
        <p id='bio'>Bio:${response.Bio} </p>
        <p id='linkedIn'>LinkedIn URL:${response.LinkedIn} </p>
        <p id='gitHub'>GitHub URL:${response.GitHub}</p>
    </div>
    </div>
    </body>
    </html>`
    fs.writeFile(fileName, html, (err) => err ? console.log(err) : console.log('yay'))
    })