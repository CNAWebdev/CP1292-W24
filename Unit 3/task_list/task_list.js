"use strict";

// DisplayTaskList function takes a list of tasks as an argument and formats the output
const displayTaskList = tasks => {
    // set the taskString to an empty string

    // if there are tasks then format them
    if (tasks.length > 0) {
        // convert stored date string to Date object

        // sort the task


        // format get the sting for the task and return it

    }
    // update the task list

    // set focus on the task element

};

$(document).ready( () => {
    // get the tasklist string from local storage

    // parse the taskstring to the tasks


    $("#add_task").click( () => {


        //get the date string from the form

        // turn date string into a date object

        
        // make sure if we have a valid date that to finish adding it to the list
        if (task && dateString && dueDate != "Invalid Date") {
            // create the object to store the date and the task
            
            // add new task to the task list
            
            // save to local storage
            
            // clear the task element
            
            // clear the due date element
            
            // call displayTaskList to update the task list
            
        } else {
            // show an error
            
            // set focus on tasks
            
        }
    });
    
    // clear tasks  same as ast time
    $("#clear_tasks").click( () => {
        tasks.length = 0;
        localStorage.removeItem("tasks");
        $("#task_list").val("");
        $("#task").focus();
    });   
    
    // update display using displayTaskList
    
});