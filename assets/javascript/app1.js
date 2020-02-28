//timer counting down in seconds
//javascript timer function

var wins = 0
var losses = 0

// var seconds = document.getElementById("gameStatePrompt").textContent;
var seconds = $("#gameStatePrompt").text();
var xeconds = 2

var backgrounds = [
    "../assets/images/crowdsurfing.jpg",
    "../assets/images/nin.png",
    "../assets/images/beck.jpg",
    "../assets/images/REM.jpg",
    "../assets/images/zappa.jpeg",
    "../assets/images/soundgarden.jpg",
    "../assets/images/trent.jpg",
    "../assets/images/radiohead.jpg",
    "../assets/images/tom-morello.jpg",
    "../assets/images/lateralis.jpg",
    "../assets/images/GNR.jpg",
    "../assets/images/janesaddiction.jpg",
    "../assets/images/tool.jpg",
    "../assets/images/beavis-and-butthead-nin.jpg",
    "../assets/images/aliceInChains.jpg",
    "../assets/images/lateralis2.png",
    "../assets/images/trent2.jpg",
    "../assets/images/Rage-Against-the-Machine.jpg",
    "../assets/images/frank.jpg",
    "../assets/images/kurtd.jpg",
    
    "../assets/images/crowdsurfing.jpg",
    "../assets/images/nin.png",
    "../assets/images/beck.jpg",
    "../assets/images/REM.jpg",
    "../assets/images/zappa.jpeg",
    "../assets/images/soundgarden.jpg",
    "../assets/images/trent.jpg",
    "../assets/images/radiohead.jpg",
    "../assets/images/tom-morello.jpg",
    "../assets/images/lateralis.jpg",
    "../assets/images/GNR.jpg",
    "../assets/images/janesaddiction.jpg",
    "../assets/images/tool.jpg",
    "../assets/images/beavis-and-butthead-nin.jpg",
    "../assets/images/aliceInChains.jpg",
    "../assets/images/lateralis2.png",
    "../assets/images/trent2.jpg",
    "../assets/images/Rage-Against-the-Machine.jpg",
    "../assets/images/frank.jpg",
    "../assets/images/kurtd.jpg"

]

var countdown = setInterval(function() {
    seconds--;
    //document.getElementById("gameStatePrompt").textContent = seconds;
    $("#gameStatePrompt").text(seconds);
    $("#bGPics").css('background-image', "url(" + backgrounds[seconds] + ")");
    console.log(backgrounds[seconds])
    console.log("TYPE: ", typeof seconds)
    if (seconds < 0) {
        clearInterval(countdown);
        check1()
        if (confirm("Time's Up!  Correct Answers: " + wins + " Incorrect Answer: " + losses)) {
            $(".gameboard").empty();
            $("#bGPics").css('background-image', 'url("../assets/images/kyuss.jpg")');
            var countdownAgain = setInterval(function() {
                xeconds--;
                if (xeconds < 0) {
                    clearInterval(countdownAgain);
                    $(".instructions").empty();
                    $(".instructions").css("color", "black")
                    $(".instructions").css("text-shadow", "1px 1px 2px orangered")
                    $(".instructions").html("<br><br><br><br><h3>Thanks for playing.  Take with you this delicious morsel of 90’s music lore trivia:  The icon of this era, Nirvana, is credited with inventing the Seattle Sound (otherwise known as Grunge).  However this isn’t exactly true.  Many argue that Joshua Homme did so with his band, Kyuss, in Palm Desert, California in the late 80’s.  Kyuss enjoyed only a small cultish fame.  <br> People would gather for huge, drug-fueled concert parties in remote locations deep in the desert wilderness; something like a primitive version of Burning Man.  The concerts would last for literally days without a break.  In this setting bands were expected to play for hours.  What emerged was something incorporating early metal combined with the long, meandering forms of jam bands like the Phish or Widespread Panic.  Kyuss grew to dominate this scene, and then eventually disbanded without ever achieving mainstream popularity.  <br>  Seattle bands discovered this sound and made it wildly popular.  The 90’s came and went, and the popularity of this style faded.  <br>  Later Joshua Homme founded a new band, Queens of the Stone Age, which is much more successful than Kyuss was.  The name of this band is actually a brief description of Homme’s misplacement in this history.  The Stone Age is, is 90’s grunge.  And while he was never the king, his bands were always the Queens behind the scenes.")
                }


            }, 1000)
        }
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