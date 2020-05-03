
$(document).ready(function () {
    function getCurrentDay() {
        const currentDay = moment().format("dddd, MMMM Do");
        console.log(currentDay)
        $("#currentDay").text(currentDay);
    }
    getCurrentDay();
})


