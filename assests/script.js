//Header Date
var currentDayMonthSpan = $("#currentDay");

function updateCurrentDate(){
    currentDayMonthSpan.text(moment().format("dddd, MMMM Do YYYY"));
}

//Splits and hour and time ID
function timeBlocks() {
    $(".time-block").each(function() {
        console.log($(this).attr("id").split("-")[1]);
    });
}

//Save button
$(".saveBtn").on("click", function(){
    
}

//Function 
updateCurrentDate();
timeBlocks(); 