// script.js
const facts = [
    "I once tried indoor skydiving and loved the adrenaline rush.",
    "I have a collection of over 50 postcards from around the world.",
    "I can solve a Rubik’s Cube in under two minutes.",
    "I enjoy photography and love capturing sunsets and landscapes.",
    "I’ve recently taken up gardening and successfully grew my first batch of herbs."
];

const factDisplay = document.getElementById('fact-display');
const newFactBtn = document.getElementById('new-fact-btn');

function getRandomFact() {
    const randomIndex = Math.floor(Math.random() * facts.length);
    return facts[randomIndex];
}

function displayNewFact() {
    const fact = getRandomFact();
    factDisplay.textContent = fact;
}

// Display initial fact
displayNewFact();

// Add click event listener to button
newFactBtn.addEventListener('click', displayNewFact);