import "./style.css";
import "bootstrap";

window.onload = function() {
  generateCard();

  document.getElementById("newCard").addEventListener("click", function() {
    generateCard();
  });
};

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
