// inherits from shapes.js, creates a square after receiving the shapeColor, textColor, and text in user prompt

const Shape = require('./shapes.js');

class Square extends Shape {
    generateSVG() {
        return `<svg height="300" width="200">
            <rect width="100" height="100" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
            <text x="100" y="100" font-size=20 fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
}

module.exports = Square;