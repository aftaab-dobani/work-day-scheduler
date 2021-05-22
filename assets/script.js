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

  hourUpdater();

  //variable to check time updates
  var interval = setInterval(hourUpdater, 15000);

  
});


