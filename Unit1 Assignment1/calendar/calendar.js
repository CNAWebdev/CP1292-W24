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
		const thisMonth = today.getMonth();

		// display month and year
		$("#month_year").text(`${getMonthText(thisMonth)}  ${today.getFullYear()}`);

		const lastDayofMonth = getLastDayofMonth(thisMonth);
		
		// grab info in calender block (first table row)
		let rows = $("#calendar").html();
		// loop through the days of the month and add to the calendar
		for (let i=0; i<lastDayofMonth; i++){
			//  use date object to finish 
			if ((i+1) % 7 ===1){
				rows += '<tr>';
			}

			rows +=`<td>${i+1}</td>`

			if ((i+1)%7 === 0){
				rows += '</tr>';
			}
		}

		$("#calendar").html(rows);
});