/*Links elements from calculator.html to javascript*/
var CalculateButton = document.getElementById("CalculateButton")
var OperationChoices = document.getElementById("OperationChoices")
var NumberInput1 = document.getElementById("NumberInput1")
var NumberInput2 = document.getElementById("NumberInput2")
var Answer = document.getElementById("Answer")

/*Adds Event listener to calculate button to 
detect clicking which allows the calculation function 
to run and solve the equation.*/
CalculateButton.addEventListener("click", function() {
    
    var num1 = +NumberInput1.value;
    var num2 = +NumberInput2.value;
    var operation = OperationChoices.value;
    
    if (operation === "+") {
        
         Answer.innerHTML = (num1) + (num2);
    
    }
    
    else if (operation === "-") {
        
         Answer.innerHTML = (num1) - (num2);
    
    }
    
    else if (operation === "*") {
        
         Answer.innerHTML = (num1) * (num2);
    
    }
    
    else if (operation === "/") {
        
         Answer.innerHTML = (num1) / (num2);
    
    }

});