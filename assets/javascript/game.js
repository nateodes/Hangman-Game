// Set Global Variables Here




var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
				];
var currentWord = ["deathstar", "Yoda", "MilleniumFalcon", "JediKnight", "HanSolo", "TheForceAwakens", "ANewHope", "Chewbacca", "DarthMaul", "CountDooku"];

var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];

// Creat Puzzle Function 

function puzzle () {
	var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
	
}

document.getElementById("start").addEventListener("click", function(word) {
	var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
	document.getElementById("wordWrap").innerHTML = computerGuess;
	//document.querySelector("#wordWrap").style.letterSpacing = 3px; 
	console.log("word is here!");
} 
 );

document.getElementById("start").addEventListener("click", function(hide){
			document.getElementById("wordWrap").style.visibility = "hidden";
			document.getElementById("letterA").style.visibility = "hidden";
			document.getElementById("letterB").style.visibility = "hidden";
			document.getElementById("letterC").style.visibility = "hidden";
			document.getElementById("letterD").style.visibility = "hidden";
			document.getElementById("letterE").style.visibility = "hidden";
			document.getElementById("letterF").style.visibility = "hidden";
			document.getElementById("letterG").style.visibility = "hidden";
			document.getElementById("letterH").style.visibility = "hidden";
			document.getElementById("letterI").style.visibility = "hidden";
			document.getElementById("letterG").style.visibility = "hidden";
			document.getElementById("letterH").style.visibility = "hidden";
			document.getElementById("letterI").style.visibility = "hidden";
			document.getElementById("letterJ").style.visibility = "hidden";
			document.getElementById("letterK").style.visibility = "hidden";
			document.getElementById("letterL").style.visibility = "hidden";
			document.getElementById("letterM").style.visibility = "hidden";
			document.getElementById("letterN").style.visibility = "hidden";
			document.getElementById("letterO").style.visibility = "hidden";
			document.getElementById("letterP").style.visibility = "hidden";
			document.getElementById("letterQ").style.visibility = "hidden";
			document.getElementById("letterR").style.visibility = "hidden";
			document.getElementById("letterS").style.visibility = "hidden";
			document.getElementById("letterT").style.visibility = "hidden";
			document.getElementById("letterU").style.visibility = "hidden";
			document.getElementById("letterV").style.visibility = "hidden";
			document.getElementById("letterW").style.visibility = "hidden";
			document.getElementById("letterX").style.visibility = "hidden";
			document.getElementById("letterY").style.visibility = "hidden";
			document.getElementById("letterZ").style.visibility = "hidden";

			console.log("word is hidden!")
}


	
	);

	


	
	     document.onkeypress = function(letter) {
		 
			var x = event.charCode;
    		var res = String.fromCharCode(x);

   			document.getElementById("guesses").innerHTML = res;
   			
   			console.log(res);

};




//document.onkeyup = function(word) {
	//var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
	//document.getElementById("wordWrap").innerHTML = computerGuess;
	//document.querySelector("#wordWrap").style.letterSpacing = 3px; 
	//console.log("word appears!");
//} 

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