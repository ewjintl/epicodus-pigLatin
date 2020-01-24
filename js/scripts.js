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


function consonantCheck(string) {
  // var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
  var splitSentence = string.split("");
  var consoSentence = []
  consoSentence = splitSentence.slice(1, splitSentence.length-1).concat(splitSentence[0], "ay").join("");
  console.log(consoSentence);
  return consoSentence;
}

function inputCheck() {
  
}


// FRONT-END LOGIC
$(document).ready(function() {
  $("form#translator").submit(function(event) {
    event.preventDefault();
    var userSentence = $("#userInput").val();
    console.log(userSentence);
    if (!userSentence) {
      alert("Please enter a valid word or sentence.");
    } else 

    
    vowelCheck(userSentence);
    consonantCheck(userSentence);

      });
    });
    