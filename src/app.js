/* eslint-disable */
import "./style.css";
function generateCard() {
  // generator //
  let suits = ["♦", "♥", "♠", "♣"];
  let shuffle = Math.random();
  let totalSuits = suits.length;
  let shuffleIndex = Math.floor(shuffle * totalSuits);
  let randomSuit = suits[shuffleIndex];
  let SuitElements = document.querySelectorAll(".suit");

  SuitElements.forEach(function(suit) {
    if (randomSuit == "♥" || randomSuit == "♦") {
      suit.style.color = "red";
    } else {
      suit.style.color = "black";
    }
    suit.innerHTML = randomSuit;
  });
  // Card NUMBER//
  let cardValue = [
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
  // num generator //
  let shuffleValue = Math.random();
  let totalValue = cardValue.length;
  let shuffleValueIndex = Math.floor(shuffleValue * totalValue);
  let randomValue = cardValue[shuffleValueIndex];
  let CardValueElements = document.querySelector(".number");

  CardValueElements.innerHTML = randomValue;
}

window.onload = generateCard();
