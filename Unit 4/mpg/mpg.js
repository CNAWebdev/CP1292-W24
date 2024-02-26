"use strict";

$(document).ready( () => {
    $("#calculate").click( () => {
        //set mpg.miles to the value from miles from the form
        mpg.miles = parseFloat($("#miles").val());
        //set mpg.gallons to the value from miles from the form
        mpg.gallons = parseFloat($("#gallons").val());
    

        // check to see if mpg is valid
        if ( mpg.isValid) {
            // update form with the miles per gallon calculation
            $("#mpg").val(mpg.calculate().toFixed(2));
            // set focus on the miles textbox
            $("#miles").focus();
    
        } 
        else {
            // show alert if not valid
            alert("Both entries must be numeric and greater than zero.");
            console.log("Both entries must be numeric and greater than zero.");
    
            // set focus on the miles textbox
            $("$miles").focus();
        }
    });
    
    
    $("#clear").click( () => {
        // clear the miles textbox
        $("#miles").val("");
        // clear the gallons textbox
        $("#gallons").val("");
        // c;ear the mpg textbox
        $("#mpg").val("");
        // set focus on miles
        $("#miles").focus();
    });
    // set focus on miles
    $("#miles").focus();
});