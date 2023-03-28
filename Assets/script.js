var save = $(".saveBtn")
var textAre = $(".description")

var timer = dayjs().hour()
var today = dayjs().format("MMMM D, YYYY hh:mm A");
$("#currentDay").text(today)

$(function () {
  save.on("click", function(event){
    event.preventDefault()
    var value = $(this).siblings(".description").val();
    var timeEl = $(this).parent().attr("id").split("-")[1]
    localStorage.setItem(timeEl, value)
  });

  $(".time-block").each(function(){
    var timeBlck = $(this).attr("id").split("-")[1]
    if(timer ===+ timeBlck){
      $(this).addClass("present");
    } else if (timer < timeBlck){
      $(this).removeClass("present")
      $(this).addClass("future")
    } else if (timer > timeBlck){
      $(this).removeClass("future")
      $(this).addClass("past")
    }
  })

  $("#hour-9 .description").val(localStorage.getItem("9"))
  $("#hour-10 .description").val(localStorage.getItem("10"))
  $("#hour-11 .description").val(localStorage.getItem("11"))
  $("#hour-12 .description").val(localStorage.getItem("12"))
  $("#hour-13 .description").val(localStorage.getItem("13"))
  $("#hour-14 .description").val(localStorage.getItem("14"))
  $("#hour-15 .description").val(localStorage.getItem("15"))
  $("#hour-16 .description").val(localStorage.getItem("16"))
  $("#hour-17 .description").val(localStorage.getItem("17"))
});
