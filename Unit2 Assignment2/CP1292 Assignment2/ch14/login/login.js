"use strict";

const getCookieByName = name => {
    const cookies = document.cookie;

    let start = cookies.indexOf(name + "=");
    // deal with it not being found
    if ( start === -1 ) {
        return "";
    }else { // get the cookie value
        start = start + name.length +1;
        let end = cookies.indexOf(";", start);
        // deal with not finding the end
        if ( end === -1 ){
            end = cookies.length;
        }
        const cookieValue = cookies.substring(start, end);
        return decodeURIComponent(cookieValue);
    }
    
};

const setCookie = (name, value, days) => {
    let cookie = name + "=" + encodeURIComponent(value);
    if (days){
        cookie += "; max-age=" + days * 24 * 60 * 60;
    }
    cookie += "; path=/";
    document.cookie = cookie;
};

const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";
};

const goToPage = url => {
    location.href = url;
};