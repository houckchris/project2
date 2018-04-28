$(document).ready(function() {

    
    $.get("/api/vols/1", function(data) {
 
        console.log(data)
// Render volunteer data to the html for a specific volunteer using a specific id in the get method
//Ideally, this would be based on a login that would use the volunteers id in the table to access their data
   


            $("#volImage").attr("src", data.volImage);
            $('#volName').text(data.volName);
            $('#aboutMe').text(data.aboutMe);
            $('#volZip').text(data.volZip);
            $('#volEmail').text(data.volEmail);
            $('#volSkills').text(data.volskills);    
 
});  


});  