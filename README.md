# TriviaGame  Readme

The purpose of this app is to use a combination of Javascript and Jquery to create a timed trivia game.  There should be a method to replay the game without reloading the page.


The app is organized into separate files, each handling a category of function:
    -The html is contained in the file: index.html.  This file handles the layout of the page, the radio button functionality,  and the library connections.

    -Much of the styling is made with bootstrap. 

    -Everything else is in a separate css files called style.css.  All the lighting animations are handled here.

    -The logic is in a file called app.js.  This file runs the timers, changes the background images, and executes the game logic.  It calculates a score when the timer runs out, and then displays a game over screen with some reward trivia. It aslo restarts the game and relevant timers.


To use the app:

-Start simply by loading the page.

-Click the radio button to the left of each bit of text to enter that text as your answer to each question.

-The game ends when the timer reaches zero whether you have finished answering the questions or not. 

-The game will then display the number of correct and incorrect answers.

-A moment later it will display a reward trivia tidbit, as well as button which will restart the game.


Link to a video of the app working:
https://drive.google.com/file/d/1RJH4Z6_Z3h1RKcO6BI7mlQXu-CkLfG6D/view

Link to the deployed site:
https://jeff-ashear.github.io/TriviaGame/



List of the technologies used in this site:
HTML: basic page layout.
Bootstrap: basic styling.
CSS: advanced and custom styling.
Javascript: timers and functions.
Jquery: dynamic HTML alteration and interactivity.



I made this site entirely on my own; with the exception of the images
