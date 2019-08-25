//Generate random number from 10 to 50
//display random number
//display crystal 
//assign value to each crystal
//create onclick for each crystal
//count total number from crystal onclick
//compare it with the random number if total number is greater than random number increase loss, else increase win


$(document).ready(function () {
    console.log("This is a game");

    //global variables
    var playerScore = 0;   
    var wins = 0;
    var losses = 0;
    var value = 0;
  
        
    startTheGame();
    //Restarts the game
    function startTheGame(){
        
        //Generates random number
        var randomNumber = Math.floor(Math.random() * 50) + 15;

        //empty the random number text field
        $("#random-number").empty();
        //append random number
        $("#random-number").append(randomNumber);
        //empty the total score text field
        $("#total-score").empty(); 
        
        //onclicks for crystals
        $(document).on("click", '.crystal', function(){
            value = $(this).attr('value');
            compareScore(value, randomNumber);
        });
            
        playerScore = 0;
    }
    
    //Compares player scores and the random number
    function compareScore(value, randomNumber){

        if(playerScore < randomNumber){
            playerScore += Number(value);
            $("#total-score").empty();  
            $("#total-score").append(playerScore); 

        }else if (playerScore > randomNumber) {
            $(document).off("click");
            alert('Sorry! You loose the game. Try again.');
            losses++;
            $("#count-loss").empty();
            $("#count-loss").append(losses);
            startTheGame();
        }else{
            $(document).off("click");
            alert('Congratz! You won the game. Play more.');
            wins++;
            $("#count-win").empty();
            $("#count-win").append(wins);
            startTheGame();
        }
    }

   
});