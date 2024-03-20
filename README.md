inPicture
==========
Coding Academy bonus exercise (Day01 - Modern MVC Architecture).

About:
======

You will be presented with an image of a pokemon, and 2 options for its original region. <br>
To play, select which region the pokemon is from. 

If you are incorrect, the browser will ask you to try again.  <br>
If you are correct, you will be presented with the next pokemon. 

There are a total of 10 possible pokemon, out of which, 5 are randomly selected for each game.  <br>
Once you have answered 5 questions correctly, you will be notified that you have won the game, and asked whether you would like to play again.

If you choose to play again, a new game will start, with 5 questions randomly selected again.  <br>
If you choose not to, you will see a message thanking you for playing and letting you know that you can refresh the page to play again. 


Original Instructions:
=======================

In this game, the player sees an image and some options that describe the image, the user picks the right option and moves to the next question if correct.

Some global vars for the game:

1. gQuests = [ <br>
  {id: 1, opts:[], correctOptIndex:1 } <br>
  {id: 2, opts:[], correctOptIndex:0 } <br>
  {…}… <br>
  ] // save the list of the questions

2. gCurrQuestIdx = 0 // save the current question <br>
  Note: It is convenient to have the images named by the quest id (e.g. : 1.jpg)

3. Some of the functions: <br>
  a. initGame() <br>
  b. createQuests() – return an hard-coded (ready made) <br>
  array with 3-5 questions <br>
  c. renderQuest() <br>
  d. checkAnswer(optIdx) <br>

4. If the player is correct, move on to next quest.
   
5. After last question – show a 'Victorious' msg to the user and a restart button.
