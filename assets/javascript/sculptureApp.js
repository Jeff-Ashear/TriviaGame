//timer counting down in seconds
//javascript timer function

var wins = 0
var losses = 0

// var seconds = document.getElementById("gameStatePrompt").textContent;
var seconds = $("#gameStatePrompt").text();

var countdown = setInterval(function() {
    seconds--;
    //document.getElementById("gameStatePrompt").textContent = seconds;
    $("#gameStatePrompt").text(seconds);
    console.log("TYPE: ", typeof seconds)
    if (seconds < 0) {
        clearInterval(countdown);
        check1()
        var score = confirm("Time's Up!  Correct Answers: " + wins + " Incorrect Answer: " + losses);
        console.log("time's up")


        function check1() {
            if (document.getElementById('answer1B').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

            if (document.getElementById('answer2C').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

            if (document.getElementById('answer3A').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

            if (document.getElementById('answer4A').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

            if (document.getElementById('answer5D').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

            if (document.getElementById('answer6B').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

            if (document.getElementById('answer7A').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

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