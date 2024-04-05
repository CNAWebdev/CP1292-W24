"use strict";


// display error
const displayError = error => {
    let html = `<span class="error">${error.message}</span>`;
    $("#display").html(html);
}

// deal with clicks on the view button

$(document).ready( () => { 

    // deal with the button click
    $("#view_button").click( () =>{
        // get date from textbox
        let dateStr = $("#date").val();
        const dateObj = new Date(dateStr);

        // make sure date  is valid
        if (dateObj == "Invalid Date"){
            const msg = "Please enter valid date in YYYY-MM-DD foramt.";
            displayError(new Error( msg ));
            // $("#display").html(`<span class="error">${msg}</span`);
        }else{

            getPictureData( dateObj );

        }
        $("#date").focus();

       
    })
});