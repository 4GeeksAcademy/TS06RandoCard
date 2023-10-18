import "./style.css";
import "bootstrap";

window.onload = function() {
  generateCard();

  document.getElementById("newCard").addEventListener("click", function() {
    generateCard();
  });

  document.getElementById("cardWidth").addEventListener("change", function() {
    document.getElementById("card").style.width = this.value + "px";
  });

  document.getElementById("cardHeight").addEventListener("change", function() {
    document.getElementById("card").style.height = this.value + "px";
  });
};

document.getElementById("newCard").addEventListener("click", generateNewCard);

document.getElementById("cardWidth").addEventListener("input", updateCardSize);
document.getElementById("cardHeight").addEventListener("input", updateCardSize);

function generateNewCard() {
  // Generate a new card...
}

// Set a timer to generate a new card after 10 seconds
setTimeout(generateNewCard, 10000);

function updateCardSize() {
  const cardWidth = document.getElementById("cardWidth").value;
  const cardHeight = document.getElementById("cardHeight").value;
  const error = document.getElementById("error");

  if (
    cardWidth < 150 ||
    cardWidth > 400 ||
    cardHeight < 150 ||
    cardHeight > 400
  ) {
    error.textContent = "Card width and height must be between 150 and 400.";
  } else {
    error.textContent = "";
    const card = document.getElementById("card");
    card.style.width = `${cardWidth}px`;
    card.style.height = `${cardHeight}px`;
  }
}

function generateCard() {
  const suits = ["heart", "diamond", "spade", "club"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  const card = document.getElementById("card");

  // Remove existing classes
  card.className = "";

  // Add new classes
  card.classList.add("card", randomSuit);

  // Update card content
  card.querySelector(".top").textContent = getSuitSymbol(randomSuit);
  card.querySelector(".middle").textContent = randomValue;
  card.querySelector(".bottom").textContent = getSuitSymbol(randomSuit);
}

function getSuitSymbol(suit) {
  switch (suit) {
    case "heart":
      return "\u2665";
    case "diamond":
      return "\u2666";
    case "spade":
      return "\u2660";
    case "club":
      return "\u2663";
    default:
      return "";
  }
}
let cardInterval;

window.onload = function() {
  generateCard();

  // Start the card generation interval
  cardInterval = setInterval(generateCard, 10000);

  document.getElementById("newCard").addEventListener("click", function() {
    // Stop the current interval
    clearInterval(cardInterval);

    generateCard();

    // Start a new interval
    cardInterval = setInterval(generateCard, 10000);
  });

  document.getElementById("cardWidth").addEventListener("change", function() {
    document.getElementById("card").style.width = this.value + "px";
  });

  document.getElementById("cardHeight").addEventListener("change", function() {
    document.getElementById("card").style.height = this.value + "px";
  });
};
