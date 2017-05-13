// Set Global Variables Here




var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
				];
var currentWord = ["death star", "Yoda", "Millenium Falcon", "Jedi Knight", "Han Solo", "The Force Awakens", "A New Hope", "Chewbacca", "Darth Maul", "Count Dooku"];







 // When player hits key, load word 

document.onkeyup = function(event) {
	var guess = event.key; 
	var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
// Get length of word and replace characters with blank spaces

	x = currentWord.length;
	y = x-1;

	while (x > 0) {
		numChar++;
		var letter = word.substring(y,x);

		if (letter = " ") {
			document.getElementById("letter" + x).innerHTML = "&nbsp;";
			document.getElementById("letter" + x).style.visibility = "hidden"; 
			document.getElementById("letter" + x).style.display = "block";
			document.getElementById("underline" + x).style.display = "block"; spaces ++;
		}

		else {
			document.getElementById("letter" + x).innerHTML = letter; 
			document.getElementById("letter" + x).style.visibility = "hidden";
			document.getElementById("letter" + x).style.display = "block";
			document.getElementById("underline" + x).style.borderBottom = "3px solid black"; spaces ++;
		}


	}
	


	 
          

} 