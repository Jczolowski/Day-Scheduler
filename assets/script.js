$(document).ready(function () {

getCurrentDay();

pastPresentFuture();


function pastPresentFuture() {
// get current hour
const currentHour = moment().hours();



//target description tag
const descriptions = $(".description");


//get current time that is stored on description block
const currentTimeOfBlock = parseInt($(descriptions[0]).attr("data-time"));


if(currentTimeOfBlock < currentHour) {
    $(descriptions[0]).addClass("past");
 }
else if (currentTimeOfBlock == currentHour){
    $(descriptions[0]).addClass("present");
}
else {
    $(descriptions[0]).addClass("future");

}

}



function getCurrentDay() {

//get the current day formatted
const currentDay = moment().format("dddd. MMMM Do");

//set the text of the current day element
$("#currentDay").text(currentDay);

}

})