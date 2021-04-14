// This project is rewritten from C# example code

// Console log the description
console.log("My Enemies List!");
console.log("----------------");

// Define the array of enemies
const enemies = GetEnemies();

// Define a loop to print out my enemy list
for (let myEnemy of enemies) {
  if (myEnemy.IsReallyHated) {
    console.log(myEnemy.FirstName, myEnemy.LastName, "Really, really dislike!")
  } else {
    console.log(myEnemy.FirstName, myEnemy.LastName)
  }
}

// Define a function to make and return a list of enemies
function GetEnemies() {
  function Enemy(first, last, offense, status) {
    this.FirstName = first;
    this.LastName = last;
    this.Offenses = offense;
    this.IsReallyHated = status;
  }

  const enemy1 = new Enemy(
    "Joshua",
    "Flowers",
    [
      "Being a jerk to me in elementary school",
      "Not being nice to me in elementary school",
    ],
    true
  );

  const enemy2 = new Enemy(
    "Darth",
    "Vader",
    [
      "Cut off Luke's hand",
      "Murdered all those kids",
      "Unkind management practices",
    ],
    false
  );

  const enemy3 = new Enemy(
    "Betty",
    "Rudelady",
    [
      "Phone calls in the theater",
      "Phone calls on the bus",
      "Phone calls in line at the grocery store",
      "Poor conversationalist",
    ],
    true
  );

  const enemy4 = new Enemy(
    "Leon",
    "Peck",
    [
      "Keeps giving me a hotplate",
    ],
    false
  );

  return [enemy1, enemy2, enemy3, enemy4];
}
