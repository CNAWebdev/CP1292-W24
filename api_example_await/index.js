"use strict";

const endpoint = "https://jsonplaceholder.typicode.com/users/11";

const showInfo = (json) => {
    if (json === "{}") {
        throw new Error("No user found");
    }
    $("#content").text(json.name);
}

const showError = (error) => {
    $("#content").text(error);
}

const getJson = async ( response ) => {
    if (response.ok){
        return response.json();
    }
    throw new Error("Fetch Failed");
}

$(document).ready(async () => {
    try {
        const response = await fetch(endpoint);
        const json = await getJson(response);
        showInfo(json);
    }catch(error){
        showError(error);
    }
    // above is and example using async and await instead of fetch then
    //
    // fetch(endpoint)
    //     .then(response => {
    //         if (response.ok) {
    //             return response.json()
    //         }
    //         throw new Error("Fetch Failed");
    //     })
    //     .then(json => showInfo(json))
    //     .catch(error => showError(error));
});