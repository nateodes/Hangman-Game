// Set Global Variables Here




var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
				];
var currentWord = ["deathstar", "Yoda", "MilleniumFalcon", "JediKnight", "HanSolo", "TheForceAwakens", "ANewHope", "Chewbacca", "DarthMaul", "CountDooku"];



// Creat Puzzle Function 

function puzzle () {
	var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
	
}

document.onkeyup = function(word) {
	var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
	document.getElementById("wordWrap").innerHTML = computerGuess;
	//document.querySelector("#wordWrap").style.letterSpacing = 3px; 
	console.log("word appears!");
} 

 // When player hits key, load word 

//document.onkeyup = function(start) {

		//	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
		//		];
	//	var currentWord = ["deathstar", "Yoda", "MilleniumFalcon", "JediKnight", "HanSolo", "TheForceAwakens", "ANewHope", "Chewbacca", "DarthMaul", "CountDooku"];


		
	 //	var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
		//console.log("puzzle function called")
	
		//var hidden = computerGuess.replace(/alphabet/gi, " _ ");

		//for (i = computerGuess.substring(0); i < computerGuess.length;) {
		//	computerGuess.substring(i).replace(i, " _ ")
			
		//	document.querySelector("#wordWrap").style.textDecoration = "underline";
		//	i++;
		//console.log("replace funtion works");
		//}
		
		//document.querySelector("#wordWrap").style.visibility = "hidden";
		//document.querySelector("#wordWrap").style.borderBottom = "3px solid black";
	//}	
		
		//

		//if (letter = " ") {
			//document.getElementById("letter" + x).innerHTML = "&nbsp;";
			//document.getElementById("letter" + x).style.visibility = "hidden"; 
			//document.getElementById("letter" + x).style.display = "block";
			//document.getElementById("underline" + x).style.display = "block"; 
		//}

		//else {
			//document.getElementById("letter" + x).innerHTML = letter; 
			//document.getElementById("letter" + x).style.visibility = "hidden";
			//document.getElementById("letter" + x).style.display = "block";
			//document.getElementById("underline" + x).style.borderBottom = "3px solid black"; 
		//}
		//        

//} 