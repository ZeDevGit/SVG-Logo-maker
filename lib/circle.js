const Shape = require('./shapes.js');

class Circle extends Shape {
    generateSVG() {
        return `<svg height="300" width="200">
            <circle cx="100" cy="100" r="50" style="fill:${this.shapeColor};stroke-width:3;stroke:rgb(0,0,0)" />
            <text x="100" y="100" font-size=20 fill="${this.textColor}" text-anchor="middle">${this.text}</text>
        </svg>`;
    }
}

module.exports = Circle;