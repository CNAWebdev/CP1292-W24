"use strict";

// get date string
const getDateString = date =>
    `${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()}`;

const displayPicture = data =>{
    let html ="";
    if(data.error){ // display error message
        html += `<span class="error>${data.error.message}</span>`;
    }else if (data.code){ // problem - display message
        html += `<span class="error>${data.msg}</span>`;
    }else{  // success - display image/video data
        html += `<h3>${data.title}</h3>`
        const width = 700;
        switch (data.media_type){
            case "image":
                    html += `<img src="${data.url}" width="${width}" alt="NASA Photo"`;
                break;

            case "video":
                html += `<iframe src="${data.url}" frameborder="0" allowfullscreen ></iframe>`
                break;

            default:
                html += `<img src="images/notavailable.png" width="${width}" alt="NASA Photo"`;
        }

        // date and copyright
        html += `<div>${data.date}`;
        if (data.copyright){
            html += `<span class="right">&copy; ${data.copyright} </span>`
        
        }
        html += "</div>";
        // explanation
        html += `<p>${data.explanation}</p>`;
    }
    // display the HTML
    $("#display").html(html);
}

const getPictureData = ( dateObj ) =>{
     // make sure date string is in correct format
    let dateStr = getDateString(dateObj);

     // build URL for API request
     const domain ='https://api.nasa.gov/planetary/apod';
     const request = `?api_key=DEMO_KEY&date=${dateStr}`;
     const url = domain + request;

     // get the data
     fetch(url)
         .then (response => response.json())
         .then (json => displayPicture(json))
         .catch ( error => displayError(error));
}