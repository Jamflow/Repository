/*This is the JavaScript for changer.html where we save
elements in variables.*/

/*Creates variables in JavaScript and saves Domain 
Object Models from changer.html to each.*/ 
var wordColorValue = document.getElementById("newBGColor");
var bgColorValue = document.getElementById("colorChangeButton")

/*Adds Event listener to the color change button to 
detect clicking which allows the changing color function 
to run and set the background color to the typed value.*/
bgColorValue.addEventListener("click", function(){
    document.body.style.backgroundColor = newBGColor.value;
})

