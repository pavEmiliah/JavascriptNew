console.log("Testing connection")
//Task: Write a JavaScript function which accepts a parameter and returns its type and prints it in the console. Try to call the functions 5 times for 5 different types

//STEPS:
//1. Make and name the function for the task
//2. Define a veriable for type of parametar and validation with typeof operator
//3. Make a console log that says the type of parametar is 
//4. Call the function 5 times 

function fiveTypesFiveTimes(parametar){
    let type = typeof parametar;
    console.log("The type of ", parametar, " is ", type);
}
//Object
fiveTypesFiveTimes({});
//boolean
fiveTypesFiveTimes(false);
//number
fiveTypesFiveTimes(22);
//string
fiveTypesFiveTimes("Hello");
//undefined
fiveTypesFiveTimes(undefined);