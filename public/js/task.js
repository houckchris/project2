$(document).ready(function() {
    // EVENT CONTAINER HOLDS ALL AVAILABLE EVENTS
    var taskContainer = $('.taskContainer');
    // var taskCategorySelect = $('#category');
    // VAR TO HOLD EVENTS
    var tasks;
    getTasks();
    // FUNCTION TO GRAB EVENTS FROM THE DB AND UPDATE THE VIEW
    function getTasks(){
        // AJAX REQUEST FOR EVENTS DATA
        $.get("/api/tasks", function(data){
            console.log("Tasks", data);
            tasks = data;
            if (!tasks || !tasks.length){
                displayEmpty();
            } else {
                initializeRows();
            }
        });
    }

    // FUNCTION TO HANDLE APPENDING CONSTRUCTED HTML
    function initializeRows(){
        // Empty that bad boy...
        taskContainer.empty();
        // And assign put in the tasks title...
        var newTasksViewTitleDiv = $("<div>");
        newTasksViewTitleDiv.addClass("col s12");
        var newTasksViewTitleH2 = $("<h2>");
        newTasksViewTitleH2.addClass("taskHeading");
        newTasksViewTitleH2.text("Upcoming Tasks");
        newTasksViewTitleDiv.append(newTasksViewTitleH2);
        taskContainer.append(newTasksViewTitleDiv);
        // ...then run through the tasks available
        var tasksToAdd = [];
        for (var i=0; i<tasks.length; i++) {
            // ...and create a new div for each and push it to the tasksToAdd array...
            tasksToAdd.push(createNewRow(tasks[i]));
        }
        // ...append that array to the container
        taskContainer.append(tasksToAdd);
    }

    // FUNCTION TO MAKE HTML FOR EACH NEW EVENT
    function createNewRow(task){
        // CREATE EVENT DIV
        var taskCard = $("<div>");
        taskCard.addClass("col s12 taskEnter task"+task.id);
        // CREATE ROW FOR WITHIN EVENTENTER DIV
        var newTaskRow = $("<div>");
        newTaskRow.addClass("row");
        // CREATE LOGO DIV FOR WITHIN ROW DIV
        var newTaskLogoDiv = $("<div>");
        newTaskLogoDiv.addClass("col s4");
        // CREATE LOGO IMG FOR WITHIN LOGO DIV
        var newTaskLogo = $("<img>");
        newTaskLogo.addClass("taskLogo");
        newTaskLogo.attr("src", task.Org.orgImage);
        // PUT LOGO IMG INTO LOGO DIV
        newTaskLogoDiv.append(newTaskLogo);
        // PUT LOGO DIV INTO ROW
        newTaskRow.append(newTaskLogoDiv);
        // CREATE EVENT INFO DIV
        var taskInfoDiv = $("<div>");
        taskInfoDiv.addClass("col s8");
        // CREATE EVENTDATE H3
        var taskDate = $("<h3>");
        taskDate.addClass("taskDate");
        taskDate.text(task.taskDate);
        // CREATE EVENTTEXT DESCRIPTION
        var taskText = $("<p>");
        taskText.addClass('taskText');
        taskText.text(task.taskDesc);
        // CREATE LINK FOR BOOKING THE EVENT
        var bookTask = $('<a>');
        bookTask.addClass('waves-effect waves-light btn-small');
        // bookTask.attr("href", "#");
        bookTask.text('Book Task!');
        // ADD EVENTDATE, EVENTTEXT, AND BOOKEVENT TO THE EVENTINFODIV
        taskInfoDiv.append(taskDate);
        taskInfoDiv.append(taskText);
        taskInfoDiv.append(bookTask);
        // APPEND EVENTINFODIV INTO NEWEVENTROW
        newTaskRow.append(taskInfoDiv);
        // APPEND NEWEVENTROW INTO EVENTCARD
        taskCard.append(newTaskRow);
        return taskCard;
    }

    // HANDLE UPDATES
        // PSEUDOCODE PHASE TWO

    // FUNCTION TO UPDATE EVENTS BY SIGNING UP FOR THEM
        // PSEUDOCODE PHASE TWO

    // FUNCTION TO DISPLAY EMPTY EVENTS WHEN THERE ARE NONE TO SHOW
    function displayEmpty(){
        taskContainer.empty();
        var noTasksToShowDiv = $("<div>");
        noTasksToShowDiv.addClass("col s12");
        var noTasksH2 = $("<h2>");
        noTasksH2.addClass("taskHeading");
        noTasksH2.text("No tasks to show right now!");
        var noTasksBody = $("<h3>");
        // noTasksBody.addClass("tbd");
        noTasksBody.text('Try again soon!');
        noTasksToShowDiv.append(noTasksH2);
        taskContainer.append(noTasksToShowDiv);
    }
});