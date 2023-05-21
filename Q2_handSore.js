function getHandScore(cards) {
  let suits = {};
  let ranks = {};
  let score = 0;

  // Count the number of color and level.
  for (let card of cards) {
    let suit = card[card.length - 1]; // color of the cards
    let rank = card.substring(0, card.length - 1); // the level of the cards

    suits[suit] = (suits[suit] || 0) + 1;
    ranks[rank] = (ranks[rank] || 0) + 1;
  }

  // Calculate the score from the color of the cards.
  for (let suit in suits) {
    if (suits[suit] === 3) {
      score = Math.max(score, sumCardValues(cards)); // The score is added to the sum of the values ​​of all the cards.
    }
  }

  // Calculate the score based on the level of the cards.
  for (let rank in ranks) {
    if (ranks[rank] === 3) {
      if (rank === "A") {
        score = 35;
      } else {
        score = 32.5;
      }
    }
  }

  return score;
}

// Calculates the sum of the values ​​of all the cards.
function sumCardValues(cards) {
  let sum = 0;
  for (let card of cards) {
    let rank = card.substring(0, card.length - 1);
    sum += getCardValue(rank);
  }
  return sum;
}

// Calculate the value of each level of cards.
function getCardValue(rank) {
  if (rank === "A") {
    return 11;
  } else if (["J", "Q", "K"].includes(rank)) {
    return 10;
  } else {
    return parseInt(rank);
  }
}

console.log(getHandScore("S8 S10 CA"));