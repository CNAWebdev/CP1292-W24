"use strict";

// DisplayTaskList function takes a list of tasks as an argument and formats the output
const displayTaskList = tasks => {
    // set the taskString to an empty string
    let taskString ="";
    // if there are tasks then format them
    if (tasks.length > 0) {
        // convert stored date string to Date object
        tasks = tasks.map( task => [ task[0], new Date(task[1]) ] );
        // sort the task
        tasks.sort( (task1, task2) => {  // sort by date
            const date1 = task1[1]; // get Date object from task 1
            const date2 = task2[1]; // get Date object from task 2
            if ( date1 < date2 ) { 
                return -1; 
            }else if ( date1 > date2 ){
                return 1;
            }else {
                return 0;
            }
        })

        // format get the sting for the task and return it
        taskString = tasks.reduce ( (prev, curr) => {
            return prev + curr[1].toDateString() + " - " + curr[0] + "\n"
        }, "");  // pass initial value for the prev parameter
    }
    // update the task list
    $("#task_list").val(taskString);
    // set focus on the task element
    $("#task").focus();

};

$(document).ready( () => {
    // get the tasklist string from local storage
    const taskString = localStorage.tasks;
    
    // parse the taskstring to the tasks
    const tasks = (taskString) ? JSON.parse(taskString) : [];

    $("#add_task").click( () => {


        //get the date string from the form
        const task = $("#task").val();
        // turn date string into a date object
        const dateString = $("#due_date").val();
        const dueDate = new Date(dateString);

        // make sure if we have a valid date that to finish adding it to the list
        if (task && dateString && dueDate != "Invalid Date") {
            // create the object to store the date and the task
            const newTask = [task, dateString]  // storing the task and the dateString
            // add new task to the task list
            tasks.push(newTask);
            
            // save to local storage
            localStorage.tasks = JSON.stringify(tasks);
            
            // clear the task element
            $("#task").val("");
            
            // clear the due date element
            $("#due_date").val("");
            
            // call displayTaskList to update the task list
            displayTaskList(tasks);
            
        } else {
            // show an error
            alert("Please enter a task and valid due date.");
            
            
            // set focus on tasks
            $("#task").focus();
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
    displayTaskList(tasks);
});