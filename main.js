// !# /usr/bin/env node  
import inquirer from "inquirer";
let myBalance = 5000;
let myPin = 1998;
let answer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your pin",
    },
]);
//   first Question
if (answer.pin === myPin) {
    console.log("correct pin code!!");
}
else {
    console.log("please enter a correct pin code");
}
let operationAns = await inquirer.prompt([{
        name: "operations",
        type: "list",
        message: "select your options",
        choices: ["checkbalance", "withdraw"]
    },
]);
console.log(operationAns);
// 3rd question
if (operationAns.operations === "withdraw") {
    let amountAns = await inquirer.prompt([
        {
            name: "amount",
            type: "number",
            message: "enter your amount",
        }
    ]);
    if (amountAns.amount <= 5000) {
        console.log("congratulations");
    }
    else if (amountAns.amount >= 5000) {
        console.log("sorry your balance is sufficent");
    }
    myBalance -= amountAns.amount;
    console.log("your remaining balance is " + myBalance);
}
else if (operationAns.operations === "checkbalance") {
    console.log("your balance is " + myBalance);
}
// 3rd Question
//  if (amountAns. amount=== 500){
//    console.log("congratulations you are succesfully withdraw your amount");
// } 
//  else if (amountAns. amount === 1000){
//    console.log("congratulations you are succesfully withdraw your amount");
// }
//   else if (amountAns. amount === 2000){
//       console.log("congratulations you are succesfully withdraw your amount");
//    }
//     else if (amountAns. amount=== 3000){
//       console.log("congratulations you are succesfully withdraw your amount");
//    }
//    else if (amountAns. amount=== 4000){
//       console.log("congratulations you are succesfully withdraw your amount");
//    }
//    else if (amountAns. amount=== 50000){
//       console.log("congratulations you are succesfully withdraw your amount");
//    }
// else { 
//    console.log("ops! you choose a empty balance");
// }
