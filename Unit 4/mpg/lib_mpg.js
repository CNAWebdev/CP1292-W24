"use strict";

// create an mpg object
const mpg = {
    // set miles to 0
    miles: 0,
    // set gallons to 0
    gallons:0,

    // create accessor property named isValid that will check to see if miles and gallons are 
    // set appropreatly
    get isValid() {
        if (isNaN(this.miles) || isNaN(this.gallons)){
            return false;
        }else if ( (this.miles <= 0) || (this.gallons <= 0) ){
            return false;
        }else{
            return true;
        }
    },
    
    // create a method named calculate that will return the miles per gallon
    calculate() {
        return this.miles/this.gallons;
    }
};