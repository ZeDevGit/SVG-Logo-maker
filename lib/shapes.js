// Base class used to create shapes, each of the shapes will inherit from this class

class Shape {
    constructor(shapeColor, textColor, text) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
}

module.exports = Shape;