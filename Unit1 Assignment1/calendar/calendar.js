"use strict";

const getMonthText = currentMonth => {
	if (currentMonth === 0) { return "January"; }
	else if (currentMonth === 1) { return "February"; }
	else if (currentMonth === 2) { return "March"; }
	else if (currentMonth === 3) { return "April"; }
	else if (currentMonth === 4) { return "May"; }
	else if (currentMonth === 5) { return "June"; }
	else if (currentMonth === 6) { return "July"; }
	else if (currentMonth === 7) { return "August"; }
	else if (currentMonth === 8) { return "September"; }
	else if (currentMonth === 9) { return "October"; }
	else if (currentMonth === 10) { return "November"; }
	else if (currentMonth === 11) { return "December"; }
};

const getLastDayofMonth = currentMonth => {
	const datetime = new Date();
	datetime.setMonth(currentMonth+1);
	datetime.setDate(0);
	return datetime.getDate();
	
};

$(document).ready(function(){
		// get todays date, and the current month
		const today = new Date();
		//  today.setMonth(12);   // use to test for other months
		const thisMonth = today.getMonth();

		// display month and year
		$("#month_year").text(`${getMonthText(thisMonth)}  ${today.getFullYear()}`);

		const lastDayofMonth = getLastDayofMonth(thisMonth);
		
		// grab info in calender block (first table row)
		let rows = $("#calendar").html();
		// loop through the days of the month and add to the calendar
		for (let i=0; i<lastDayofMonth; i++){
			//  use date object to finish 
			today.setDate(i +1);   //get the day of the month (don't want day 0)

			const date = today.getDate();   /// get day number 1 through 28, 30 or 31
			const day = today.getDay(); // get day of week Sat Sun ...

			// begin row if it is sunday or first day of the month
			if ( date === 1 || day === 0 ){
				rows += '<tr>';
			}
			// add blank entries at the beginning of the calendar until
			// we get to the day of the week the month starts on
			let start =0;
			if ( date ===1 ){
				while (start< day){
					rows+="<td></td>";
					start++;
				}
			}

			// add the date to the calendar
			rows +=`<td>${ date }</td>`

			// pad the last week with any extra days
			if ( date === lastDayofMonth ){
				start = day;
				while (start < 6){
					rows += "<td></td>";
					start++;
				}
			}

			// end the row if its satrday, or the last day of the month
			if ( date===lastDayofMonth || day === 6 ){
				rows += '</tr>';
			}
		}

		$("#calendar").html(rows);
});