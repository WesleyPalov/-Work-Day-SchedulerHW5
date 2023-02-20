// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// fun
$(function () {

var today = dayjs();
var dayWeek =  today.format('dddd, HH:mm');

var currentTime = today.format('HH');


//var saveBtn = document.querySelector(".container-lg");



// Display day of the week and time
$("#currentDay").text(dayWeek);

// this function checks the time and assighns background color


$(".time-block").each(function () {
  var blockHour = parseInt($(this).attr("id").split("hour-")[1]);
  
  if (blockHour < currentTime) {
    $(this).addClass("past");
    $(this).removeClass("future");
    $(this).removeClass("present");
}
else if (blockHour == currentTime) {
  $(this).removeClass("past");
  $(this).addClass("present");
  $(this).removeClass("future");
  }
  else {
    $(this).removeClass("present");
    $(this).removeClass("past");
    $(this).addClass("future");
}

});

// loads saved data from local storege 
function initPage() {
$("#hour-9 .description").val(localStorage.getItem("9AM"));
$("#hour-10 .description").val(localStorage.getItem("10AM"));
$("#hour-11 .description").val(localStorage.getItem("11AM"));
$("#hour-12 .description").val(localStorage.getItem("12PM"));
$("#hour-13 .description").val(localStorage.getItem("1PM"));
$("#hour-14 .description").val(localStorage.getItem("2PM"));
$("#hour-15 .description").val(localStorage.getItem("3PM"));
$("#hour-16 .description").val(localStorage.getItem("4PM"));
$("#hour-17 .description").val(localStorage.getItem("5PM"));
$("#hour-18 .description").val(localStorage.getItem("6PM"));
};


initPage();

// button to clear the local memory

$(".clrBtn").on("click", function(){
  localStorage.clear();
  
  initPage();
}); 




  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
 // console.log(test);
  userInput = $(this).siblings(".description").val().trim();
  
  textArea = $(this).siblings().text().trim();


  localStorage.setItem(textArea, JSON.stringify(userInput));
  })




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
