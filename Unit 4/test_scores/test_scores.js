"use strict";

$(document).ready( () => {
    // set scores to empty array
    const scores = [];

    $("#add_score").click( () => {
        // get the score from the #score element
        const score = parseFloat( $("#score").val() );
                
        // if score is not avlid show a warning
        if (isNaN(score) || score < 0 || score > 100) {
            $("#add_score").next().text("Score must be from 0 to 100");
            // alert("Score must be from 0 to 100");
        }
        else {
            // clear any errors
            $("#add_score").next().text("");
            // add score to scores array 
            scores.push(score);

            // display all scores
            $("#all").text(scores.join(", "))
    

            // calculate and display average score
            const total = scores.reduce( ( tot, val ) => tot + val, 0 );
            // above line is the same a the code below
            /////////
            // let total = 0;
            // for (let i=0;i<scores.length;i++){
            //     total = total + scores[i];
            // }
            //////////
            const avg = total/scores.length;
            $("#avg").text(avg.toFixed(2));
    
            // display last 3 scores
            const len = scores.length;
            const lastScores = (len <=3) ? scores.slice() : scores.slice(len-3,len);
            // above line is the same as the code below
            ///////////////
            //let lastScores  // this would be here for scoping reasons
            //if (len<=3){
            //  lastScores = scores.slice();    
            //}else{
            //     lastScores = scores.slice(len-3, len);
            // }
            ////////////////
            lastScores.reverse();
            $("#last").text(lastScores.join(", "));
        }
        
        // get text box ready for next entry
        $("#score").val("");
        // set focus to the score element
        $("#score").focus();
    
    });

    // set focus on initial load
    $("#score").focus();
});