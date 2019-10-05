//document.ready jqury function 


$(document).ready(function() {


    //Setting your variables
var playerWinsCounter = 0;
var playerLossesCounter = 0;
var userAppraisal = 0;
var compGuess;
    


// giving values to gem buttons
$(".crystalValue").attr("value", 15);
$(".crystalValue1").attr("value", 5);
$(".crystalValue2").attr("value", 1);
$(".crystalValue3").attr("value", 10);
//setter^^^
// calling the new game function 
newGame()     
                
// Crystal on click function
$(".crystal").on("click", function() {

//this is referring to the object?
var crystalValue = $(this).attr("value")
//getter^^^
console.log(crystalValue);
//i dont understand what parseint is 
crystalValue = parseInt(crystalValue);

userAppraisal += crystalValue;

// .text is adding text to page? 
$("#userAppraisal").text(userAppraisal);

//if else statment, if player wins they get a win on counter , they lose they get a loss on counter. 
if (userAppraisal === compGuess) {

    playerWinsCounter++

    $("#playerWins").text(playerWinsCounter)

    newGame();
}

else if (userAppraisal > compGuess) {

    playerLossesCounter++

    $("#playerLosses").text(playerLossesCounter)

    
    newGame();
}

});

//new function
function newGame(number) {
   console.log(number);
    //Computer guess random 
    compGuess=Math.floor(Math.random()*81) + 19;
    
    //set text content
    $("#appraiserTotal").text(compGuess);
    
    
    userAppraisal = 0;
    
    //set text content
    $("#userAppraisal").text(userAppraisal)
        
    }

});




