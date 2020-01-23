// BACK-END LOGIC

function vowelCheck(string) {
  var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]
  var splitSentence = string.split("");
  console.log(splitSentence);
  
  if (vowels.includes(splitSentence[0])) {
    var newSentence = splitSentence.concat("ay").join("");
    console.log(newSentence);
    }
    return newSentence;
}


function consonantCheck() {
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  
}

function inputCheck() {
  
}


// FRONT-END LOGIC
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#userInput").val();
    console.log(userSentence);            
    
    vowelCheck(userSentence);
      });
    });
    