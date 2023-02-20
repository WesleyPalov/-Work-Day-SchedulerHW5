Application Description
This is a basic day planner app that loops through the hours of 8am - 5pm(typical working hours) for a specific date, which is the current day that the user opens the app. The app uses moment.js to handle time. The app also allows the user to enter and save text into any description field that has a class of future. The data will be saved to the localStorage of the browser. The past hours are highlighted gray, the current hour red, and future hours green.

Narrative to try to accomplish:
Create an simple app that uses bootstrap, jquery, dayjs fontawesome, & google fonts
App is a simple day scheduler of typical working hours in a day.
Follows specific current date of when the user opens the app and use those hours of that day.
Allow the user to save text for each hour and change row color depending if it is a past, present for future hour.
Data of text is to be stored in localStorage of the browser until page is restarted. Refreshed page should still keep the localStorage.
User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
Acceptance Criteria
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

WHAT WAS DONE:
Done: listener for click events on the save button. This code
use the id in the containing time-block as a key to save the user input in
local storage. Using `this` reference in the click listener
function DOM traversal is used to get the "hour-x" id of the
time-block containing the button that was clicked

DONE: Added code to apply the past, present, or future class to each time
block by comparing the id to the current hour. Using the id
attribute of each time-block to conditionally add or remove the
past, present, and future classes? Day.js is used to get the
current hour in 24-hour time

DONE: Code has been added to get any user input that was saved in localStorage and set
the values of the corresponding textarea elements. The id
attribute of each time-block is used to do this.

DONE: Code added to display the current date in the header of the page.
