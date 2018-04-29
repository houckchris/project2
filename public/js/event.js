$(document).ready(function() {
    // EVENT CONTAINER HOLDS ALL AVAILABLE EVENTS
    var eventContainer = $('.eventContainer');
    // var eventCategorySelect = $('#category');
    // VAR TO HOLD EVENTS
    var events;
    getEvents();
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
        // Empty that bad boy...
        eventContainer.empty();
        // And assign put in the events title...
        var newEventsViewTitleDiv = $("<div>");
        newEventsViewTitleDiv.addClass("col s12");
        var newEventsViewTitleH2 = $("<h2>");
        newEventsViewTitleH2.addClass("eventHeading");
        newEventsViewTitleH2.text("Upcoming Events");
        newEventsViewTitleDiv.append(newEventsViewTitleH2);
        eventContainer.append(newEventsViewTitleDiv);
        // ...then run through the events available
        var eventsToAdd = [];
        for (var i=0; i<events.length; i++) {
            // ...and create a new div for each and push it to the eventsToAdd array...
            eventsToAdd.push(createNewRow(events[i]));
        }
        // ...append that array to the container
        eventContainer.append(eventsToAdd);
    }

    // FUNCTION TO MAKE HTML FOR EACH NEW EVENT
    function createNewRow(event){
        // CREATE EVENT DIV
        var eventCard = $("<div>");
        eventCard.addClass("col s12 eventEnter event"+event.id);
        // CREATE ROW FOR WITHIN EVENTENTER DIV
        var newEventRow = $("<div>");
        newEventRow.addClass("row");
        // CREATE LOGO DIV FOR WITHIN ROW DIV
        var newEventLogoDiv = $("<div>");
        newEventLogoDiv.addClass("col s4");
        // CREATE LOGO IMG FOR WITHIN LOGO DIV
        var newEventLogo = $("<img>");
        newEventLogo.addClass("eventLogo");
        newEventLogo.attr("src", event.Org.orgImage);
        // PUT LOGO IMG INTO LOGO DIV
        newEventLogoDiv.append(newEventLogo);
        // PUT LOGO DIV INTO ROW
        newEventRow.append(newEventLogoDiv);
        // CREATE EVENT INFO DIV
        var eventInfoDiv = $("<div>");
        eventInfoDiv.addClass("col s8");
        // CREATE EVENTDATE H3
        var eventDate = $("<h3>");
        eventDate.addClass("eventDate");
        eventDate.text(event.eventDate);
        // CREATE EVENTTEXT DESCRIPTION
        var eventText = $("<p>");
        eventText.addClass('eventText');
        eventText.text(event.eventDesc);
        // CREATE LINK FOR BOOKING THE EVENT
        var bookEvent = $('<a>');
        bookEvent.addClass('waves-effect waves-light btn-small');
        // bookEvent.attr("href", "#");
        bookEvent.text('Book Event!');
        // ADD EVENTDATE, EVENTTEXT, AND BOOKEVENT TO THE EVENTINFODIV
        eventInfoDiv.append(eventDate);
        eventInfoDiv.append(eventText);
        eventInfoDiv.append(bookEvent);
        // APPEND EVENTINFODIV INTO NEWEVENTROW
        newEventRow.append(eventInfoDiv);
        // APPEND NEWEVENTROW INTO EVENTCARD
        eventCard.append(newEventRow);
        return eventCard;
    }

    // HANDLE UPDATES
        // PSEUDOCODE PHASE TWO

    // FUNCTION TO UPDATE EVENTS BY SIGNING UP FOR THEM
        // PSEUDOCODE PHASE TWO

    // FUNCTION TO DISPLAY EMPTY EVENTS WHEN THERE ARE NONE TO SHOW
    function displayEmpty(){
        eventContainer.empty();
        var noEventsToShowDiv = $("<div>");
        noEventsToShowDiv.addClass("col s12");
        var noEventsH2 = $("<h2>");
        noEventsH2.addClass("eventHeading");
        noEventsH2.text("No events to show right now!");
        var noEventsBody = $("<h3>");
        // noEventsBody.addClass("tbd");
        noEventsBody.text('Try again soon!');
        noEventsToShowDiv.append(noEventsH2);
        eventContainer.append(noEventsToShowDiv);
    }
});