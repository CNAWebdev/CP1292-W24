"use strict";

const calculateDiscount = (customer, subtotal) => {
    // convert the following if statement to a swtich statemnt
    // and use conditional operator if applicable
    let discountrate = 0;
    switch(customer) {
      
        case "reg":
            if (subtotal >= 100 && subtotal < 250) {
                discountrate = .1;
            } else if (subtotal >= 250 && subtotal < 500) {
                discountrate =  .25;
            } else if (subtotal >= 500) {
                discountrate = .3;
            } else {
                discountrate= 0;
            }
            break;
        case "loyal":
            discountrate = .3;
            break;
        case "honored":    
            discountrate = (subtotal < 500) ? .4 : .5;
    }
    return discountrate;
    
        // if (customer == "reg"){
        //     if (subtotal >= 100 && subtotal < 250) {
        //         return .1;
        //     } else if (subtotal >= 250 && subtotal < 500) {
        //         return  .25;
        //     } else if (subtotal >= 500) {
        //         return .3;
        //     } else {
        //         return 0;
        //     }
        // }else if (customer == "loyal"){
        //     return .3
        // }else if (customer =="honored"){
        //     if (subtotal < 500){
        //         return .4;
        //     }
        //     else{
        //         return .5;
        //     }
        // }
};

$( document ).ready( () => {

    $("#calculate").click( () => {
        // get customerType
        const customerType = $("#type").val();
        // calculate subtotal with a default of 0
        let subtotal = $("#subtotal").val() || 0;
        // make sure subtotal is a floating point
        subtotal = parseFloat(subtotal);

        //calculate discount percentage
        const discountPercent = calculateDiscount(customerType,subtotal);

        //calculate discount Amount
        const discountAmount = subtotal *discountPercent;

        //calculate the invoice total
        const invoiceTotal = subtotal - discountAmount;

        // update forme with values fixed to 2 decimal points
        $("#subtotal").val( subtotal.toFixed(2));
        $("#percent").val( (discountPercent * 100).toFixed(2));
        $("#discount").val(discountAmount.toFixed(2));
        $("#total").val(invoiceTotal.toFixed(2));

        // set focus on type drop-down when done
        $("#type").focus();
    });

    // set focus on type drop-down on initial load
    $("#type").focus();
});

