function runGame () {
	introDialogue();
	combat();
}

function introDialogue () {
	let continueDialogue = true;
	console.log("Adventures of a brave WARRIOR!\n\n");
	while (continueDialogue) {
		console.log("What destination would you like to travel too?");
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

function offensiveDialogue () {

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
	let player = {name:"Warrior", health:100, armor:10, fishPieces:1, gold:10, damage:5};
	return player;
}

function combat () {
	let theMonster = randomMonster();
	let thePlayer = player();
	let monsterNotDead = true;
	let continueDialogue = true;

	console.log("Warning: "+ "A " + theMonster.name + " has spawned!\n\n");
	//getStats(theMonster);
	//getStats(thePlayer);

	while (monsterNotDead) {

		while (continueDialogue) {
			console.log("Would you like to attack?");
			let decisionToAttack = prompt("A) Yes, attack enemy!\nB) Not yet, check stats.\n").toLowerCase();
			
			if (decisionToAttack === "a") {
				let initialMonsterHealth = theMonster.health;
				theMonster.health = attack(theMonster, thePlayer.damage);
				console.log("The " + theMonster.name + " has " + theMonster.health + "/" + initialMonsterHealth + " health left.")
				continueDialogue = false;
			}
			else if (decisionToAttack === "b") {
				console.log("\nStats:");
				getStats(theMonster);
				getStats(thePlayer);
				continueDialogue = false;
			}
			else {
				console.log("Not a valid option.\n\n");
			}
		}
		console.log("\nExited once.")
		monsterNotDead = false;
	}

	console.log("Exited twice");


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
		console.log("Warrior stats (You): " + "Health points: " + theObject.health + " | Fish pieces: " + theObject.fishPieces + " | Gold owned: "  + theObject.gold + " | Armor status: Broken");
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
	//let blockedDamage = 0;
	if (probabilityOfBlock >= 2) {
		console.log("You blocked the attack!");
	}
	else {
		console.log("Rekt m8 :(");
	}
}

function breakArmor (obj) { //call it within block? possibly return boolean?
	let thePlayerArmor = obj.armor;
	let probabilityOfArmorBreaking = rollDice(4);
	 if (probabilityOfArmorBreaking >= 4) {
	 	console.log("Your armor has broken, check stats!");
	 }
	 else {
	 	console.log("Your armor did not break! =]")
	 }
}

runGame();