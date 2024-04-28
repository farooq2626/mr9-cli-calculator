#!/user/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enterfirstnumber", type: "number", name: "firstnumber" },
    { message: "entersecondnumber", type: "number", name: "secondnumber" },
    { message: "select one of the operator to perform operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multipilcation", "division"] },
]);
if (answer.operator === "addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operator === "multipilcation") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("please select valid operator");
}
