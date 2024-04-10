// inherits from shapes.js, creates a triangle after receiving the shapeColor, textColor, and text in user prompt

const Shape = require('./shapes.js');

class Triangle extends Shape {
    generateSVG() {
        return `<svg height="300" width="200">
            <polygon points="150, 18 244, 182 56, 182" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
            <text x="100" y="100" font-size=20 fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
}

module.exports = Triangle;