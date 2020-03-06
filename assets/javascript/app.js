//timer counting down in seconds
//javascript timer function

var wins = 0
var losses = 0

// var seconds = document.getElementById("gameStatePrompt").textContent;
var seconds = $("#gameStatePrompt").text();
var xeconds = 4

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
function gameTimer() {
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
            $(".gameboard").empty();
            $("#bGPics").css('background-image', 'url("../assets/images/kyuss.jpg")');
            $(".instructions").empty();
            $(".instructions").css("color", "black");
            $(".instructions").html("<br><br><br><br><h2>Game Over</h2><br><h3>You answered " + wins + " questions correctly.<br>You answered " + losses + " questions incorrectly.</h3>");
                
            var countdownAgain = setInterval(function() {
                xeconds--;
                if (xeconds < 0) {
                    clearInterval(countdownAgain);
                    $(".instructions").empty();
                    $(".instructions").css("color", "black")
                    $(".instructions").css("text-shadow", "1px 1px 2px orangered")
                    $(".instructions").html("<br><br><br><br><h3>Thanks for playing.  Take with you this delicious morsel of 90’s music lore trivia:  The icon of this era, Nirvana, is credited with inventing the Seattle Sound (otherwise known as Grunge).  However this isn’t exactly true.  Many argue that Joshua Homme did so with his band, Kyuss, in Palm Desert, California in the late 80’s.  Kyuss enjoyed only a small cultish fame.  <br> People would gather for huge, drug-fueled concert parties in remote locations deep in the desert wilderness; something like a primitive version of Burning Man.  The concerts would last for literally days without a break.  In this setting bands were expected to play for hours.  What emerged was something incorporating early metal combined with the long, meandering forms of jam bands like the Phish or Widespread Panic.  Kyuss grew to dominate this scene, and then eventually disbanded without ever achieving mainstream popularity.  <br>  Seattle bands discovered this sound and made it wildly popular.  The 90’s came and went, and the popularity of this style faded.  <br>  Later Joshua Homme founded a new band, Queens of the Stone Age, which is much more successful than Kyuss was.  The name of this band is actually a brief description of Homme’s misplacement in this history.  The Stone Age is, is 90’s grunge.  And while he was never the king, his bands were always the Queens behind the scenes.")
                    $(".gameboard").html('<div class="card"><div class="text-center"><Button id="restart" style="text-align: center;">Want to try again?</button></div></div>')
                }
            }, 1000)

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
                    losses = losses + 1
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

}
gameTimer();


