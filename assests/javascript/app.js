$(document).ready(function() {
    
// make an array with the starting buttons
var nintendos = ["Mario", "Luigi", "Princess Peach", "Bowser", "Princess Daisy", "WaLuigi", "Wario", "Link", "Zelda", "Pikachu","Charizard", "Marth" , "Roy" , "Lucina"];

function getGifButtons () {

    $("#buttons").empty();


for (i = 0; i < nintendos.length; i++) {
    var gifsButtons = $("<button>");
    gifsButtons.addClass("nintendo");
    gifsButtons.attr("data-name", nintendos[i]);
    gifsButtons.text(nintendos[i]);
    $("#buttons").append(gifsButtons);
    console.log(nintendos[i]);

    }
}
getGifButtons();

//add a new button 
function newButtons() {
   
        $("#submit").on("click", function(){
        var nintendo = $("#character-input").val().trim();
        if (nintendo == ""){
          return false; // added so there cannot add a blank button
        }
        nintendos.push(nintendo);
        getGifButtons();
    
        
        return false;
        });
    }

    newButtons();

    function showGifs(){
        var nintendo = $(this).attr("data-name");

        var apiKey = "LhYtlLApHGVGRXZxUGH6MrjPhKiy5R3p";

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + nintendos + "&api_key='" + apiKey +"'&limit=10";
        console.log(queryURL); // displays the constructed url
        $.ajax({
            url: queryURL,
            method: 'GET'
        })
        .done(function(response) {
            console.log(response); // console test to make sure something returns
            $("#image").empty(); // erasing anything in this div id so that it doesnt keep any from the previous click
            var results = response.data; //shows results of gifs
            if (results == ""){
              alert("There isn't a gif for this selected button");
            }
            for (var i=0; i<results.length; i++){
    
                var gifDiv = $("<div>"); //div for the gifs to go inside
                gifDiv.addClass("gifDiv");
                // pulling rating of gif
                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                // pulling gif
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
                gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
                gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
                gifImage.attr("data-state", "still"); // set the image state
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                // pulling still image of gif
                // adding div of gifs to gifsView div
                $("#images").prepend(gifDiv);
            }
        });
    }

// getGifButtons()
// var APIKey = "LhYtlLApHGVGRXZxUGH6MrjPhKiy5R3p";

// // create ajax link to get the pic and rating


// // make each item in array into a button that display at the top





// // make it so that gif starts and stops when clicked

// // make it so that the search for the photos and rating 
})