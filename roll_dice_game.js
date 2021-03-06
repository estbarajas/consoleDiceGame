function runGame () {
	introDialogue();
	combat();
}

function introDialogue () {
	let continueDialogue = true;
	console.log("Adventures of a brave WARRIOR!\n\n");
	while (continueDialogue) {
		console.log("What destination would you like to travel to?");
		let destination = prompt("A) Rocky hills\nB) Elemental square\nC) Dark caves").toLowerCase();

		if (destination === "a") {
		console.log("You arrived at: Rocky hills.\n\n");
		continueDialogue = false;
		}
		else if (destination === "b") {
			console.log("You arrived at: Elemental square.\n\n");
			continueDialogue = false;
		}
		else if (destination === "c") {
			console.log("You arrived at: Dark caves.\n\n");
			continueDialogue = false;
		}
		else {
			console.log("That is not a destination.\n\n");
		}
	}
}

function rollDice (numberOfSides) {
	let randomNumber = Math.floor(Math.random() * numberOfSides) + 1;
	return randomNumber;
}

function randomMonster () {
	let monsters = {
		goblin : {name:"Goblin", health:125, damage:5, gold:rollDice(25)},
		troll : {name:"Troll", health:135, damage:10, gold:rollDice(30)},
		mage : {name:"Mage", health:145, damage:15, gold:rollDice(35),},
	};
	let monsterArray = [monsters.goblin, monsters.troll, monsters.mage];
	//let randomMonsterGenerator = Math.floor(Math.random() * monsterArray.length);
	let randomMonsterGenerator = Math.floor(Math.random() * monsterArray.length);
	let temporaryMonster = monsterArray[randomMonsterGenerator];
	//console.log(temporaryMonster);
	return temporaryMonster;
}

function player () {
	let player = {name:"Warrior", age:rollDice(22) , health:70, armor:"Broken", fishPieces:3, gold:5, damage:5};
	return player;
}

function combat () {
	let theMonster = randomMonster();
	let thePlayer = player();
	let monsterNotDead = true;
	let offensivePlayDialogue = true;
	let defensivePlayDialogue = true;
	let defensiveInnerLoop = true;
	let warriorIsDead = false;

	console.log("Warning: "+ "A " + theMonster.name + " has spawned!\n\n");
	//getStats(theMonster);
	//getStats(thePlayer);

	while (monsterNotDead) {
		while (offensivePlayDialogue) {
			console.log("Would you like to attack the " + theMonster.name + "?\n\n");
			let decisionToAttack = prompt("A) Yes, attack enemy!\nB) Not yet, check stats.\n").toLowerCase();

			if (decisionToAttack === "a") {
				//let initialMonsterHealth = theMonster.health;
				//let finalMonsterHealth = initialMonsterHealth;
				theMonster.health = attack(theMonster, thePlayer.damage);
				if (!(theMonster.health <= 0)) {
					console.log("The " + theMonster.name + " has " + theMonster.health + " health left.\n\n");
					break;
				}
				else {
					console.log("The " + theMonster.name + " is dead!\n\n");
					monsterNotDead = false;
					offensivePlayDialogue = false;
					defensivePlayDialogue = false;
					defensiveInnerLoop = false;
					//break;
				}
			}
			else if (decisionToAttack === "b") {
				console.log("Stats:");
				getStats(theMonster);
				getStats(thePlayer);
				console.log(" ");
			}
			else {
				console.log("Not a valid option.\n\n");
			}
		}
		//console.log("\nExited once.")

		while (defensivePlayDialogue) {
			console.log("Warning: The " + theMonster.name + " is charging an attack...\n\n");
			
			while (defensiveInnerLoop) {
				console.log("What would you like to do?");
				let defensiveDecision = prompt("A) Attempt to block attack.\nB) Eat fish to heal.\n").toLowerCase();

				if (defensiveDecision === "a") {
					console.log("Chose option to attempt to Block.");
					if(thePlayer.armor === "Broken") {
						console.log("\nCan't block with broken armor. Would you like to fix it for 3 gold?");
						let fixArmorQuestion = prompt("A) Yes\nB) No").toLowerCase();
						if (fixArmorQuestion === "a"){
							if (thePlayer.gold >= 3){
								thePlayer.gold = thePlayer.gold - 3;
								thePlayer.armor = "Intact";
								console.log("Update: Armor has been repaired.");
							}
							else {
								console.log("Not enough gold to repair.\n\n");
								//console.log("You took X damage!");
								console.log("Ouch! You were attacked.");
								thePlayer.health = attack(thePlayer, theMonster.damage);
								if (!(thePlayer.health <= 0)) {
									console.log("The " + thePlayer.name + " has " + thePlayer.health + " health left.");
								}
								else {
									console.log("Warrior is dead.");
									warriorIsDead = true;
									monsterNotDead = false;
									offensivePlayDialogue = false;
									defensivePlayDialogue = false;
									defensiveInnerLoop = false;
								}
							}
						}
						else if (fixArmorQuestion === "b") {
							console.log("Did not repair armor.\n\n");
							//console.log("You took Y damage!");
							console.log("Ouch! You were attacked.");
							thePlayer.health = attack(thePlayer, theMonster.damage);
							if (!(thePlayer.health <= 0)) {
								console.log("The " + thePlayer.name + " has " + thePlayer.health + " health left.");
							}
							else {
									console.log("Warrior is dead.");
									warriorIsDead = true;
									monsterNotDead = false;
									offensivePlayDialogue = false;
									defensivePlayDialogue = false;
									defensiveInnerLoop = false;
								}
						}
						else {
							console.log("Wrong input. You unexpectedly are attacked.\n\n");
							//console.log("You took Z damage.")
							thePlayer.health = attack(thePlayer, theMonster.damage);
							if (!(thePlayer.health <= 0)) {
								console.log("The " + thePlayer.name + " has " + thePlayer.health + " health left.");
							}
							else {
									console.log("Warrior is dead.");
									warriorIsDead = true;
									monsterNotDead = false;
									offensivePlayDialogue = false;
									defensivePlayDialogue = false;
									defensiveInnerLoop = false;
								}
						}
					}
					else if ((block() >= 2)) { 
						console.log("\nSuccesful block, you receive no damage.");
						thePlayer.armor = breakArmor();
						console.log("Armor status: " + thePlayer.armor);
						break;
					}
					else {
						console.log("\nBlock failed, this is going to hurt.");
						console.log("You were attacked.");
						thePlayer.health = attack(thePlayer, theMonster.damage);
							if (!(thePlayer.health <= 0)) {
								console.log("The " + thePlayer.name + " has " + thePlayer.health + " health left.");
							}
							else {
									console.log("Warrior is dead.");
									warriorIsDead = true;
									monsterNotDead = false;
									offensivePlayDialogue = false;
									defensivePlayDialogue = false;
									defensiveInnerLoop = false;
								}
						break;
					}

					break;
				}
				else if (defensiveDecision === "b") {
					if(thePlayer.health < 100 && thePlayer.fishPieces > 0) {
						thePlayer.health = thePlayer.health + useFish(thePlayer);
						thePlayer.fishPieces --;
						//console.log("You have: " + thePLayer.fishPieces + "left.");
						if (thePlayer.health >= 100) {
							console.log("Full Health.");
							thePlayer.health = 100;
						}
						//break;
					}
					else if (thePlayer.fishPieces <= 0) {
						console.log("No fish left.")
					}
					else {
						console.log("...");
					}
					console.log("\nYou were attacked.")
					thePlayer.health = attack(thePlayer, theMonster.damage);
							if (!(thePlayer.health <= 0)) {
								console.log("The " + thePlayer.name + " has " + thePlayer.health + " health left.");
							}
							else {
									console.log("Warrior is dead.");
									warriorIsDead = true;
									monsterNotDead = false;
									offensivePlayDialogue = false;
									defensivePlayDialogue = false;
									defensiveInnerLoop = false;
								}
					break;
				}
				else {
					console.log("Not a valid option.\n\n");
				}
			}

			console.log(" ");
			break;
		}
	}

	if (warriorIsDead) {
		//console.log("Final Stats: ");
		//console.log(getStats(thePlayer));
		thePlayer.health = 0;
		console.log("Final stats:");
		getStats(thePlayer);
		console.log("Game Over, you died in combat.");
	}
	else {
		//onsole.log("Final Stats: ");
		let goldReward = theMonster.gold;
		console.log("You earned: " + goldReward + " gold.");
		thePlayer.gold = thePlayer.gold + goldReward;
		console.log("Final stats:");
		getStats(thePlayer);
		console.log("Game Over, you won the fight!");
	}
}

