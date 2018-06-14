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
		goblin : {name:"Goblin", health:125, damage:5, gold:20},
		troll : {name:"Troll", health:135, damage:10, gold:25},
		mage : {name:"Mage", health:145, damage:15, gold:30,},
	};
	let monsterArray = [monsters.goblin, monsters.troll, monsters.mage];
	let randomMonsterGenerator = Math.floor(Math.random() * monsterArray.length);
	let temporaryMonster = monsterArray[randomMonsterGenerator];
	//console.log(temporaryMonster);
	return temporaryMonster;
}

function player () {
	let player = {name:"Warrior", health:100, armor:"Broken", fishPieces:1, gold:2, damage:5};
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
				let defensiveDecision = prompt("A) Attempt to block attack.\nB) Eat fish to heal.\nC) Repair Armor.\nD) Nothing.").toLowerCase();

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
						console.log("\nBlock failed, this is going to hurt.")
						//console.log("Do the monster attack here.");
						break;
					}

					break;
				}
				else if (defensiveDecision === "b") {
					console.log("Choose option B.");
					break;
				}
				else if (defensiveDecision === "c") {
					console.log("Choose option C.");
					break;
				}
				else if (defensiveDecision === "d") {
					console.log("Choose option D.");
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
		console.log("Game Over, you died in combat.");
	}
	else {
		console.log("Game Over, you won the fight!");
	}

	//console.log("\nExited succesfully.");


	//console.log(thePlayer);
	//console.log("Name: " + thePlayer.name);
	//console.log("Health: " + thePlayer.health);
	
	// useFish()
	// thePlayer.health = useFish(thePlayer);

	// buyFish()
	// thePlayer.fishPieces = buyFish(thePlayer);

	//checkStats()
	//checkStats(thePlayer);	

	//attack()
	//theMonster.health = attack(theMonster);

	//block()
	//block(thePlayer);

	//breakArmor()
	//breakArmor(thePlayer);
}

function buyFish (obj) { //to do: lower players gold randomly
	let thePlayerFishPieces = obj.fishPieces;
	thePlayerFishPieces += 1;
	return thePlayerFishPieces;
}

function useFish (obj) { //to do: make health increase random with rollDice()
	let thePlayerHealth = obj.health;
	thePlayerHealth += 55;
	return thePlayerHealth;
}

function getStats (obj) { //fix armor status
	let theObject = obj;

	if(theObject.name === "Warrior") {
		console.log("Warrior stats (You): " + "Health points: " + theObject.health + " | Fish pieces: " + theObject.fishPieces + " | Gold owned: "  + theObject.gold + " | Armor status: " + theObject.armor);
	}
	else {
		console.log(theObject.name + " stats: " + "Health points: " + theObject.health + " | Base Damage: " + theObject.damage + " | Gold drop: " + theObject.gold);
	}
	
}

function attack (obj, damage) { //if monster less dmg then warrior
	let theAttackerHealth = obj.health;
	let baseDamage = damage;
	let bonusDamage = rollDice(10);
	let totalDamage = baseDamage + bonusDamage;
	console.log("The attack did: " + totalDamage + " damage.");
	theAttackerHealth -= totalDamage;
	return theAttackerHealth;
}

function block () { //return it onto the attack calculation!! blocked dmg to cancel attack...
	let probabilityOfBlock = rollDice(2);
	return probabilityOfBlock;
}

function breakArmor () { //call it within block? possibly return boolean?
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