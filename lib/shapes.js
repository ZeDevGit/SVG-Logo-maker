// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered

const inquirer = require('inquirer');
const fs = require('fs');

let userInput = {};

let questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters: ',
        validate: function (value) {
            if (value.length <= 3) {
                return true;
            } else {
                return 'Please enter up to three characters.';
            }
        }
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color keyword or a hexadecimal number for text color: '
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape from circle, triangle, and square: ',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color keyword or a hexadecimal number for shape color: '
    }
];

inquirer.prompt(questions).then(answers => {
    // Generate SVG content based on user input
    let svgContent = "";

    if (answers.shape === 'circle') {
        svgContent = `<svg height="300" width="200">
            <circle cx="100" cy="100" r="50" style="fill:${answers.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
            <text x="100" y="100" fill="${answers.textColor}" text-anchor="middle">${answers.text}</text>
        </svg>`;
    }
    else if (answers.shape === 'triangle') {
        svgContent = `<svg height="300" width="200">
            <text x="50" y="50" fill="${answers.textColor}">${answers.text}</text>
            <polygon points="100,10 40,198 190,78" style="fill:${answers.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`;
    } else if (answers.shape === 'square') {
        svgContent = `<svg height="300" width="200">
            <text x="50" y="50" fill="${answers.textColor}">${answers.text}</text>
            <rect width="100" height="100" style="fill:${answers.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
        </svg>`;
    }
    fs.writeFile('./svgs/logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
});

