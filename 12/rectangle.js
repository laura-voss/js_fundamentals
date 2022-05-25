// file: rectangle.js

class Rectangle {

  // A constructor, to give initial arguments.
  constructor(height, width) {

    // We can define attributes stored on the instance with `this`
    this.height = height;
    this.width = width;
  }

  // A method.
  getArea() {
    return this.height * this.width;
  }
}

// In the rectangle.js file... to export class
module.exports = Rectangle;

// ... and in the node REPL
const Rectangle = require('./rectangle');

const rect = new Rectangle(4, 10);
rect.getArea();


    // We can now launch the node REPL and load this file:

    // $ node
    // .load rectangle.js

    // And use it to create new instances:

    // const rect = new Rectangle(4, 10);
    // rect.getArea(); // 40