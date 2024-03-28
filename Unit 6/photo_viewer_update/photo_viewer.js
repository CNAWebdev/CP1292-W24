"use strict";

const domain = "https:/jsonplaceholder.typicode.com";
//create getPhoto function
const getPhoto = async ( id ) => {
    if (id <1 || id > 10000){
        return Promise.reject(
            new RangeError("Photo ID must be between 1 and 5000")
        );
    } else {
        console.log(`${domain}/photos/${ id }`);
        const r1 = await fetch(`${domain}/photos/${ id }`);
        const photo = await r1.json();
          
        const r2 = await fetch(`${domain}/albums/${photo.albumId}`);
        const album = await r2.json();
        photo.album = album;

        const r3 = await fetch(`${domain}/users/${photo.album.userId}`);
        const user = await r3.json();
        photo.album.user = user;

        return photo    /// this is automatically a promise
    }

}


const displayPhotoData = ( photo ) => {
    console.log(photo);
    let html = `<img src="${photo.thumbnailUrl}" alt="${photo.title}">`;
    html    += `<h4>Title: ${photo.title}</h4>`;
    html    += `<p>Album: ${photo.album.title}</p>`;
    html    += `Posted by: ${photo.album.user.username}`;
    $("#photo").html(html);
}

// deal with errors
const displayError = ( error ) =>{
    let html = `<span>${error}</span>`;
    $("#photo").html(html);
}

// don't load click methods until document is ready
$(document).ready( () => {
    // create the on click method for the button
    $("#view_button").click( async () => {
        const photo_id = $("#photo_id").val();
        try{
            const photo = await getPhoto(photo_id);
            displayPhotoData(photo);
        } catch (error){
            displayError(error)
        }

    });
});