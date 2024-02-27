//  "use strict";   --- es modules are automatically use strict

// var myapp = myapp || {};  // module declaration is dones in a different spot

// myapp.slideShow = ( function ()  {      --- not requied module is object that doesn't need to be wraped in function

// Everything is private by default

// make methods available for export
export { loadImages, startSlideShow, getToggleHandler}

// we need a timer, a play state, a speed and an object of nodes and an object of images
let timer = null;
let play = true;
let speed = 2000;
// the nodes must include images and captions
const nodes = { image: null, caption: null };
// the image object must include a cache array and a counter
const img = { cache: [], counter: 0 };

// we must also have a function to stop the slideshow
const stopSlideShow = () => {
    clearInterval(timer);
};
// and we need a function to display the next image
const displayNextImage = () => {
    // img.counter = ++img.counter % img.cache.length;
    img.counter++;
    if (img.counter == img.cache.length) {
        img.counter = 0;
    }
    var image = img.cache[img.counter];
    nodes.image.attr("src", image.src);
    nodes.image.attr("alt", image.alt);
    nodes.caption.text(image.alt);

};

// public methods that have access to private variables and functions
//return {   // no return an functions need to be properly declared as functions
    // we need to be able to loadImages by passing a list of slides
     const loadImages = (slides) => {
        for (let slide of slides) {
            const image = new Image();
            image.src = "images/" + slide.href;
            image.alt = slide.title;
            img.cache.push(image);
        }
        // return this; // returns a reference to the slideshow object
    };
    // we need to be able to start a slide show, which will use a timer to display the next side based on the speed
    const startSlideShow = (image, caption) => {
        if (image && caption) {
            nodes.image = image;
            nodes.caption = caption;
        }
        displayNextImage();
        timer = setInterval(displayNextImage, speed);
        // return this;  // returns a reference to the slideshow object
    };
    // we need a way of toggling the play pause
    const getToggleHandler = () => {
        return evt => {
            if (play) {
                stopSlideShow();
            } else {
                this.startSlideShow();
            }
            const button = evt.currentTarget;
            button.value = (play) ? "Resume" : "Pause";
            play = !play;
        }
    };
//}

//})(); // function wrapper not required

