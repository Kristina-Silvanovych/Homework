"use strict";
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let deck = [];
function shuffle(arr) {
  let rand, temp;
  for (let i = 0; i < arr.length; i++) {
    rand = Math.floor(Math.random() * (i + 1));
    temp = arr[rand];
    arr[rand] = arr[i];
    arr[i] = temp;
  }
  return arr;
}
function witch(arr) {
  let card;
  while (cards.length > 0) {
    cards = shuffle(cards);
    //alert(cards);
    alert("Take a card");
    card = cards.pop();
    alert(card);
    deck.push(card);
    if (card == "Q") {
      alert("Player win!!!");
      break;
    }
    alert("I take a card");
    card = cards.pop();
    alert(card);
    deck.push(card);
    alert(deck.toString());
    if (card == "Q") {
      alert("Computer win!!!");
      break;
    }
  }
}

witch(cards);
