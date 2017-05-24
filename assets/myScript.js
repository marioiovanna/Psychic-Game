

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var win = 0;
var loss = 0;
var left = 9;
var sofar = [];
//var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];



document.onkeyup = function(event) {
	
	var userGuess = event.key;

	// PC random pick
	if (left === 9) {
	computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
	}

	// Alphabet only
	var checker = alphabet.indexOf(userGuess)
		
		if (checker >= 0) {
		alphabet.splice(alphabet.indexOf(userGuess),1)

	// Condicionals
	//WIN
 	if (userGuess === computerGuess){
 		win++;
 		left = 9;
 		sofar = [];
 		alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
 	 document.getElementById('left').innerHTML = left;
 	 document.getElementById('win').innerHTML = win;
 	 document.getElementById('sofar').innerHTML = sofar;

 	 // LOSS
	} else {
		left--;
		sofar.push(userGuess)
 	 document.getElementById('sofar').innerHTML = sofar;
 	 document.getElementById('left').innerHTML = left;
 	}

 	// TIE
 	if (left === 0){
 		loss++;
 		left = 9;
 		sofar = [];
 		alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];



	 document.getElementById('loss').innerHTML = loss;
 	 document.getElementById('left').innerHTML = win;
 	 document.getElementById('sofar').innerHTML = sofar;
 	}

} else if (checker = -1) {
		alert("ENTER VALID KEY BITCH")

}

	console.log("losses" + loss);
	console.log("wins" + win);
	console.log("left" + left);
	console.log('PC  ' + computerGuess);
	console.log(userGuess);

}





	

	
	

