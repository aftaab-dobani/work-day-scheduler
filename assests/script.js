//Variable
var userInput = $("#description");
var currentDayMonthSpan = $("#currentDay");

//Button Var : created to insert into on click function 
var button1 = $("#saveBtn1");
var button2 = $("#saveBtn2");
var button3 = $("#saveBtn3");
var button4 = $("#saveBtn4");
var button5 = $("#saveBtn5");
var button6 = $("#saveBtn6");
var button7 = $("#saveBtn7");
var button8 = $("#saveBtn8");
var button9 = $("#saveBtn9");

//Header Date
function updateCurrentDate(){
    currentDayMonthSpan.text(moment().format("dddd, MMMM Do YYYY"));
    
}

//Save button & Local Storage 
//1.function to save the description

button1.on("click", function(){
    console.log('button clicked');
})



//Function 
updateCurrentDate();

