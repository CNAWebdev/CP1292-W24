"use strict";

/*
If you run this code from the file system, it doesn't work correctly with Chrome
or Firefox and may not work correctly with other browsers. To get this code to work 
correctly, you can deploy the app to a web server and run it from that web server.
*/

const setCookie = (name, value, days) => {
    // concatenate cookie name and encoded value
    

    // if there's a value for days, add max-age to cookie
    
    // add path to cookie and then set
    
};

const getCookieByName = name => {
    // get the cookies for this site from the server
    

    // get the index of the cookie name and equal sign
    
    // deal with what happens if there is no cookie
    
    // otherwise
        // adjust so the name and equal sign aren't included in the result
        

        // get the index of the semi-colon at the end of the cookie value,
        

        // deal with there not being a ";"
        

        // use the start and end indexes to get the cookie value
        

        // return the decoded cookie value
        
    
};

const deleteCookie = name => 
    // delete the cookie by setting max-age to 0
    

$(document).ready( () => {

    // check to  make sure that we are loading from server and not file system
    if (!location.protocol.startsWith("http")) {
        alert(`Since this application relies on HTTP, it only works correctly when run on a web server.`);
    }
    
    // process add task on click if the #add_task button
    $("#add_task").click( () => {  
        // get a reference to the input box #tasks
    

        // get the value from the taskbox
    

        // make sure that there is a task
        if (/* condition goes here */ true) {
            // send an alert message
            
            // set focus on the #task input box
            
        } else {  
            // retrieve tasks cookie value and add new task to it
            
            // add end of line character to the tasks
            

            // reset a 21 day persistent cookie for tasks
            

            // clear task text box and re-display tasks
            
            // output the tasks cookie info to the console
            
            // update the textbox witht eh cookie value
            
            // focus on the task box
            
        }
    });
    
    $("#clear_tasks").click( () => {
        // delete the cookie for tasks
        
        // clear the task list
        
        // focus on the task input box
        
    }); 
    
    // initially load the cookie named tasks
    
    // set focus on the #task inputbox
    
});