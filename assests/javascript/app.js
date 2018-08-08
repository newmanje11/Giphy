var nintendos = ["Mario", "Luigi", "Princess Peach", "Bowser", "Princess Daisy", "WaLuigi", "Wario", "Link", "Zelda", "Pikachu","Charizard", "Marth" , "Roy" , "Lucina",
 "Toad", "Bowser Jr", "Meta Knight" , "Kirby", "King Dedede", "King L. Rool", "Diddy Kong", "Tiy Kong", "Donkey Kong", "Little Mac", "Captian Olimar", "Wolf O'Donnell",
  "Pauline", "Toadette", "Birdo", "Shulk", "Mr. Game & Watch", "Roy", "Dark Samus", "Falco Lombardi", "Rosalina", "Pit", "Samus Aran", "Captain Falcon", "Mewtwo", "Ridley", "Master Hand", "Wii Fit Trainer"]

$(document).ready(function() {
    
// make an array with the starting buttons

function getGifButtons () {

    $("#buttons").empty();


for (i = 0; i < nintendos.length; i++) {
    var gifsButtons = $("<button>");
    gifsButtons.addClass("nintendo");
    gifsButtons.addClass("btn btn-danger");
    gifsButtons.attr("data-name", nintendos[i]);
    gifsButtons.text(nintendos[i]);
    $("#buttons").append(gifsButtons);
    

    }
}
getGifButtons();

//add a new button 
function newButtons() {
   
        $("#submit").on("click", function(event){

        event.preventDefault();
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

        var nintendos = $(".nintendo").attr("data-name")
         

        var apiKey = "&api_key=LhYtlLApHGVGRXZxUGH6MrjPhKiy5R3p";

        var queryURL = "http://api.giphy.com/v1/gifs/search?q="+ nintendos + "&api_key=LhYtlLApHGVGRXZxUGH6MrjPhKiy5R3p&limit=10"
        console.log(queryURL); // displays the constructed url
        
        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {

            console.log(response.data); // console test to make sure something returns
            
            $("#info").empty(); // erasing anything in this div id so that it doesnt keep any from the previous click
            var results = response.data; //shows results of gifs
            
            for (var i=0; i<results.length; i++){
    
                var gifDiv = $("<div>"); //div for the gifs to go inside
                gifDiv.addClass("gifDiv");
                // gets rating of gif
                var gifRating = $("<p>").text("Rating: " + results[i].rating);
                gifDiv.append(gifRating);
                // gets gif
                var gifImage = $("<img>");
                gifImage.attr("src", results[i].images.fixed_height_small_still.url); // still image stored into src of image
                gifImage.attr("data-still",results[i].images.fixed_height_small_still.url); // still image
                gifImage.attr("data-animate",results[i].images.fixed_height_small.url); // animated image
                gifImage.attr("data-state", "still"); // set the image state
                gifImage.addClass("image");
                gifDiv.append(gifImage);
                
                $("#info").prepend(gifDiv);
            }
            
        });
        
        
    }
    showGifs();

// getGifButtons()
// var APIKey = "LhYtlLApHGVGRXZxUGH6MrjPhKiy5R3p";

// // create ajax link to get the pic and rating


// // make each item in array into a button that display at the top





// // make it so that gif starts and stops when clicked

// // make it so that the search for the photos and rating 
})