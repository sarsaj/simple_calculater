#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter your first number", type: "number", name: "firstNumber" },
    {
        message: "Enter your secound number",
        type: "number",
        name: "secoundNumber",
    },
    {
        message: "select one of the opertors to perform action",
        type: "list",
        name: "operator",
        choices: ["addition", "Subtraction", "multiplication", "division"],
    },
]);
if (answer.operator === "addition") {
    console.log(answer.firstNumber + answer.secoundNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secoundNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstNumber * answer.secoundNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstNumber * answer.secoundNumber);
}
else {
    console.log("Please select the correct operator");
}
