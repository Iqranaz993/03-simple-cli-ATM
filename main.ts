// !# /usr/bin/env node  

import inquirer from "inquirer" 
// totalamount for my account 
let myBalance = 5000; 

//my atm pin
let myPin = 1998;

//object
let answer= await inquirer.prompt(
    [
        {
    name: "pin",
    type: "number",
    message: "Enter your pin",
},
   ]
     )
   //   first Question console my pin

     if(answer.pin === myPin){
        console.log("correct pin code!!");
     }else {
      console.log("please enter a correct pin code");
     }

      //2nd Question make option list
     let operationAns = await inquirer.prompt([{
        name: "operations",
        type: "list" ,
        message: "select your options",
        choices: ["checkbalance" , "withdraw"]
     },
       ]
         );

         console.log(operationAns);

      // 3rd question console select option....
         if (operationAns.operations === "withdraw"){
        let amountAns = await inquirer.prompt(
       [
         {
            name: "amount",
            type: "number",
            message: "enter your amount",
          }
      
         ]      
               )

               // conditions
               if (amountAns.amount <= 5000){
                  console.log("congratulations");
               } else if(amountAns.amount >=5000) {
                  console.log("sorry your balance is sufficent");
               }

               //check my ATM total balance 
             myBalance  -= amountAns.amount;
             console.log("your remaining balance is " + myBalance);
                 }else if(operationAns.operations === "checkbalance"){
                  console.log("your balance is " + myBalance);
                 }


                 
