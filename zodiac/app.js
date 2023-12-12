console.log('Testing conection');
//Create and name a function that will calculate the signs
//define variable for year input field aka prompt
//Validate the input 
//Make a variable for calucalting the inputed parametars from the users side
//Define all the possible choices
//Display the result to the user
//call the function

//create and name a fucntion that will calculate the sign
function zodiacChinese(){
    //variable for user birth year input
    let year = prompt("Please enter your birth year: ");

    //Validate the input
    if (isNaN(year) || year === null) {
        //alert the user
        alert("Please enter a valid number.");
    }
    //Equastion 
    let zodiacIndex = (year - 4) % 12;

    //Make a veriable string for calculating the parametars
    let zodiacSigns = [
        "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Goat", ,"Monkey", "Rooster", "Dog", "Pig" 
    ];

    //Display
    alert("The Chinese Zodiac sign for the year " + year + " is: " + zodiacIndex + "-" + zodiacSigns[zodiacIndex]);
}
zodiacChinese();