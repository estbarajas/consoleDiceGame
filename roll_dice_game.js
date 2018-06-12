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
		goblin : {name:"Goblin", damage:5, gold:20},
		troll : {name:"Troll", damage:10, gold:25},
		mage : {name:"Mage", damage:15, gold:30,},
	};
	let monsterArray = [monsters.goblin, monsters.troll, monsters.mage];
	let randomMonsterGenerator = Math.floor(Math.random() * monsterArray.length);
	let temporaryMonster = monsterArray[randomMonsterGenerator];
	//console.log(temporaryMonster);
	return temporaryMonster;
}

function player () {
	let player = {name:"Warrior", health:100, armor:10, fish:1};
	return player;
}

function combat () {
	let theMonster = randomMonster();
	let thePlayer = player();


	console.log(thePlayer);

	console.log("ateFish")

	//useFish()
	thePlayer.health = useFish(thePlayer);
	

	//thePlayer.health = thePlayer.health + 5;

	console.log(thePlayer);
	console.log("Name: " + thePlayer.name);
	console.log("Health: " + thePlayer.health);
	
}

function useFish (obj) {
	let thePlayerHealth = obj.health;
	thePlayerHealth = thePlayerHealth + 55;
	return thePlayerHealth;
}





runGame();