$(document).on("click", "#restart", function (event) {
    event.preventDefault();
    console.log("Clicked restart");
    $("#gameStatePrompt").text(40);
    seconds = $("#gameStatePrompt").text();
    gameTimer();
    $(".instructions").empty();
    $(".instructions").html(`<h1 class="display-4"><br><br>How well do you know 90's music?<br>Can you answer the questoins before the time runs
    out?</h1>`);
    $(".gameboard").empty();
    $(".gameboard").html(`<div class="card">
    <form id="trivaQuestions" method="POST">
        <div class="text-center">
            <p>1. The (often one-man) band who's work revitalized use of the synthesizer, and revolutionized
                the presence of electronics in music is:
        </div>
        <div id="question1" class="text-center">
            <input type="radio" name="group1" id="answer1A" value="1">Sound Garden </input>
            <input type="radio" name="group1" id="answer1B" value="2">Nine Inch Nails </input>
            <input type="radio" name="group1" id="answer1C" value="3">Beck </input>
            <input type="radio" name="group1" id="answer1D" value="4">Radiohead </input>
        </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>2. If you ask someone to name a band from the 90s, chances are they will say:</p>
    </div>
    <div id="question2" class="text-center">
        <input type="radio" name="group2" id="answer2A" value="1">Tool </input>
        <input type="radio" name="group2" id="answer2B" value="2">Alice in Chains </input>
        <input type="radio" name="group2" id="answer2C" value="3">Nirvana </input>
        <input type="radio" name="group2" id="answer2D" value="4">Silver Chair </input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>3. The 90s act most heavily influenced by Bob Dylan's lyrics is:</p>
    </div>
    <div id="question3" class="text-center">
        <input type="radio" name="group3" id="answer3A" value="1">Beck </input>
        <input type="radio" name="group3" id="answer3B" value="2">Pavement </input>
        <input type="radio" name="group3" id="answer3C" value="3">Foo Fighters </input>
        <input type="radio" name="group3" id="answer3D" value="4">The Black Crows </input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>4. The "Seattle Sound" made famous by Nirvana was invented by_____ in _____.</p>
    </div>
    <div id="question4" class="text-center">
        <input type="radio" name="group4" id="answer4A" value="1">Kyuss in L.A.</input>
        <input type="radio" name="group4" id="answer4B" value="2">Pearl Jam in Seattle</input>
        <input type="radio" name="group4" id="answer4C" value="3">Bush in London, England</input>
        <input type="radio" name="group4" id="answer4D" value="4">Nirvana in Seattle</input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>5. The band best know for combining hip-hop and grunge, as well as exquisite guitar-craft is:</p>
    </div>
    <div id="question5" class="text-center">
        <input type="radio" name="group5" id="answer5A" value="1">Nick Cave and the Bad Seeds</input>
        <input type="radio" name="group5" id="answer5B" value="2">Stone Temple Pilots</input>
        <input type="radio" name="group5" id="answer5C" value="3">Red Hot Chili Peppers</input>
        <input type="radio" name="group5" id="answer5D" value="4">Rage Against the Machine</input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>6. Mike Patton heads the band_____, known for combining avante garde jazz, disco, funk and death
            metal</p>
    </div>
    <div id="question6" class="text-center">
        <input type="radio" name="group6" id="answer6A" value="1">Primus</input>
        <input type="radio" name="group6" id="answer6B" value="2">Mr. Bungle</input>
        <input type="radio" name="group6" id="answer6C" value="3">Faith No More</input>
        <input type="radio" name="group6" id="answer6D" value="4">Temple of the Dog</input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>7. Experimental, playful, sophisticated, conceptual, complex, and swedish are all adjectives
            applying to which artist:</p>
    </div>
    <div id="question7" class="text-center">
        <input type="radio" name="group7" id="answer7A" value="1">Bjork</input>
        <input type="radio" name="group7" id="answer7B" value="2">Kennhy Wayne Shepard</input>
        <input type="radio" name="group7" id="answer7C" value="3">Jeff Buckley</input>
        <input type="radio" name="group7" id="answer7D" value="4">Jamiroquai</input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>8. The guitarist for the band Radiohead is:</p>
    </div>
    <div id="question8" class="text-center">
        <input type="radio" name="group8" id="answer8A" value="1">Tom Morello</input>
        <input type="radio" name="group8" id="answer8B" value="2">Johnny Greenwood</input>
        <input type="radio" name="group8" id="answer8C" value="3">John Fuentes</input>
        <input type="radio" name="group8" id="answer8D" value="4">Dave Navarro</input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>9. The drummer for the band Jane's Addiction is:</p>
    </div>
    <div id="question9" class="text-center">
        <input type="radio" name="group9" id="answer9A" value="1">Danny Carey</input>
        <input type="radio" name="group9" id="answer9B" value="2">Jon Fishman</input>
        <input type="radio" name="group9" id="answer9C" value="3">Matt Cameron</input>
        <input type="radio" name="group9" id="answer9D" value="4">Stephen Perkins</input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>10. Pearl Jam's first album was titled:</p>
    </div>
    <div id="question10" class="text-center">
        <input type="radio" name="group10" id="answer10A" value="1">Vitology</input>
        <input type="radio" name="group10" id="answer10B" value="2">Ten</input>
        <input type="radio" name="group10" id="answer10C" value="3">Binaural</input>
        <input type="radio" name="group10" id="answer10D" value="4">No Code</input>
    </div>
</div><br>

<div class="card">
    <div class="text-center">
        <p>11. Which act combines rock, blues, experimental jazz, classical, avante guarde, pop, and doo-wap?</p>
    </div>
    <div id="question11" class="text-center">
        <input type="radio" name="group11" id="answer11A" value="1">They Might Be Giants</input>
        <input type="radio" name="group11" id="answer11B" value="2">Faith No More</input>
        <input type="radio" name="group11" id="answer11C" value="3">Frank Zappa</input>
        <input type="radio" name="group11" id="answer11D" value="4">Ween</input>
    </div>
</div><br>

</form>

</div>`);
})


