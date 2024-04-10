//Imports the inquirer and fs modules as well as the Circle, Triangle, and Square classes from the lib folder.

const inquirer = require('inquirer');
const fs = require('fs');
const Circle = require('./lib/circle.js');
const Triangle = require('./lib/triangle.js');
const Square = require('./lib/square.js');

let userInput = {};

//Prompt the user for input to generate the logo
//User chooses a shape from circle, triangle, and square

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

//User's prompt is then checked if the shape is a circle, triangle, or square
//Their answers are then run through either the circle, triangle, or square class to generate an SVG file

inquirer.prompt(questions).then(answers => {
    let shape;
    if (answers.shape === 'circle') {
        shape = new Circle(answers.shapeColor, answers.textColor, answers.text);
    } else if (answers.shape === 'triangle') {
        shape = new Triangle(answers.shapeColor, answers.textColor, answers.text);
    } else if (answers.shape === 'square') {
        shape = new Square(answers.shapeColor, answers.textColor, answers.text);
    }

    const svgContent = shape.generateSVG();

    //Generate the logo.svg file with the user content and stores it in the svgs folder

    fs.writeFile('./svgs/logo.svg', svgContent, (err) => {
        if (err) throw err;
        console.log('Generated logo.svg');
    });
});