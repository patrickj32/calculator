// Calculator.js

class Calculator {
    constructor() {
        // Constructor logic here
    }

    add(num1, num2) {
        return num1 + num2;
    }

    subtract(num1, num2) {
        return num1 - num2;
    }

    multiply(num1, num2) {
        return num1 * num2;
    }

    divide(num1, num2) {
        if (num2 === 0) {
            throw new Error("Cannot divide by zero");
        }
        return num1 / num2;
    }

    findAreaOfCircle(radius) {
        if (radius <= 0) {
            throw new Error("Radius must be greater than zero");
        }
        return Math.PI * Math.pow(radius, 2);
    }

    findAreaOfRectangle(side1, side2) {
        if (side1 <= 0 || side2 <= 0) {
            throw new Error("Sides must be greater than zero");
        }
        return side1 * side2;
    }
}


module.exports = Calculator;
