//Variable
var userInput = $("#description");
var currentDayMonthSpan = $("#currentDay");
var timeBlock = $("#time-block");

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
console.log("showing time");

button1.on("click", function(){
    console.log("button clicked")
});

//Color Change 
timeBlock.each(function(i, element){
    //var hour = replace  (incomplete)
    if (hour===CurrentHour) {
        $(element).addClass("present")
    } else if (hour > CurrentHour) {
        $(element).addClass("")
    }
})


//Save button & Local Storage 
//1.function to save the description
button1.on("click", function(){
    var value = userInput1.value
    localStorage.setItem("print", value)
    var secured = localStorage.getItem("print")
    console.log(clicked);
    
})


$("9AM .description").val(localStorage.getItem("9AM"));


//Function 
updateCurrentDate();


