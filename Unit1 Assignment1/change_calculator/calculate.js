"use strict";

$(document).ready(() => {
    $("#calculate").click(() => {
        // get the number in cents from the user
        let cents = parseInt($("#cents").val());

        // check that it is a good input
        if (isNaN(cents) || cents < 0 || cents > 99) {
            alert("Please enter a valid number between 0 and 99!");
        } else {
            // calculate the number of quarters
            let quarters = cents / 25;
            quarters = Math.floor(quarters);
           
            // update the cents by removing the value of the quarters
            cents = cents % 25; // alternatly cents = cents - (25*quarters)

            // calculate the number of dimes
            let dimes = cents / 10;
            dimes = Math.floor(dimes);
           
            // update the cents by removing the value of the dimes
            cents = cents % 10;

            // calculate the number of nickels
            let nickels = cents / 5;
            nickels = Math.floor(nickels);
           
            // update the cents by removing the value of the nickels
            cents = cents % 5;

            let pennies = cents;

            $("#quarters").val( quarters );
            $("#dimes").val( dimes );
            $("#nickels").val( nickels );
            $("#pennies").val( pennies );

            // sete focus on cents text box
            $("cents").focus();
          
        }



    }); // end click() method

    // set focus on cents text box on initial load
    $("#cents").focus();

}); // end ready() method