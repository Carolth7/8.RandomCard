/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const BODY = document.querySelector("body");
const SUIT = ["♦", "♥", "♠", "♣"];
const NUMBERS = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const RANDOMSUIT = random(SUIT); // POSICIONES (index)
const RANDOMNUMBERS = random(NUMBERS);

function random(array) {
  return Math.floor(Math.random() * array.length);
}

window.onload = function() {
  createCard();
};

function createCard() {
  let card = document.createElement("div");
  card.classList.add("card");
  BODY.appendChild(card);

  let iconHeart = document.createElement("div");
  iconHeart.classList.add("iconHeart");
  let iconText = document.createTextNode(SUIT[RANDOMSUIT]); //COMO ES variable no van con comillas
  iconHeart.appendChild(iconText);
  card.appendChild(iconHeart);

  let numberElement = document.createElement("div");
  numberElement.classList.add("numberElement");
  let numberText = document.createTextNode(NUMBERS[RANDOMNUMBERS]);
  numberElement.appendChild(numberText);
  card.appendChild(numberElement);

  let inverseElement = document.createElement("div");
  inverseElement.classList.add("inverseElement");
  let inverseText = document.createTextNode(SUIT[RANDOMSUIT]);
  inverseElement.appendChild(inverseText);
  card.appendChild(inverseElement);

  if (SUIT[RANDOMSUIT] == "♣" || SUIT[RANDOMSUIT] == "♠") {
    iconHeart.classList.add("red");
    inverseElement.classList.add("red");
    numberElement.classList.add("red");
  } else {
    iconHeart.classList.add("black");
    inverseElement.classList.add("black");
    numberElement.classList.add("black");
  }
}
