"use strict";

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt( dateParts[0] );
    const day = parseInt( dateParts[1] );
    // alert (month);
    if ( month < 1 || month > 12 ) { return false; }
    if ( day > 31 ) { return false; }
    return true;
};

$( document ).ready( () => {

    // deal with the click on the sale button
    $( "#save" ).click( () => {
        // if there is a previous error message clear it
         $("span").text("");
        // get values entered by user
        const email = $("#email").val();
        const phone = $("#phone").val();
        const zip = $("#zip").val();
        const dob = $("#dob").val();

        // regular expressions for validity testing
        const emailPattern = /^[\w\.\-]+@[\w\.\-]+\.[a-zA-Z]+$/;
        const phonePattern = /^\d{3}-\d{3}-\d{4}$/;
        const zipPattern = /^\d{5}(-\d{4})?$/;
        const dobPattern = /^[01]?\d\/[0-3]\d\/\d{4}$/;
        
        // check user entries for validity
        let isValid = true;
        if (email === "" || !emailPattern.test(email)){
            isValid = false;
            $("#email").next().text("Please us format XXXX@XXXX.XX");
        }
        if (phone === "" || !phonePattern.test(phone)){
            isValid = false;
            $("#phone").next().text("Please us format XXX-XXX-XXXX");
        }
        if (zip === "" || !zipPattern.test(zip)){
            isValid = false;
            $("#zip").next().text("Enter in form XXXXX or XXXXX-XXXX");
        }
        if (dob === "" || !isDate(dob, dobPattern)){
            isValid = false;
            $("#dob").next().text("Enter in form XXXXX or XXXXX-XXXX");
        }

        // do something once the form is completed properly
        if (isValid){
            // code would go here (in this case save the profile info)
            alert("Saved");
        }
            
        // set focus to email element
        $("#email").focus();
        
    });
    
    // set focus on initial load
    $("#email").focus();
    
});