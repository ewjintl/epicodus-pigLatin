var translate = function() {
  if (userSentence) {
    userSentence.concat("ay");
    alert(userSentence);
  }
}

var vowels = ["a", "e", "i", "o", "u"]
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"]



$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#userInput").val();
    console.log(userSentence);

    
  });
});