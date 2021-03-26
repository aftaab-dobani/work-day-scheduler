//DOM Variables 
var currentDayMonthSpan = $("#currentDay");

function updateCurrentDate(){
    currentDayMonthSpan.text(moment().format("dddd, MMMM d"));
}

console.log(moment().format("dddd, MMMM d"));

//Function 
updateCurrentDate();