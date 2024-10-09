//Pseudocode
// 1) Create a string to store the message to be presented to the user
// 2) Create three variables for each of the three numbers in the combination
// 3) Create three calculations using each of the three variables whose results will be the three numbers in the combination
// 4) Display the message and calculated combination numbers in an alert popup

//Create string for the popup message
const message = `You have received this message because you have been chosen to open an important vault. Here is the secret combination:`

//Combination variables
let combo1;
let combo2;
let combo3;

//Calculating combinations
combo1 = 5 * 2;
combo2 = 80 / 2;
combo3 = 40 - 1;

//Display message 
alert(`${message} ${combo1} - ${combo2} - ${combo3}`)