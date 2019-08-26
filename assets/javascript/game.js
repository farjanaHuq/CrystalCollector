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
    function startTheGame() {

        //Generates random number
        var randomNumber = Math.floor(Math.random() * 50) + 15;

        //empty the random number text field
        $("#random-number").empty();
        //append random number
        $("#random-number").append(randomNumber);
        //empty the total score text field
        $("#total-score").empty();

        //onclicks for crystals
        $(document).on("click", '.crystal', function () {

            assignCrystalValue();
            // var id = $(this).attr('id');
            value = $(this).attr('value');
            // console.log(`value of , ${id}, is ${value}`);
            compareScore(value, randomNumber);
        });

        playerScore = 0;

    }

    //change crystal value
    function assignCrystalValue() {
        //assigns random value to the crystals
        $("#diamond").attr('value', Math.floor(Math.random() * 6) + 1);
        $("#emarald").val(Math.floor(Math.random() * 4) + 1);
        $("#ruby").val(Math.floor(Math.random() * 10) + 1);
        $("#saphire").val(Math.floor(Math.random() * 3) + 1)
    }

    //Compares player scores and the random number
    function compareScore(value, randomNumber) {

        //conditions to compare player's score and random number
        if (playerScore < randomNumber) {
            playerScore += Number(value);
            $("#total-score").empty();                         //empty total score div
            $("#total-score").append(playerScore);             //append playerscore

        } else if (playerScore > randomNumber) {
            $(document).off("click");                         //click on the crystal turned off
            alert('Sorry! You loose the game. Try again.');   // alert messages about loosing the game
            losses++;                                         // count loss
            $("#count-loss").empty();                         //empty loss div
            $("#count-loss").append(losses);                  //display number of wins
            startTheGame();                                   //start over the game

        } else {
            $(document).off("click");                        //click on the crystal turned off
            alert('Congratz! You won the game. Play more.'); // alert messages about winning the game
            wins++;                                          // count win
            $("#count-win").empty();                         //empty win div
            $("#count-win").append(wins);                    //display number of wins
            startTheGame();                                  //start over the game
        }
    }


});