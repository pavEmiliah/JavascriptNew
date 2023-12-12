console.log("Test");
//TASK: Write a javascript function for an ATM: The ATM should give cash, Should return "Not enough money" if you request more money, Should return the ammount withdrawn and money left on the account if you have enough, Note: Hardcode your account money in the program,Bonus: Make it work with prompt()!

//Steps: 
//1 Add a hard coded variable to define a balance
//2 Make and name a function 
//3 Define prompt that will enable the user to enter a sum
//4 define a conversion
//5 validate the input
//6 check if there is enough money in the account
//7 use else to withfraw the money and update the account balance
//8 display the result
//9 call the function


//START
//1 Add a hard coded variable to define a balance
let accountBalance = 2000;

//2 Make and name a function 
function withdrawCashFromAtm() {
    //3 Define prompt that will enable the user to enter a sum
    let withdrawalAmmount = prompt ("Enter the sum you want to withdraw.");//works
    //4 define a conversion
    withdrawalAmmount = parseFloat(withdrawalAmmount);//works

    //5 validate 
    if(isNaN(withdrawalAmmount) || withdrawalAmmount <=0) {
        console.log("Invalid input. Please enter a valid positive number.")//works
        return;
    }

    //6 check if there is enough money in the account
    if (withdrawalAmmount > accountBalance) {
        console.log("Not enough money in the bankaccount.");
        return "Not enough money";


    } else {
     //display the result
        console.log("Withdrawn: ", withdrawalAmmount);
        accountBalance -= withdrawalAmmount;
        console.log("Remaining balance on your account: ", accountBalance);
        return withdrawalAmmount;
    }
}

withdrawCashFromAtm();