var map = document.getElementById("gps");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        $("#map").html("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    $(".modal-title").html("Bienvenue   " + $("#Prenom").val() );
		$(".modal-body").html("vous etes nés le   " + $("#Date_naissance").val()  + " et  vous habitez  " 
        + "<img src='https://maps.googleapis.com/maps/api/staticmap?center=" + $("#adresse").val() + "&markers="+$("#adresse").val()+"&size=300x300'/><br>"  +  $("#adresse").val() );
        $(".modal").modal("show");
}
//To use this code on your website, get a free API key from Google.
//Read more at: https://www.w3schools.com/graphics/google_maps_basic.asp

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            $("#map").html("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            $("#map").html("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            $("#map").html("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            $("#map").html("An unknown error occurred.");
            break;
    }
}

// affichage des coordonées 

function showPosition(position) {
    demo.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude;
}