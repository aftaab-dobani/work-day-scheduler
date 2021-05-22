$(document).ready(function () {
  $(".saveBtn").on("click", function () {
    var value = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");

    // saving to local storage & showing
    localStorage.setItem(time, value);
    $(".notfications").addClass("show");

    setTimeout(function () {
      $(".notification").addClass("show");
    }, 5000);
  });

  function hourUpdater() {
    var CurrentHour = moment().hours();

    $("time-block").each(function () {
      var blockHour = parseInt($(this).attr("id").split("-"[1]));

      if (blockHour < currentHour) {
        $(this).addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past");
        $(this).removeClass("present");
      } else {
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).removeClass("future");
      }
    });
  }
});

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
function updateCurrentDate() {
  currentDayMonthSpan.text(moment().format("dddd, MMMM Do YYYY"));
}
console.log("showing time");

button1.on("click", function () {
  console.log("button clicked");
});

//Color Change
timeBlock.each(function (i, element) {
  //var hour = replace  (incomplete)
  if (hour === CurrentHour) {
    $(element).addClass("present");
  } else if (hour > CurrentHour) {
    $(element).addClass("");
  }
});

//Save button & Local Storage
//1.function to save the description
button1.on("click", function () {
  var value = userInput1.value;
  localStorage.setItem("print", value);
  var secured = localStorage.getItem("print");
  console.log(clicked);
});

$("9AM .description").val(localStorage.getItem("9AM"));

//Function
updateCurrentDate();
