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
    
    //Generates random number
    var randomNumber = Math.floor(Math.random() * 50) + 15;

    //Appends random number
    $("#random-number").append(randomNumber);

    function startOver(){
        $("#random-number").empty();
        $("#random-number").append(Math.floor(Math.random() * 50) + 15);
        $("#total-score").empty(); 
        $(document).on("click");
        playerScore = 0;
    }
    console.log('start again');

    $(document).on("click",".crystal", function () {

        var value = $(this).attr('value');
      
        // console.log('crystals value ' + value);
        // console.log("player score", playerScore); 

        if(playerScore < randomNumber){
            playerScore += Number(value);
            $("#total-score").empty();  
            $("#total-score").append(playerScore); 

        }else if (playerScore > randomNumber) {
            alert('Sorry! You loose the game. Try again.');
            losses++;
            $("#count-loss").empty();
            $("#count-loss").append(losses);
            startOver();
        } else{
            alert('Congratz! You won the game. Play more.');
            wins++;
            $("#count-win").empty();
            $("#count-win").append(wins);
            startOver();
        }
        
    });
     

});