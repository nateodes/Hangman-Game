// Set Global Variables Here
var alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

 


var currentWord = [
["D", "E", "A", "T", "H", "S", "T", "A", "R"],
["C", "H", "E", "W", "B", "A", "C", "C", "A"],
["S", "K", "Y", "W", "A", "L", "K", "E", "R"],
["E", "W", "O", "K"],
["J", "E", "D", "I"],
["Y", "O", "D", "A"],


]

for (var i = 0; i < alphabet.length; i++) {
            var letterBtn = $("<button>");
              letterBtn.addClass("letter-button letter letter-button-color");
              letterBtn.attr({ "data-letter": alphabet[i] });
              letterBtn.html(alphabet[i]);
              $("#buttons").append(letterBtn);
          }
// var currentWord = ["DEATHSTAR", "SKYWALKER", "YODA"]
//$("#start").on("click", function() {
// 	for (var i = 0; i < alphabet.length; i++) {
//             var letterBtn = $("<button>");
//               letterBtn.addClass("letter-button letter letter-button-color");
//               letterBtn.attr({ "data-letter": alphabet[i] });
//               letterBtn.html(alphabet[i]);
//               $("#buttons").append(letterBtn);
//           }
// //}//)

var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
var answerArray = [];

$("#start").on("click", function() {
	//var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
	//var wordDiv = $("#word");
	
	//document.getElementById("word").style.visibility = "hidden";
	for (var i = 0; i < computerGuess.length; i++) {

//Try creating a div class in css for borderBottom aka underline, then using .animate jquery to show letter if ===
      //var newWordDiv = $("<div>" + " __ " + "</div>");
      
      answerArray[i] = " __ ";
      //var newWordDiv = $("<div>");
      //newWordDiv.addClass("puzzleWord");
      //newWordDiv.attr({ "data-letter": computerGuess[i] });
      //newWordDiv.addClass("class" + computerGuess[i]);
      //$(".puzzleWord").animate({ opacity: "0" }, 1);
      $("#word").html(computerGuess);
      //$("#word").animate({ opacity: "0" }, 1);
      $("#word").html(answerArray);
      //$("#word").placeholder(" __ ");
      //$("#word").animate({ opacity: "0" }, 1);
      //$(".puzzleWord").hide();
      //$(computerGuess).hide();
     //$(computerGuess[i]).animate({ opacity: "0" }, 1);
     // $(computerGuess[i]).animate({ borderBottom: "3px solid" })
      //wordDiv.append(newWordDiv);
 }}
  );
//$("#start").on("click", function() {
	//$(".puzzleWord").animate({ opacity: "0" });

//});
// for (var i = 0; i < computerGuess.length; i++) {
//             var letterBtn = $("<button>");
//               letterBtn.addClass("letter-button letter letter-button-color");
//               letterBtn.attr({ "data-letter": computerGuess[i] });
//               letterBtn.html(computerGuess[i]);
//               $("#buttons").append(letterBtn);
//           }

$(".letter-button").on("click", function() {
	console.log("letter clicked")
	var letter = "";
	letter = ($(this).attr("data-letter"));
	
	

	for (var i = 0; i < computerGuess.length; i++) {
		if (computerGuess[i].includes(letter)) {
			answerArray[i] = letter;
			console.log("there is this letter")
			$("#word").html(answerArray);
		}}});



// $("#lettera").on("click", function (){
// 	console.log("you clicked A")
// 	for (var i = 0; i < computerGuess.length; i++) {
// 	if (computerGuess[i].includes("A")) {
// 		answerArray[i] = "A";
// 		console.log("there is an A")
// 		$("#word").html(answerArray);
// 	}
// 	}});



	// for (var i = 0; i < computerGuess.length; i++) {
			 	
	// 		if (computerGuess[i] === "A") {
	// 			var show = answerArray[i]
	// 			var show = $("<div>");
	// 			show.addClass("shown");
	// 			//var selected = computerGuess[i];
	// 			//var x = $("<div>");
	// 			//var x = computerGuess[i];
	// 			//var i = $("<div>");
	// 			//i.addClass("select");
	// 			//$(computerGuess[i]).animate({ opacity: "1" }, "fast");
	// 			//answerArray[i] = "A";
	// 			//computerGuess[i] = "A";
				
	// 			//$("#word").html("A");
	// 			//answerArray[i] = true;
	// 			//answerArray[i] = "A" + "";
	// 			//answerArray[i].replace(" __ " , "A");
	// 			//$(computerGuess[i]).animate({ opacity: "1" }, "fast");
	// 			//computerGuess[i].replace(computerGuess[i], "A");
				
	// 			//$(computerGuess[i]).show("A");
	// 			$(".shown").html("A");
	// 			console.log("show A");
	// }}
			
		
	//  });


// // $(".letter-button").on("click", function() {
// // 	for (var i = 0; i < computerGuess.length; i++) {
// // 		if (computerGuess[i] === "A") {
// // 			$(computerGuess[i]).animate({ opacity: "1" }, "fast");
// // 			console.log("show letter");
// // 		}
// // 	}
// // })




// //$("#start").on("click", function(word) {
	
// //	$("#wordWrap").html(computerGuess);
// 	//document.querySelector("#wordWrap").style.letterSpacing = 3px; 
	
