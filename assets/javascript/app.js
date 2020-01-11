//timer counting down in seconds
    //javascript timer function

$("#startButton").click(function() {
    $("#gameStatePrompt").text(10);
    $("#startBtnDiv").empty();

    $("#answer1A").text("yes");
    $("#answer1A").text("no");
    $("#answer1A").text("maybe");
    // 
    var seconds = document.getElementById("gameStatePrompt").textContent;
    var countdown = setInterval(function() {
        seconds--;
        document.getElementById("gameStatePrompt").textContent = seconds;
        if (seconds <= 0) clearInterval(countdown);
        // if (seconds <= 0)
        // console.log(seconds)
    }, 1000);





})




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







