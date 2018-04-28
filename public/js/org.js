$(document).ready(function () {

    //Get references to the event creation form fields

    var orgNameSelect = $("#orgName");
    var eventTitleInput = $("#eventTitle");
    var eventDescInput = $("#eventDesc");
    var eventDateInput = $("#eventDate");
    var eventTimeInput = $("#eventTime");
    var eventAddrInput = $("#eventAddr");
    var eventCityInput = $("#eventCity");
    var eventStateInput = $("#eventState");
    var eventZipInput = $("#eventZip");
    var eventSlotsInput = $("#eventSlots");
    var eventDuration = $("#eventDuration");
    var eventCatSelect = $("#eventCat");
    var eventForm = $("#eventForm")

    // Adding an event listener for when the form is submtted
    $(eventForm).on("submit", handleFormSubmit);


    // A function for handling what happens when the form to create a new post is submitted
    function handleFormSubmit(event) {
        event.preventDefault();
        // Wont submit the event if we are missing any data
        if (!orgNameSelect.val() || !eventTitleInput.val().trim() || !eventDescInput.val().trim() 
            || !eventDateInput.val().trim() || !eventTimeInput.val().trim() 
            || !eventAddrInput.val().trim() || !eventCityInput.val().trim() || !eventStateInput.val().trim() || !eventZipInput.val().trim()
            || !eventSlotsInput.val().trim() || !eventDurationInput.val().trim() || !eventCatSelect.val()) {
            return;
        }

        // Creating a new event object to send to the database
        var newEvent = {
            eventTitle: eventTitleInput
                .val()
                .trim(),
            eventDesc: eventDescInput
                .val()
                .trim(),
            eventAddr: eventAddrInput
                .val()
                .trim(),
            eventDate: eventDateInput
                .val()
                .trim(),
            eventTime: eventTimeInput
                .val()
                .trim(),
            eventCity: eventCityInput
                .val()
                .trim(),
            eventState: eventStateInput
                .val()
                .trim(),
            eventZip: eventZipInput
                .val()
                .trim(),
            eventSlots: eventSlotsInput
                .val()
                .trim(),
            eventDuration: eventDurationInput
                .val()
                .trim(),
            eventCat: eventCatSelect.val(),

            OrgId: orgNameSelect.val()
        };
    }


        // Submits a new event and brings user to events page upon completion
        function submitEvent(event) {
            $.post("/api/events", event, function () {
                window.location.href = "/events";
            });
        }

    })