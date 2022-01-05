// Game States
// "WIN" - Player robot has defeated all enemy-robots
//   * Fight all enemy-robots
//   * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less

var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
  // repeat and execute as long as the enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) {
    // ask for fight or skip input
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    // if player chooses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
      // confirm player wants to skip
      var confirmSkip = window.confirm("Are you sure you'd like to skip?");
      //if yes (true), leave fight
      if (confirmSkip) {
        window.alert(playerName + " has chosen to skip this fight!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    }
    // player attacks: enemyHealth - playerAttack, new value store in enemyHealth
    enemyHealth = enemyHealth - playerAttack;
    // log a resulting message to console to show it worked
    console.log(
      playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining."
    );
    // check enemy's health
    if (enemyHealth <= 0) {
      window.alert(enemyName + " has died!");
      // award player money for winning
      playerMoney = playerMoney + 20;
      // leave while loop since enemy died
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
    // enemy attacks: playerHealth - enemyAttack, new value stored in playerHealth
    playerHealth = playerHealth - enemyAttack;
    // log a resulting message to console to show it worked
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
    );
    // check player's health
    if (playerHealth <= 0) {
      window.alert(playerName + " has died!");
      // leave while loop since player has died
      break;
    } else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

for(var i = 0; i < enemyNames.length; i++) {
  if (playerHealth > 0) {
    // let player know what round they ar in
    window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    // pick new enemy to fight based on the index of the enemyNames array
    var pickedEnemyName = enemyNames[i];
    // reset enemyHealth before starting a new fight
    enemyHealth = 50;
    // use debugger to pause script from running and check whats goin on
    // debugger;
    
    // pass pickedEnemyName's value into fight function where it will
    // assume the value of enemyName parameter
    fight(pickedEnemyName);
  } else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
  }
}