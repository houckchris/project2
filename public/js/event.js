$(document).ready(function() {
    // EVENT CONTAINER HOLDS ALL AVAILABLE EVENTS
    var eventContainer = $('.eventContainer');
    // var eventCategorySelect = $('#category');
    // VAR TO HOLD EVENTS
    var events;

    // FUNCTION TO GRAB EVENTS FROM THE DB AND UPDATE THE VIEW
    function getEvents(){
        // AJAX REQUEST FOR EVENTS DATA
        $.get("/api/events", function(data){
            console.log("Events", data);
            events = data;
            if (!events || !events.length){
                displayEmpty();
            } else {
                initializeRows();
            }
        });
    }

    // FUNCTION TO HANDLE APPENDING CONSTRUCTED HTML
    function initializeRows(){
        eventContainer.empty();
        var eventsToAdd = [];
        for (var i=0; i<events.length; i++) {
            eventsToAdd.push(createNewRow(events[i]));
        }
        eventContainer.append(eventsToAdd);
    }

    // FUNCTION TO CREATE A POST'S HTML
    function createNewRow(event){

    }

    // HANDLE UPDATES
        // PSEUDOCODE PHASE TWO

    // FUNCTION TO UPDATE EVENTS BY SIGNING UP FOR THEM
        // PSEUDOCODE PHASE TWO

    // FUNCTION TO DISPLAY EMPTY EVENTS WHEN THERE ARE NONE TO SHOW
    *
});