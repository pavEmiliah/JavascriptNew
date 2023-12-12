console.log("Testing");
// Task: Calculates your dog's age based on the conversion rate of 1 human year to 7 dog years
//Note: Call the function in console to see answer
//Bonus: Make the same function work for converting dog to human years as well

//STEPS:
//1. Make and name a function 
//2. Define variable for dog years that equals to an equastion for human years
//3. Define console.log that says how old is the dog in dogs age
//3a. Return the value
//4. Call the function

function dogYears(humanYears){
    //define a variable with equastion
    let dogYears = humanYears * 7;
    //Console log
    console.log("Your dogs age in dog years is: ", dogYears);
    //return 
    return dogYears;//gives NaN
    
}
//Now i will call the function so I see if it works
dogYears(1);// It works it shows the dog years in human years

//Bonus: calculate the human years in dog years

//STEPS:
//1. Make and name a function 
//2. Define variable for human years that equals to an equastion for dog years
//3. Define console.log that says how old is the human is in dog years
//3a. Return the value
//4. Call the function

function humanDogYearsConvter(dogYears){
    let humanYears = dogYears / 7;
    //console
    console.log("Your dog in human years is: ", humanYears);
    //return 
    return humanYears;
}
//Now i will call the function so I see if it works
humanDogYearsConvter(35);// It works it shows the dog years in human years

