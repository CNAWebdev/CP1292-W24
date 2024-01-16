"use strict";

// globally set winning total
const winningTotal = 50;

// globally function get a random number (roll the die)

const getRandomNumber = (max) => {
    let rand = null;
    if (!isNaN(max)){
        rand = Math.random();
        rand = Math.floor(rand * max);
        rand = rand + 1;  
    }
    return rand;
};

// globally function to change the current player
// update the text to indicate the name of the current player
// after player change but still inside the function set die value to 0, total to 0 and put the focus on #roll
const changePlayer = () => {
    if ( $('#current').text() == $('#player1').val()){
        $('#current').text( $('#player2').val() );
    }else{
        $('#current').text( $('#player1').val() );
    }

    $('#die').val("0");
    $('#total').val("0");
    $('#roll').focus();
};

// when document is ready load this code
$( document ).ready( () => {

    // function to start new game on click of #new_game button 
    // popup a warning if there are not names for player1 or player2
    $('#new_game').click( ()=> {
        $('#score1').val("0");
        $('#score2').val("0");

        if ( $('#player1').val() == ""  || $('#player2').val() == "" ){
            alert("Please enter player names")
        }else{
            $('#turn').removeClass("hide")
            changePlayer();
        }
    });

    // function to roll the die and keep a running total updating the total and the die value, as well as the running total,
    // if a die roles a 1 then change the player setting the total to 0
    $('#roll').click( () => {
        let total = parseInt ( $('#total').val() );
        const die = getRandomNumber(6);

        if ( die == 1 ){
            total = 0;
            changePlayer();
        }else{
            total = total + die;
        }

        $('#die').val(die);
        $('#total').val(total);
    });

    // write runction so that if hold is clicked add the total into the players score, check to see
    // if the score is greater then the winning total, if so alert that the current player wins
    // if not change the player
    $('#hold').click( () => {
        let score = 0;
        const total = parseInt( $('#total').val() );

        // update score for current player
        if ($('#current').text() == $('#player1').val() ){
            score = $('#score1');
        } else{
            score = $('#score2');
        }

        score.val( parseInt( score.val() ) + total );
        // check score against winning total
        if (score.val() >= winningTotal){
            alert ($('#current').text() + " WINS!");
        }else{
        // change player
            changePlayer();
        }
    });

    // once page loades display the winning total from the gloabl variable
    $('#winning_total').text(winningTotal);
    // put the focus on #player1
    $('#player1').focus();

});