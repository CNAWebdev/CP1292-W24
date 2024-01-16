"use strict";

$(document).ready(() => {
    // what to do once the button is clicked
    $("#countdown").click(() => {

        // get data from webpage
        const eventName = $('#event').val();
        const eventDate = $('#date').val();
        const messageLabel = $('#message');

        // make sure user entered task and event date 
        if (eventName.length ==0 || eventDate.length == 0){
            messageLabel.text( "Please enter both a name and a date." );
            return;
        }

        // make sure event date string has two slashes 
        const dateParts = eventDate.split("/");
        if (dateParts.length !=3){
            messageLabel.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }

        // make sure event date string has a 4-digit year
        const year = eventDate.substring(eventDate.length -4);
        if (isNaN(year)){
            messageLabel.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }

        // convert event date string to Date object and check for validity
        let date = new Date(eventDate);
        if ( date == "Invalid Date" ){
            messageLabel.text( "Please enter the date in MM/DD/YYYY format." );
            return;
        }

        // capitalize each word of event name (after that capitolize only the first letter in each name)
        let formattedName ="";
        const words = eventName.split(" ");
        for (let i in words){
            const firstLetter = words[i].substring(0,1).toUpperCase();
            const word = firstLetter + words[i].substring(1).toLowerCase();
            formattedName += word.padEnd(word.length +1);
        }
        formattedName = formattedName.trimEnd();
        
        // calculate days
        const today = new Date();
        const msFromToday = date.getTime() - today.getTime();
        const msForOneDay = 24 * 60 * 60 * 1000;  // hrs * mins * secs * milliseconds
        let daysToDate = Math.ceil (msFromToday / msForOneDay);

        // create and display message
        let msg = "";
        date = date.toDateString();
        if (daysToDate == 0){
            msg = `Horray! Today is ${formattedName}! (${date})`;
        }else if (daysToDate > 0) {
            msg = `${daysToDate} day(s) until ${formattedName}! (${date})`;
        }else{
            daysToDate = Math.abs(daysToDate);
            msg = `${formattedName} happened ${daysToDate} day(s) ago. (${date})`;
        }
        


        messageLabel.text(msg);
    });

    // start form focused on the #event element.
    $('#event').focus();

});