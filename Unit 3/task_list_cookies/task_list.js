"use strict";

/*
If you run this code from the file system, it doesn't work correctly with Chrome
or Firefox and may not work correctly with other browsers. To get this code to work 
correctly, you can deploy the app to a web server and run it from that web server.
*/

const setCookie = (name, value, days) => {
    // concatenate cookie name and encoded value
      // create a cookie name and endoce the value being set to it
      let cookie = name + "=" + encodeURIComponent(value);

    // if there's a value for days, add max-age to cookie
    if (days !== undefined ){
        cookie += "; max-age=" + days * 24 * 60 * 60;
    }
    
    // add path to cookie and then set
    cookie += "; path=/";
    // set the cookie
    document.cookie = cookie;
    
};

const getCookieByName = ( name ) => {
    // get the cookies for this site from the server
    const cookies = document.cookie;  // retrieve all the cookies you are allowed to access as a string

    // get the index of the cookie name and equal sign
    let start = cookies.indexOf(name + "=");
    
    // deal with what happens if there is no cookie
    if (start === -1){  // no cookie is found with that name
        return "";
    }else {  // otherwise cookie is found
        // adjust so the name and equal sign aren't included in the result
        start = start + (name.length + 1); // the +1 is to deal with the = sign

        // get the index of the semi-colon at the end of the cookie value,
        let end = cookies.indexOf(";",start);

        // deal with there not being a ";"
        if ( end === -1 ){
            end = cookies.length;
        }

        // use the start and end indexes to get the cookie value
        const cookieValue = cookies.substring(start, end);

        // return the decoded cookie value
        return decodeURIComponent(cookieValue);
    }
    
};

const deleteCookie = ( name )  => {
    // delete the cookie by setting max-age to 0
    document.cookie = name + "=''; max-age=0; path=/";
}

$(document).ready( () => {

    // check to  make sure that we are loading from server and not file system
    if (!location.protocol.startsWith("http")) {
        alert(`Since this application relies on HTTP, it only works correctly when run on a web server.`);
    }
    
    // process add task on click if the #add_task button
    $("#add_task").click( () => {  
        // get a reference to the input box #tasks
        const textbox = $("#task");

        // get the value from the taskbox
        const task = textbox.val();
        
        // make sure that there is a task
        if (task === "") {
            // send an alert message
            alert("please enter a task");
            // set focus on the #task input box
            textbox.focus();
        } else {  
            // retrieve tasks cookie value and add new task to it
            let tasks = getCookieByName("tasks");
            // add end of line character to the tasks
            tasks = tasks.concat(task,"\n");

            // reset a 21 day persistent cookie for tasks
            setCookie("tasks", tasks, 21);

            // clear task text box and re-display tasks
            textbox.val("");
            // output the tasks cookie info to the console
            console.log("tasks: " + getCookieByName("tasks"));
            // update the textbox witht eh cookie value
            $("#task_list").val(getCookieByName("tasks"));
            
            // focus on the task box
            textbox.focus();
            
        }
    });
    
    $("#clear_tasks").click( () => {
        // delete the cookie for tasks
        deleteCookie("tasks");
        // clear the task list
        $("#task_list").val("");
        // focus on the task input box
        $("#task").focus();
        
    }); 
    
    // initially load the cookie named tasks
    $("#task_list").val(getCookieByName("tasks"));
    
    // set focus on the #task inputbox
    $("#task").focus();
    
});