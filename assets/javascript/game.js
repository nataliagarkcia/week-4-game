
//score variables
var wins = 0;
var losses = 0;
//players current score
var myNumber = 0;
//select the variables that im going to use to determinen the numbers//
//selects a random number from 19 to 120
var guessNumber = Math.floor((Math.random()* 100) + 19);
//assigns random value to crystals from 1 to 12
var red = Math.floor((Math.random()* 12) + 1);
var blue = Math.floor((Math.random()* 12) + 1);
var yellow = Math.floor((Math.random()* 12) + 1);
var green = Math.floor((Math.random()* 12) + 1);


//updates my number in html
var updateMynumber = function (){
	$('.myNumber').empty();
	$('.myNumber').append(myNumber);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	$('#losses').append(losses);
}
//restart function
var restart = function(){
	myNumber = 0;
    guessNumber = Math.floor((Math.random()* 100) + 19);

	$('.guessNumber').empty();
	$('.guessNumber').append(guessNumber);

	//need to assing random numbers between 1-12 to the images of the gems//
	red = Math.floor((Math.random()* 12) + 1);
    blue = Math.floor((Math.random()* 12) + 1);
    yellow = Math.floor((Math.random()* 12) + 1);
    green = Math.floor((Math.random()* 12) + 1);
    //alert('restart');
    updateMynumber();
}
var score = function (){
	if (myNumber == guessNumber) {
		wins = wins + 1;
		restart();
	//If the number is higher that the numberToGuess it will lose and will add +1 to the score//	
	}else if(myNumber > guessNumber){
		losses = losses + 1;
		restart();
	//everytime that the gems are click on, it will add a number to the counter (#myNumber)//	
	}else{
		updateMynumber();
	}
}
$('.guessNumber').append(guessNumber);

$('.myNumber').append(myNumber);
//function
//everytime that the gems are click on, it will add a number to the counter (#myNumber)//

$(document).ready(function(){
	$('#redgem').click(function(){
		myNumber = myNumber + red;
		score();
	})
	$('#bluegem').click(function(){
		myNumber = myNumber + blue;
		score();
	})
	$('#yellowgem').click(function(){
		myNumber = myNumber + yellow;
		score();
	})
	$('#greengem').click(function(){
		myNumber = myNumber + green;
		score();
	})
});

