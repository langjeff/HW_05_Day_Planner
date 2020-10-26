//GET CURRENT DATE FROM MOMENT
var today = moment();
console.log(today.format()); //console.log to test return

//DISPLAY DATE IN HEADER 
$("#currentDay").text(today.format('dddd, MMMM Do YYYY')); 

// //GET CURRENT HOUR FROM MOMENT TIME
// var currentHour = [];

//FUNCTION TO RETRIEVE ACTIVITIES FROM LOCAL STORAGE
//creates storage array for events
var plannerEvents = {
    nineAM: "",
    tenAM: "",
    elevenAM: "",
    twelvePM: "",
    onePM: "",
    twoPM: "",
    threePM: "",
    fourPM: "",
    fivePM: "",
};

//FUNCTION TO RENDER EVENTS FROM LOCAL STORAGE AND WRITE TO INPUT ELEMENTS
renderEvents();
function renderEvents () {
    //checks local storage for localScores item if empty return
    if(JSON.parse(localStorage.getItem("eventStorage")) === null) {
        return;
    }
    // if localScores is in local storage, parses string to plannerEvents array
    plannerEvents = JSON.parse(localStorage.getItem("eventStorage"));
    console.log(plannerEvents);// console.log to check array
    // sets variable for input elements
    var eventDisplay = $('input');
    //for loop for input to set value to what was retrieved from local storage
    for (var i=0;i < eventDisplay.length;i++) {
    eventDisplay[i].value = plannerEvents[eventDisplay[i].id];
    }
}

//FUNCTION TO STORE INPUTS TO LOCAL STORAGE
$(document).ready(function() {
    $("input").on("focus", function(event){
        $(event.target).on("keyup", function(){
            plannerEvents[event.target.id] = event.target.value;
        });
    });
    $(".btn").on("click", function(event){
        localStorage.setItem("eventStorage", JSON.stringify(plannerEvents))
    });
    
});

//FUNCTION TO CHECK CURRENT TIME AGAINST ELEMENT TIME AND CHANGE CLASS TO APPLY CORRECT FORMATTING
eventClass();
function eventClass() {
    //create variable for input elements
    var eventDisplay = $('input');
    for (var j=0; j<eventDisplay.length; j++) {
        eventDisplayId = $(eventDisplay[j]);
        eventDisplayHour = eventDisplayId.data("hour");
        // console.log(eventDisplayHour);
    
        var currentHour = moment().format('ha');
        console.log(currentHour);
        var eventHour = moment(eventDisplayHour, 'ha').format('ha');
        console.log(eventHour);

        
        if(eventHour === currentHour) {
            eventDisplayId.attr("class","form-control description present"); 
        } else if (eventHour<currentHour) {
            eventDisplayId.attr("class","form-control description past");
        }
        var bool1 = (eventHour<currentHour);
        console.log(bool1);
    }
}