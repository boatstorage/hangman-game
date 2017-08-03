
	var words = [ "rose", "jasmine", "magnolia", "lilac", "iris", "carnation", "sunflower", "tulip", "lotus", "daisy"]

	function playGame(words) {
		
		var secretWord= words[getRandomIntInclusive()];
		console.log(secretWord);
		var parsedWord = [] 
			for ( var i = 0; i < secretWord.length; i++) {
			parsedWord.push(secretWord[i]);
			};
 
			console.log(parsedWord);
			makeDisplayWord(secretWord);
			

			console.log(displayWord);

			for (var i = 0; i <= 10; i++){
			document.onkeyup = function(event){
			var userGuess = event.key;
			};


		};
	};

	playGame(words);
	
	

	function getRandomIntInclusive() {
		return Math.floor(Math.random() * (10));
	};
// psuedocode:
// theme: ???
// create different parts of the game as seperate functions/html elements
// the parts of the game are:
// 1) image of the guess
// 2) words underneath 
// create serveral words and place their letters into an array
// create an array of arrays 
// create a function to randomly pick an array to play 
// create a event.key that asks to guess letters
// place the letter into a variable 
// write a for loop to compare the variable to the current array 
// make announcement about whter the letter is in the word
// if matches, make letter appear. 

// functions psuedocode:
// // 1) playGame function
// 		a) secretWord = pickSecretWord(words)
//		b) displayWord = makeDisplayWord(secretWord) "-------"
//		c) correctLetters = for loop parsedWords to empty array 
			//document.getelementbyid("dash-letter-bar").innerHTML = displayWord
	//	d) playTurn function
	//		1) pick letter
	//		2) check letter
	//		3) display letter
	//		4) if theres no more dashes, player wins
	//			if else after turns, player loses
	//			else pick another letter
	//	e) function to remove played letter from secretWord array 

	

	

