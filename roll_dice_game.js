function runGame () {

	let continueDialogue = true;
	while (continueDialogue) {
		console.log("what destination would you like to travel too?");
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
	console.log(temporaryMonster);
	return temporaryMonster;
}

function combat () {
	let theMonster = randomMonster();
	// console.log("Name: " + theMonster.name);
	// console.log("Damage: " + theMonster.damage);
	// console.log("Gold: " + theMonster.gold);
}

function checkFood () {

}

function useFood () {

}

function attack () {

}

runGame();