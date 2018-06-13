function runGame () {

	let continueDialogue = true;
	while (continueDialogue) {
		console.log("What destination would you like to travel too?");
		let destination = prompt("A) Rocky hills\nB) Elemental square\nC) Dark caves").toLowerCase();

		if (destination === "a") {
		console.log("You arrived at: Rocky hills.");
		continueDialogue = false;
		}
		else if (destination === "b") {
			console.log("You arrived at: Elemental square.");
			continueDialogue = false;
		}
		else if (destination === "c") {
			console.log("You arrived at: Dark caves.");
			continueDialogue = false;
		}
		else {
			console.log("That is not a destination.");
		}
	}

	let monster = (randomMonster().name);
	console.log("\nA " + monster + " has spawned!");

	console.log("---------\n\n");
	combat();
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

	console.log(thePlayer);
	console.log("Name: " + thePlayer.name);
	console.log("Health: " + thePlayer.health);

	// useFish()
	// thePlayer.health = useFish(thePlayer);

	// buyFish()
	// thePlayer.fishPieces = buyFish(thePlayer);

	//checkStats()
	//checkStats(thePlayer);	

	//attack()
	attack(theMonster);
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
	theAttackerHealth = obj.health;
	theAttackerHealth -= 53;
	return theAttackerHealth;
}



runGame();