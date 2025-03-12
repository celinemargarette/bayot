const images = [
    {
        pictures: ['img1.jpg', 'img2.jpg', 'img3.jpg', 'img4.jpg'],
        answer: 'apple'
    },
    {
        pictures: ['img5.jpg', 'img6.jpg', 'img7.jpg', 'img8.jpg'],
        answer: 'dog'
    },
    // Add more levels with corresponding pictures and answers
];

let currentLevel = 0;

// Function to load the images and answer for the current level
function loadLevel(level) {
    const levelData = images[level];
    document.getElementById('img1').src = levelData.pictures[0];
    document.getElementById('img2').src = levelData.pictures[1];
    document.getElementById('img3').src = levelData.pictures[2];
    document.getElementById('img4').src = levelData.pictures[3];
    document.getElementById('guess').value = ''; // Reset input field
    document.getElementById('message').textContent = ''; // Clear message
    document.getElementById('next').style.display = 'none'; // Hide 'Next' button
}

// Function to check if the player's guess is correct
function checkGuess() {
    const guess = document.getElementById('guess').value.trim().toLowerCase();
    const levelData = images[currentLevel];
    
    if (guess === levelData.answer) {
        document.getElementById('message').textContent = 'Correct! Well done!';
        document.getElementById('next').style.display = 'block'; // Show next button
    } else {
        document.getElementById('message').textContent = 'Try again!';
    }
}

// Function to load the next level
function nextLevel() {
    currentLevel++;
    if (currentLevel < images.length) {
        loadLevel(currentLevel);
    } else {
        document.getElementById('message').textContent = 'You completed the game!';
        document.getElementById('next').style.display = 'none'; // Hide next button
    }
}

// Event listener for submitting the guess
document.getElementById('submit').addEventListener('click', checkGuess);

// Event listener for moving to the next level
document.getElementById('next').addEventListener('click', nextLevel);

// Load the first level when the page loads
window.onload = function() {
    loadLevel(currentLevel);
};
