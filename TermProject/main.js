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
            html += `<a id="${cards[counter]}" href="#"><img src="${cards[counter]}" alt=""></a>`;
            counter++;
        }
        html +="</div>"; //closes the div tag

    }
    return html;
}

$(document).ready( ()=> {
    // $("#tabs").tab();
    // preloading the images
    const images = preLoadAndStoreImages();
    // building our deck
    const cards = storeCardsSrc( images );
    // getting our html
    const html = createCardsHtml( cards,"images/back.png" );
    // displaying the html
    $("#cards").html( html );
})
