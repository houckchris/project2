$(document).ready(function () {

    //Get references to the event creation form fields

    var orgNameInput = $("#orgName");
    var eventTitleInput = $("#eventTitle");
    var eventDescInput = $("#eventDesc");
    var eventDateInput = $("#eventDate");
    var eventTimeInput = $("#eventTime");
    var eventAddrInput = $("#eventAddr");
    var eventCityInput = $("#eventCity");
    var eventStateInput = $("#eventState");
    var eventZipInput = $("#eventZip");
    var eventSlotsInput = $("#eventSlots");
    var eventDurationInput = $("#eventDuration");
    var eventCatInput = $("#eventCat");
    var eventForm = $("#eventForm");
    var orgSelect = $("#orgName");

    // Adding an event listener for when the form is submtted
 $("#eventForm").on('submit', handleFormSubmit);

          // Gets the part of the url that comes after the "?" (which we have if we're updating a post)
  var url = window.location.search;
  var eventId;
  var orgId;
//   // Sets a flag for whether or not we're updating an event to be false initially
  var updating = false;

//      // If we have this section in our url, we pull out the event id from the url
//   // In '?post_id=1', postId is 1
  if (url.indexOf("?events_id=") !== -1) {
    orgId = url.split("=")[1];
    getEventData(eventId, "events");
  }
//    // Otherwise if we have an org_id in our url, preset the org select box to be our Org
   else if (url.indexOf("?orgs_id=") !== -1) {
    orgId = url.split("=")[1];
  }
 // Getting the orgs, and their events
  
 getOrgs();

  // A function for handling what happens when the form to create a new post is submitted
  function handleFormSubmit(event) {
    event.preventDefault();
    // Wont submit the event if we are missing any data
    if (!orgNameInput.val() || !eventTitleInput.val().trim() || !eventDescInput.val().trim() 
        || !eventDateInput.val().trim() || !eventTimeInput.val().trim() 
        || !eventAddrInput.val().trim() || !eventCityInput.val().trim() || !eventStateInput.val().trim() || !eventZipInput.val().trim()
        || !eventSlotsInput.val().trim() || !eventDurationInput.val().trim() || !eventCatSelect.val()) {
        return;
    }

    // Creating a new event object to send to the database
    var newEvent = {

        OrgId: orgNameInput.val(),
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
        eventCat: eventCatInput.val()    
      
    };
    console.log(newEvent)
  // If we're updating an event run updateEvebt to update an event
// Otherwise run submitEvent to create a whole new post
if (updating) {
    newEvent.id = eventId;
    updateEvent(newEvent);
  }
  else {
    submitEvent(newEvent);
  }
}


//    Function for retrieving orgs and getting them ready to be rendered to the page
   function getOrgs() {
    $.get("/api/orgs", renderOrgList);
  }
//  // A function for rendering the list of orgs to the page
 function renderOrgList(data) {
    if (!data.length) {
        window.location.href = "/orgs";
      }
      $(".hidden").removeClass("hidden");
      var rowsToAdd = [];
      for (var i = 0; i < data.length; i++) {
        rowsToAdd.push(createOrgRow(data[i]));
      }
      orgSelect.empty();
      console.log(rowsToAdd);
      console.log(orgSelect);
      orgSelect.append(rowsToAdd);
      orgSelect.val(orgId);
    }

  

   // Creates the org options in the dropdown
   function createOrgRow(orgs) {
    var listOption = $("<option>");
    listOption.attr("value", orgs.id);
    listOption.text(orgs.orgName);
    return listOption;
  }

 // Function for handling what to render when there are no authors
//  function renderEmpty() {
//     var alertDiv = $("<div>");
//     alertDiv.addClass("alert alert-danger");
//     alertDiv.text("You must create an organization before you can create an event.");
//     orgContainer.append(alertDiv);
//   }

   

        // Submits a new event and brings user to events page upon completion
    
            function submitEvent(event) {
                $.post("/api/events", event, function() {
                  window.location.href = "/events";
                  console.log(newEvent)
                });
              }
});
