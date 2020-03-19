// SI...SINON
if (numberVariable === "3.14") {
	console.log("c'est vrai !");
} else{
	console.log("c'est faux !");
}

// SI...SINON SI....SINON SI
if(numberVariable === "zeiufh") {
	console.log("condition l est vraie");
} else if (strVariable = "erhufue") {
	console.log("condition l est fausse , mais condition 2 est vraie");
} else {
	console.log("toutes les conditions sont fausses");
}

// SWITCH
switch(numberVariable) {
	case "strl": // if (numberVariable === "strl") {
	console.log("condition l est vraie");
		break;
	case "erhufue";
	console.log("la condition l est fausse, mais la 2 est vraie");
		break;
	default: // } else {
		console.log("toutes les conditions sont fausses");
		break;
	}

//TANT QUE
while (numberVariable === 3.24) {
	console.log("c'est encore vrai");
}
do {
	console.log("c'est la première fois, ou c'est encore vrai");
} while (numberVariable === 3.24);

//POUR...  VARIANT DE...A...EN PAS DE...
for (let i = 0; i < 100; i++) {
	console.log(i);
}