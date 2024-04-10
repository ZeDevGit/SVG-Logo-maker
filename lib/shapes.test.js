//Tests for the shapes.js file to generate triangle with details specified in assignment README

const Shape = require('./shapes');
const Triangle = require('./triangle');

describe('Shape', () => {

    test('should render a Triangle shape with the specified color', () => {
        const shape = new Triangle();
        //shape.setColor("blue");
        expect(shape.generateSVG()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
});

