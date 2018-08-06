// make an array with the starting buttons
var nintendo = ["Mario", "Luigi", "Princess Peach", "Bowser", "Princess Daisy", "WaLuigi", "Wario", "Link", "Zelda", "Pikachu","Charizard", "Marth" , "Roy" , "Lucina"];

// make each item in array into a button that display at the top

for (i = 0; i < nintendo.length; i++) {
    $("#buttons").append("<button>" + nintendo[i] + "</button>");
    console.log(nintendo[i]);
}

// create ajax link to get the pic and rating

// make it so that gif starts and stops when clicked

// make it so that the search for the photos and rating 