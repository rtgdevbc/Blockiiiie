/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * TODO: Generate a random number 1 to 100 and save it to variable correctNumber
 * TODO: Console whether the guess is too high, too low, or is correct inside playGame function
 * TODO: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * TODO: Complete the showYouWon, showNumberAbove, showNumberBelow
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

/**
 * once page loaded these functions will run
 * addEventLeistener("click", functionName)
 * above code will listen to the element action if element gets clicked function called playGame will invoke 
 * if function is already decalred 
 * document.getElementById("idName") will grab the element from the HTML 
 * .value will pick the vlaue from that element 
 */
window.onload = function(){
    document.getElementById("number-submit").addEventListener("click", playGame);
}

function playGame(){
    const num = document.getElementById("number-guess").value;
    console.log(num);
}