var actionInput = document.getElementById("actionInput");
var taskColor = document.getElementById("taskColor");
var newTask = document.getElementById("newTask");
var taskButton = document.getElementById("taskButton");
var clearButton = document.getElementById("clearButton");

/*Adds event listener for clicks upon task button and creates new tasks.*/
taskButton.addEventListener("click", function() {
    
    var color = taskColor.value
    var task = "<div style='color:"+color+"'>"+actionInput.value+"</div>";
    
    newTask.innerHTML = newTask.innerHTML+task;
    
});

/*Creates function that removes task when clicked.*/
newTask.addEventListener("click",function(evt){

    var existingTask = evt.target;

    existingTask.parentNode.removeChild(existingTask);
        
});
    
/*Creates function that removes all existing tasks when clicked.*/
clearButton.addEventListener("click",function(evt){

    var allTasks = newTask
    while (allTasks.hasChildNodes()) {
    allTasks.removeChild(allTasks.firstChild);
    }   
});
    