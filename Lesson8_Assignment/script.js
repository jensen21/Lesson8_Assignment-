Program Name: Recipe Display Application
Author: Jensen Dietz
Date: November 9, 2015
Filename: script.js

function display (event) {
  $(event.currentTarget).next().fadeIn("slow");
} // end of display ()

$("h3").click(display);