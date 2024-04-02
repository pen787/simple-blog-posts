// place files you want to import through the `$lib` alias in this folder.
export function getCurrentDateFormatted() {
	// Get current date
	var currentDate = new Date();
 
	// Array of month names
	var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
	  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	];
 
	// Get various date components
	var day = currentDate.getDate();
	var monthIndex = currentDate.getMonth();
	var year = currentDate.getFullYear();
	var hours = currentDate.getHours();
	var minutes = currentDate.getMinutes();
	var seconds = currentDate.getSeconds();
	var timeZone = "(Indochina Time)"; // You can change this to your desired timezone
 
	// Get day name
	var dayIndex = currentDate.getDay();
	var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	var dayName = dayNames[dayIndex];
 
	// Format minutes and seconds with leading zero if necessary
	// @ts-ignore
	minutes = (minutes < 10 ? '0' : '') + minutes;
	// @ts-ignore
	seconds = (seconds < 10 ? '0' : '') + seconds;
 
	// Construct formatted date string
	var formattedDate = dayName + " " + monthNames[monthIndex] + " " + day + " " + year +
	  " " + hours + ":" + minutes + ":" + seconds + " GMT" + 
	  currentDate.getTimezoneOffset() + " " + timeZone;
 
	return formattedDate;
 }