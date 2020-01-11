//timer counting down in seconds
    //javascript timer function

var wins = 10
var losses = 0

var seconds = document.getElementById("gameStatePrompt").textContent;
var countdown = setInterval(function() {
    seconds--;
    document.getElementById("gameStatePrompt").textContent = seconds;
    if (seconds < 0) {
        clearInterval(countdown);
        var score = confirm("Time's Up!  Correct Answers: " + wins + " Incorrect Answer: " + losses);

            function check1() {
                var question1 = document.getElementById("answer1B").checked;
                    document.getElementById("userGuess1").innerHTML = question1;
        };

    };
}, 1000);












    //if timer reaches 0 the game ends

//promt the user to start the game
    //button click calls the timer function

// update html to show the countdown happening
    //jq continually shows the current count
    //jq removes the interface and show a score in it's place when the game is over



//wire up the buttons to show the answer
    //limit user to one answer per question


//scoring
    //at the end of the game:
        //check for correct answers and count them
        //check for incorrect answers and count them
        //update score card to show incorrect and correct answer scores







