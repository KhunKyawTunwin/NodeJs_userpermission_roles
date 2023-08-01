const readline = require("readline");

// set starting multiplier and bet amount
let multiplier = 1;
let betAmount = 10;

// create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// function to generate random number and determine if round continues or crashes
function playRound() {
  const rand = Math.random();
  if (rand < 0.01) {
    // set crash point threshold to 1%
    console.log("Round crashed! All bets lost.");
    rl.close();
  } else {
    multiplier *= 20; // set multiplier increment to 1.2
    console.log("Current multiplier:", multiplier.toFixed(2));
    rl.question(
      'Enter "c" to cash out, or any other key to continue: ',
      (answer) => {
        if (answer.toLowerCase() === "c") {
          const payout = betAmount * multiplier;
          console.log(
            "Congratulations! You cashed out and won:",
            payout.toFixed(2)
          );
          rl.close();
        } else {
          playRound();
        }
      }
    );
  }
}

playRound(); // start first round
