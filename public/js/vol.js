$(document).ready(function() {

    
    $.get("/api/vols", function(data) {
 
        console.log(data)
// Render volunteer data to the html for a specific volunteer using index point in the data array
//Ideally, this would be based on a login that would use the volunteers id in the table to access their data

 
            $("#volImage").attr("src", data[0].volImage);
            $('#volName').text(data[0].volName);
            $('#aboutMe').text(data[0].aboutMe);
            $('#volZip').text(data[0].volZip);
            $('#volEmail').text(data[0].volEmail);
            $('#volSkills').text(data[0].volskills);       
 
});  
});  