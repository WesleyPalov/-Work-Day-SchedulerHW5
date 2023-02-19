// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// fun
var today = dayjs();
var dayWeek =  today.format('dddd, HH:mm');

var currentTime = today.format('HH');
var test = document.getElementById("hour-12"); 

var saveBtn = document.querySelector(".container-lg");
var nineAm = $("#9AM");
var tenAm = $("10AM");


// getting info from local storage
function initPage() {

 
  var init9 = JSON.parse(localStorage.getItem("9AM"));
  nineAm.val(init9);


  console.log(nineAm);
 // var init10 = JSON.parse(localStorage.getItem("10:00 am"))
  //tenAm.val(init10);
};






  // Buttons (save to Local Storage)
  $(".saveBtn").on("click", function(){
 // console.log(test);
  userInput = $(this).siblings(".description").val().trim();
  //console.log(userInput);
  textArea = $(this).siblings("").text().trim();
  console.log(textArea);

  localStorage.setItem(textArea, JSON.stringify(userInput));
  })

//Checking time to determine present, past, or future
//$('.time-block').each(function() {
 // $(this).find('.text-area').val(availableHours[$(this).attr('data-time')].value);
//});



$(function () {
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
