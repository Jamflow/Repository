var actionInput = document.getElementById("actionInput");
var taskColor = document.getElementById("taskColor");
var newTask = document.getElementById("newTask");
var taskButton = document.getElementById("taskButton");

taskButton.addEventListener("click", function() {
    
    var color = taskColor.value
    var task = "<div style='color:"+color+"'>"+actionInput.value+"</div>";
    
    
    newTask.innerHTML = newTask.innerHTML+task;
    
});

newTask.addEventListener("click",function(evt){

    var thing = evt.target;

    thing.parentNode.removeChild(thing);
        
});
    