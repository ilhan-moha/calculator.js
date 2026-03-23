const calculationHistory = [];

function add(a, b) {
  const result = a + b;
  calculationHistory.push({ operation: "addition", operands: [a, b], result });
  return result;
}
function subtract(a, b) {
  const result = a - b;
  calculationHistory.push({ operation: "subtraction", operands: [a, b], result });
  return result;
}
function multiply(a, b) {
  const result = a * b;
  calculationHistory.push({ operation: "multiplication", operands: [a, b], result });
  return result;
}
function divide(a, b) {
  if (b === 0) {
    console.log("Cannot divide by zero!");
    return null;
  }
  const result = a / b;
  calculationHistory.push({ operation: "division", operands: [a, b], result });
  return result;
}
function displayHistory() {
  console.log("Calculation History:");
  calculationHistory.forEach((calc, index) => {
    console.log(
      `${index + 1}: ${calc.operands[0]} ${calc.operation} ${calc.operands[1]} = ${calc.result}`
    );
  });
}


add(5, 3);          
subtract(10, 4);    
multiply(2, 7);    
divide(20, 4);      

displayHistory();

