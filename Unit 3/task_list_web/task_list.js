"use strict";


// run once the page is loaded
$(document).ready( () => {

    // run when the #add_task button is clicked
    $("#add_task").click( () => {   
        // get a reference to the #task textbox
        const textbox = $("#task");
        // get the details from the #task textbox
        const task = textbox.val();
        // if task is empty
        if (task === "") {
            // send alert to enter task
            alert ("Please enter a task!");
            // focus on the #task textbox
            textbox.focus();
        } else { // Otherwise add task to web storage 
           
            // first get the current tasks from the localstorage or set tasks to be empty
            let tasks = localStorage.myTasks || "";
            
            // concat my task to tasks and set update the local storage
            localStorage.myTasks = tasks.concat(task, "\n");
            
            // clear task text box and re-display tasks
            textbox.val("");

            // update the task_list from local storage
            $("#task_list").val(localStorage.myTasks);
            //set the focus back to the #task input box
            textbox.focus();
   
        }
    });
    
    // deal with when #clear_tasks is clicked
    $("#clear_tasks").click( () => {
        // remove values from localstorage
        localStorage.removeItem("myTasks");
        // clear #task_list
        $("#task_list").val("");
   
        // focus on the #task textbox
        $("#task").focus();
   
    }); 
    
    // display tasks on initial load
    //set the info from local storage to my #task_list
    $("#task_list").val(localStorage.myTasks);
    // set focus on the #task textbox
    $("#task").focus();
   
});