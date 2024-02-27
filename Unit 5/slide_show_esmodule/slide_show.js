import { getToggleHandler, loadImages, startSlideShow } from "./lib_slide_show.js";

$(document).ready( () => {
    // create the slideShow object 
    //const slideShow = createSlideShow(); not required because of iify module
    
    const slides = [
        {href:"release.jpg", title:"Catch and Release"}, 
        {href:"deer.jpg", title:"Deer at Play"},
        {href:"hero.jpg", title:"The Big One!"},
        {href:"bison.jpg", title:"Roaming Bison"}    
    ];
    
    $("#play_pause").click(getToggleHandler());  
    
    loadImages(slides);
    startSlideShow($("#image"), $("#caption"));
});

// have to add myapp. infront of slideshow to access the module


/// remove reference to myapp. because the modules is handling everything
// because we don't return this anymore we need to unchain startSlideShow