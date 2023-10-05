// Example usage of Calculator.js
const Calculator = require('./Calculator');

const calculator = new Calculator();

const num1 = 15;
const num2 = 4;


// ***Basic Caluclator functions***
const sum = calculator.add(num1, num2);
const difference = calculator.subtract(num1, num2);
const product = calculator.multiply(num1, num2);
const quotient = calculator.divide(num1, num2);


console.log('Sum:',sum)
console.log('Difference:', difference)
console.log('Product:', product)
console.log('Quotient:', quotient)

const radius = 3.75;
const circleArea = calculator.findAreaOfCircle(radius);

console.log(`Area of the circle: ${circleArea}`);

// Calculate and display the area of a rectangle with sides 6 and 23
const side1 = 6;
const side2 = 23;
const rectangleArea = calculator.findAreaOfRectangle(side1, side2);

console.log(`Area of the rectangle: ${rectangleArea}`);