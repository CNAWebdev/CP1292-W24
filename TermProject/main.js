"use strict";

const preLoadAndStoreImages = () => {
    // preload the blank image and the back of the card
    const back = new Image();
    back.src = "images/back.png";
    const blank = new Image();
    blank.src = "images/blank.png";

    // create an array to store images
    const images = [];

    // get the number of images to store
    const numberOfImages = 4; // you can use getNumberOfImages()

    // preload the images into the array
    for (let i = 1; i <= numberOfImages; i++) {
        const img = new Image();
        img.src = `images/card_${i}.png`;
        images.push(img);
    }
    return images;
}


const storeCardsSrc = (images) => {
    const srcs = [];
    if (Array.isArray(images)) {
        images.forEach(img => {
            //store two copies of each;
            srcs.push(img.src);
            srcs.push(img.src);
        });
    }
    return srcs;
}

const createCardsHtml = (cards, backSrc) => {
    // set initial counter for card we are currently using
    let counter = 0;

    // initialze other variables
    let CardIndex = 0;
    let src = "";
    let html = "";

    // create the cards Html
    if (Array.isArray(cards)) {
        html = "<div>"; // opens the first div tag
        // randomize the card here in the furtre
        while (counter < 8) { // create 8 cards total
            html += `<a id="${cards[counter]}" href="#"><img src="images/back.png" alt=""></a>`;
            counter++;
        }
        html += "</div>"; //closes the div tag

    }
    return html;
}

$(document).ready(() => {
    // $("#tabs").tab();

    //initialize variables
    let selection = 0;
    let isOkToClick = false;
    let firstCard = null;
    let secondCard = null;
    const flippedcard = [];

    // preloading the images
    const images = preLoadAndStoreImages();
    // building our deck
    const cards = storeCardsSrc(images);
    // getting our html
    const html = createCardsHtml(cards, "images/back.png");
    // displaying the html
    $("#cards").html(html);

    $("#cards").find("a").each((index, a) => {
        $(a).click((evt) => {
            evt.preventDefault();
            // disable flipping when 2 cards have been selected
            if (selection >= 2) {
                return;
            }
            const a = $(evt.currentTarget);


            // flip card

            // storing our first and second card for checking against each other
            if (selection === 0) {
                firstCard = a.attr("id");
            } else if (selection === 1) {
                secondCard = a.attr("id");
            }
            // mark that first card is flipped
            const img = $(a.find("img")[0]);
            
            // alert(img.attr("src"));
            if (img.attr("src")!=="images/back.png"){
                return;
            } // disable flip of this card
            img.attr("src",a.attr("id")); // flips the card
            flippedcard.push(img);
            selection++;

            //wait for 2nd card to be flipped
            // once 2nd card if flipped

            // check if 2 cards are the same
            if (selection === 2){
                if (firstCard === secondCard) {
                    alert("its a match!");
                    // count the match
                    // remove cards from board
                }else{
                    // flip cards back
                   // flippedcard[0].attr("src","images/back.png"); // flips the card back
                    //flippedcard[1].attr("src","images/back.png"); // flips the card back
                    flippedcard.pop().attr("src","images/back.png"); // flips the card back;
                    flippedcard.pop().attr("src","images/back.png"); // flips the card back;
                    alert("no match!");
                }
                selection = 0;
                
            }
            // if not flip the cards back over

            // if they are match then increase our count, and remove cards

        });
});
})
