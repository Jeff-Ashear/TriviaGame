//timer counting down in seconds
//javascript timer function

var wins = 0
var losses = 0

// var seconds = document.getElementById("gameStatePrompt").textContent;
var seconds = $("#gameStatePrompt").text();
var backgrounds = [
    "../images/crowdsurfing.jpg",
    "../images/nin.png",
    "../images/beck.jpg",
    "../images/REM.jpg",
    "../images/zappa.jpeg",
    "../images/soundgarden.jpg",
    "../images/trent.jpg",
    "../images/radiohead",
    "../images/tom-morello.jpg",
    "../images/lateralis.jpg",
    "../images/GNR.jpg",
    "../images/janesaddiction.jpg",
    "../images/tool.jpg",
    "../images/beavis-and-butthead-nin.jpg",
    "../images/aliceInChains.jpg",
    "../images/lateralis2.png",
    "../images/trent2.jpg",
    "../images/Rage-Against-the-Machine.jpg",
    "../images/frank.jpg",
    "../images/kurtd.jpg",
]

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
        //set up rotating an random images off the timer here
        


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

            if (document.getElementById('answer8B').checked) {
                console.log("correct anser detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

            if (document.getElementById('answer9D').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                losses = losses + 1
            }

            if (document.getElementById('answer10B').checked) {
                console.log("correct answer detected")
                wins = wins + 1
            } else {
                console.log("incorrect answer detected")
                loses = loses + 1
            }

            if (document.getElementById('answer11C').checked) {
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