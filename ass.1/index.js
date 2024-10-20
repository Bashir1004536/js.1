// Simple Calculator using if-else statements

// Prompt the user to enter the first number
let num1 = prompt("Enter the first number:");

// Check if the input is a valid number
if (isNaN(num1)) {
  alert("Invalid input. Please enter a valid number.");
} else {
  // Convert the input to a number
  num1 = parseFloat(num1);

  // Prompt the user to enter the second number
  let num2 = prompt("Enter the second number:");

  // Check if the second input is a valid number
  if (isNaN(num2)) {
    alert("Invalid input. Please enter a valid number.");
  } else {
    // Convert the second input to a number
    num2 = parseFloat(num2);

    // Prompt the user to choose an operation
    let operator = prompt("Enter an operator (+, -, *, /):");

    // Declare a variable to store the result
    let result;

    // Perform the operation using if-else statements
    if (operator === "+") {
      result = num1 + num2;
      alert("Result: " + result);
    } else if (operator === "-") {
      result = num1 - num2;
      alert("Result: " + result);
    } else if (operator === "*") {
      result = num1 * num2;
      alert("Result: " + result);
    } else if (operator === "/") {
      // Handle division by zero
      if (num2 === 0) {
        alert("Error: Division by zero is not allowed.");
      } else {
        result = num1 / num2;
        alert("Result: " + result);
      }
    } else {
      // Handle invalid operators
      alert("Invalid operator. Please choose between (+, -, *, /).");
    }
  }
}
