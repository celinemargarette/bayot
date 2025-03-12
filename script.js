// Define the correct word for the game
const correctWord = "apple";

// Get references to the DOM elements
const guessInput = document.getElementById('guess-input');
const submitButton = document.getElementById('submit-guess');
const resultText = document.getElementById('result');

// Add event listener to the submit button
submitButton.addEventListener('click', checkGuess);

function checkGuess() {
    // Get the user's guess and trim any extra spaces
    const userGuess = guessInput.value.trim().toLowerCase();

    // Check if the guess matches the correct word
    if (userGuess === correctWord) {
        resultText.textContent = "Correct! Well done!";
        resultText.style.color = "green";
    } else {
        resultText.textContent = "Incorrect! Try again.";
        resultText.style.color = "red";
    }

    // Clear the input field after submitting
    guessInput.value = '';
}