function buyFish (obj) { 
	let thePlayerFishPieces = obj.fishPieces;
	thePlayerFishPieces += 1;
	return thePlayerFishPieces;
}

function useFish (obj) { 
	let thePlayerHealth = obj.health;
	let theRandomHealAmount = rollDice(6);
	thePlayerHealth += theRandomHealAmount;
	console.log("Ate a fish and it healed: " + theRandomHealAmount + " points.");
	return theRandomHealAmount;
}

function getStats (obj) { 
	let theObject = obj;
	if(theObject.name === "Warrior") {
		console.log("Warrior stats (You): " + "Health points: " + theObject.health + " | Age: " + theObject.age + " | Fish pieces: " + theObject.fishPieces + " | Gold owned: "  + theObject.gold + " | Armor status: " + theObject.armor);
	}
	else {
		console.log(theObject.name + " stats: " + "Health points: " + theObject.health + " | Base Damage: " + theObject.damage + " | Gold drop: " + theObject.gold);
	}
}

function attack (obj, damage) {
	let theAttackerHealth = obj.health;
	let baseDamage = damage;
	let bonusDamage = rollDice(10);
	let totalDamage = baseDamage + bonusDamage;
	console.log("The attack did: " + totalDamage + " damage.");
	theAttackerHealth -= totalDamage;
	return theAttackerHealth;
}

function block () { 
	let probabilityOfBlock = rollDice(2);
	return probabilityOfBlock;
}

function breakArmor () { 
	let probabilityOfArmorBreaking = rollDice(4);
	let brokenOrFixed = "Intact";
	 if (probabilityOfArmorBreaking >= 4) {
	 	console.log("Your armor has broken, from the impact. Can't block again before repairing.");
	 	brokenOrFixed = "Broken";
	 }
	 else {
	 	console.log("Your armor did not break from the impact. Can continue to attempt blocking attacks.");
	 }
	 return brokenOrFixed;
}

runGame();