// //	console.log("word is here!");


// //} 
// // );

// // document.getElementById("start").addEventListener("click", function(hide){
// // 			//document.getElementById("word").style.visibility = "hidden";
// // 			document.getElementById("lettera").style.visibility = "hidden";
// // 			document.getElementById("letterb").style.visibility = "hidden";
// // 			document.getElementById("letterc").style.visibility = "hidden";
// // 			document.getElementById("letterd").style.visibility = "hidden";
// // 			document.getElementById("lettere").style.visibility = "hidden";
// // 			document.getElementById("letterf").style.visibility = "hidden";
// // 			document.getElementById("letterg").style.visibility = "hidden";
// // 			document.getElementById("letterh").style.visibility = "hidden";
// // 			document.getElementById("letteri").style.visibility = "hidden";
// // 			document.getElementById("letterj").style.visibility = "hidden";
// // 			document.getElementById("letterk").style.visibility = "hidden";
// // 			document.getElementById("letterl").style.visibility = "hidden";
// // 			document.getElementById("letterm").style.visibility = "hidden";
// // 			document.getElementById("lettern").style.visibility = "hidden";
// // 			document.getElementById("lettero").style.visibility = "hidden";
// // 			document.getElementById("letterp").style.visibility = "hidden";
// // 			document.getElementById("letterq").style.visibility = "hidden";
// // 			document.getElementById("letterr").style.visibility = "hidden";
// // 			document.getElementById("letters").style.visibility = "hidden";
// // 			document.getElementById("lettert").style.visibility = "hidden";
// // 			document.getElementById("letteru").style.visibility = "hidden";
// // 			document.getElementById("letterv").style.visibility = "hidden";
// // 			document.getElementById("letterw").style.visibility = "hidden";
// // 			document.getElementById("letterx").style.visibility = "hidden";
// // 			document.getElementById("lettery").style.visibility = "hidden";
// // 			document.getElementById("letterz").style.visibility = "hidden";
// // 			//document.getElementById("letterX").style.visibility = "hidden";
// // 			//document.getElementById("letterY").style.visibility = "hidden";
// // 			//document.getElementById("letterZ").style.visibility = "hidden";

// // 			console.log("word is hidden!")
// // }



// 	//);

	


	
// // 	     document.onkeypress = function() {
// // 		 	var wins = 0;
// // 		 	var guesses = 15;
// // 			var x = event.charCode;
// //     		var res = String.fromCharCode(x);
// //     		guesses--
// //    			//document.getElementById("guesses").innerHTML = res;
// //    			var y = res.toUpperCase();
// //    			console.log(res);
// //    			var computerGuess = $("#word");
// //    			if (computerGuess.includes(y)) {

// //    				computerGuess.replace(/ __ /g, y);
// //    				//document.getElementById("word").style.visibility = "visible";

// //    				console.log("you guessed correct");

// //    			}

// //    			else {
// //    				var guessedDiv = $("<div>" + y + "</div>");

// //       

// //    			var html = 
// //          	 "<p>wins: " + wins + "</p>" +

// //          	 "<p>guesses: " + guesses + "</p>";

// //          	 // Injecting the HTML we just created into our div and updating the game information on our page.
// //          	 document.querySelector("#guesses").innerHTML = html;

// // };


// //document.onkeyup = function(word) {
// 	//var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
// 	//document.getElementById("wordWrap").innerHTML = computerGuess;
// 	//document.querySelector("#wordWrap").style.letterSpacing = 3px; 
// 	//console.log("word appears!");
// //} 

//  // When player hits key, load word 

// //document.onkeyup = function(start) {

// 		//	var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
// 		//		];
// 	//	var currentWord = ["deathstar", "Yoda", "MilleniumFalcon", "JediKnight", "HanSolo", "TheForceAwakens", "ANewHope", "Chewbacca", "DarthMaul", "CountDooku"];



// 	 //	var computerGuess = currentWord[Math.floor(Math.random() * currentWord.length)];
// 		//console.log("puzzle function called")

// 		//var hidden = computerGuess.replace(/alphabet/gi, " _ ");

// 		//for (i = computerGuess.substring(0); i < computerGuess.length;) {
// 		//	computerGuess.substring(i).replace(i, " _ ")

// 		//	document.querySelector("#wordWrap").style.textDecoration = "underline";
// 		//	i++;
// 		//console.log("replace funtion works");
// 		//}
		
// 		//document.querySelector("#wordWrap").style.visibility = "hidden";
// 		//document.querySelector("#wordWrap").style.borderBottom = "3px solid black";
// 	//}	

// 		//

// 		//if (letter = " ") {
// 			//document.getElementById("letter" + x).innerHTML = "&nbsp;";
// 			//document.getElementById("letter" + x).style.visibility = "hidden"; 
// 			//document.getElementById("letter" + x).style.display = "block";
// 			//document.getElementById("underline" + x).style.display = "block"; 
// 		//}

// 		//else {
// 			//document.getElementById("letter" + x).innerHTML = letter; 
// 			//document.getElementById("letter" + x).style.visibility = "hidden";
// 			//document.getElementById("letter" + x).style.display = "block";
// 			//document.getElementById("underline" + x).style.borderBottom = "3px solid black"; 
// 		//}
// 		//        

// //} 