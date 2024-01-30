"use strict";


// run once the page is loaded
$(document).ready( () => {

    // run when the #add_task button is clicked
    $("#add_task").click( () => {   
        // get a reference to the #task textbox
        
        // get the details from the #task textbox
        
        // if task is empty
        if (task === "") {
            // send alert to enter task
            
            // focus on the #task textbox
            
        } else {
            // add task to web storage 

            // first get the current tasks from the localstorage or set tasks to be empty
            
            // concat my task to tasks and set update the local storage

            // clear task text box and re-display tasks
   
            // update the task_list from local storage
   
            //set the focus back to the #task input box
   
        }
    });
    
    // deal with when #clear_tasks is clicked
    $("#clear_tasks").click( () => {
        // remove values from localstorage
   
        // clear #task_list
   
        // focus on the #task textbox
   
    }); 
    
    // display tasks on initial load
    //set the info from local storage to my #task_list
   
    // set focus on the #task textbox
   
});