"use strict"

$(document).ready(() => {

    $('#submit').click(() => {

        const myinput = $('#myinput').val();

        let mynum = parseFloat(myinput);
        try {
            if (mynum === 0) throw new RangeError("Number can't be 0");
            mynum = 1/mynum
            if (isNaN(mynum)) throw new Error("Not a Number");
            if (!isFinite(mynum)) throw new RangeError("number must be finite");
            $('#output').text(mynum.toFixed(4));

            
            alert (x);
        }
        catch (error) {
            alert(`${error.name} - ${error.message}`);
            $("#output").text("");
        }
        finally{

            $('#myinput').val("");
        }
        $('#myinput').focus();

        
    });
})