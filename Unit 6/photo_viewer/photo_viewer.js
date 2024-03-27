"use strict";

const domain = "https:/jsonplaceholder.typicode.com";
//create getPhoto function
const getPhoto = ( id ) => {
    if (id <1 || id > 10000){
        return Promise.reject(
            new RangeError("Photo ID must be between 1 and 5000")
        );
    } else {
        console.log(`${domain}/photos/${ id }`);
        return fetch(`${domain}/photos/${ id }`)
            .then( response => response.json() );  // resolves to photo object
    }

}
const getPhotoAlbum = ( photo ) =>{
    return fetch(`${domain}/albums/${photo.albumId}`)
        .then( response => response.json() ) // resolves to album object
        .then( album => {
            photo.album = album; // add album property
            return photo;       // wraps promise object
        });
}

const getPhotoAlbumUser = ( photo ) => {
    return fetch(`${domain}/users/${photo.album.userId}`)
        .then( response => response.json() )
        .then( user => {
            photo.album.user = user;
            return photo;
        });
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
    $("#view_button").click( () => {
        const photo_id = $("#photo_id").val();
        getPhoto(photo_id)
            .then(getPhotoAlbum)
            .then(getPhotoAlbumUser)
            .then(displayPhotoData)
            .catch(displayError);
    });
});