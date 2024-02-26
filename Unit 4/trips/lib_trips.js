"use strict";

// create a class called trip

class Trip {
    // it has a constructor that takes a destination, miles and gallons
    // this constructor sets destination as a string
    // miles and gallons aas numbers
    constructor(destination, miles, gallons){
        this.destination = destination;
        this.miles = parseFloat(miles);
        this.gallons = parseFloat(gallons);
    }

    // use a read only property (accessor property) to find if the values of the trip are valid
    get isValid(){
        if ((this.destination =="") ||isNaN(this.miles) || isNaN(this.gallons)){
            return false;
        }else if ((this.miles <=0 ) || (this.gallons <=0) ){
            return false;
        }else {
            return true;
        }
    }
    // use a read only property to get the miles per gallon of the trip
    get mpg() {
        return this.miles/this.gallons;
    }
    // provide a method that will output the details of this class named toString 
    toString(){
        const mpg = this.mpg.toFixed(2);
        return `${this.destination}: Miles - ${this.miles}; MPG - ${mpg}`;
    }
}
// create a class named trips
class Trips {
    // it has a constructor that sets a hidden value trips to a blank array
    constructor(){
        this._trips = [];
    }

    // add a push method to add a trip to the trips array
    
    push(trip){
        // make sure the item being added is a Trip before you add
        if (trip instanceof Trip){
            this._trips.push(trip);

        }
    }


    // create a read only property that gets the total miles per gallon for all the trips
    get totalMpg(){
        let totalMiles = 0;
        let totalGallons =0;
        for (let trip of this._trips){
            totalMiles = totalMiles + trip.miles;
            totalGallons = totalGallons + trip.gallons;
        }
        return totalMiles / totalGallons;
    }

    // provide a method that will output the details of this class named to String
    toString(){
        let str = "";
        for ( let trip of this._trips ) {
            str += trip.toString() + "\n";
        }
        str += "\nCumulative MPG: " +this.totalMpg.toFixed(2);
        return str;
    }
    
    
}