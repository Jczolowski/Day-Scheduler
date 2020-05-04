$(document).ready(function () {





doInit();

function doInit(){
    getCurrentDay();
    pastPresentFuture();
    retrieveDescriptions();

}


$(".save-btn").on("click" , function (){

   
   const timeId = $(this).siblings(".description").attr("data-time");

   
   const userInput = $(this).siblings(".description").val();

   
   localStorage.setItem(timeId, userInput);


})


function retrieveDescriptions() {

    const descriptions = $(".description");

    $(descriptions).each(function (i, element) {

        const timeid = $(element).attr("data-time");

        const description = localStorage.getItem(timdId);

        $(element).text(description);
    })
    
}

function pastPresentFuture() {

const currentHour = moment().hours();




const descriptions = $(".description");

$(descriptions).each(function(index, element) {



const currentTimeOfBlock = parseInt($(element).attr("data-time"));


if(currentTimeOfBlock < currentHour) {
    $(element).addClass("past");
 }
else if (currentTimeOfBlock == currentHour){
    $(element).addClass("present");
}
else {
    $(element).addClass("future");

        }
    })
}



function getCurrentDay() {


const currentDay = moment().format("dddd. MMMM Do");


$("#currentDay").text(currentDay);

}

})