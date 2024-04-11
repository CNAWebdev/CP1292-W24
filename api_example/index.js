"use strict";

const endpoint = "https://jsonplaceholder.typicode.com/users/2";

const showInfo = ( json ) => {
    if (json === "{}"){
        throw new Error("No user found");
    }
    $("#content").text( json.name);
}

const showError = ( error ) => {
    $("#content").text( error );
}

$(document).ready( () => {
    fetch(endpoint)
        .then( response => {
            if (response.ok){
                return response.json()
            }
            throw new Error ("Fetch Failed");
        })
        .then(json => showInfo(json))
        .catch(error => showError(error));
});