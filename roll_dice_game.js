function runGame () {
	introDialogue();
	combat();
}

function introDialogue (){
	let continueDialogue = true;
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

function rollDice (numberOfSides) {
	let randomNumber = Math.floor(Math.random() * numberOfSides) + 1;
	return randomNumber;
}

function randomMonster () {
	let monsters = {
		goblin : {name:"Goblin", health:100, damage:5, gold:20},
		troll : {name:"Troll", health:100, damage:10, gold:25},
		mage : {name:"Mage", health:100, damage:15, gold:30,},
	};
	let monsterArray = [monsters.goblin, monsters.troll, monsters.mage];
	let randomMonsterGenerator = Math.floor(Math.random() * monsterArray.length);
	let temporaryMonster = monsterArray[randomMonsterGenerator];
	//console.log(temporaryMonster);
	return temporaryMonster;
}

function player () {
	let player = {name:"Warrior", health:100, armor:10, fishPieces:1};
	return player;
}

function combat () {
	let theMonster = randomMonster();
	let thePlayer = player();

	//console.log("\nA " + monster + " has spawned!");

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

function checkStats (obj) { //fix armor status
	let thePlayer = obj;
	console.log("Health points: " + thePlayer.health + " | Fish pieces: " + thePlayer.fishPieces + " | Armor status: Broken");
}

function attack (obj) { //if monster less dmg then warrior
	let theAttackerHealth = obj.health;
	theAttackerHealth -= 53;
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