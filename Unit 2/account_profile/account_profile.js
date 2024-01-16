"use strict";

const isDate = (date, datePattern) => {
    if (!datePattern.test(date)) { return false; }

    const dateParts = date.split("/");
    const month = parseInt( dateParts[0] );
    const day = parseInt( dateParts[1] );

    if ( month < 1 || month > 12 ) { return false; }
    if ( day > 31 ) { return false; }
    return true;
};

$( document ).ready( () => {

    $( "#save" ).click( () => {
        // if there is a previous error message clear it
        
        // get values entered by user


        // regular expressions for validity testing

        
        // check user entries for validity
            
        // set focus to email element
        
        
    });
    
    // set focus on initial load
    
});