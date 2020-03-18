console.log("hello world");

const percentage = 5 / 100 * 80;

console.log(percentage);

/*function percentOf (nbOfPercent, total) {
	const result = nbOfPercent / 100 * total;
	return result;
}

const percentageWithFn = percentOf(5, 80);
*/

/*const percentOf = function (nbOfPercent, total) {
	const result = nbOfPercent / 100 * total;
	return result;
}

const percentageWithFn = percentOf(5, 80);
*/

/*this.attribute = "global";

console.log("attribute 1", this.attribute);

const percentOf = function (nbOfPercent, total) {
	this.attritute = "value";
	console.log("attribute 2", this.attribute);
	const result = nbOfPercent / 100 * total;
	return result;
}
console.log("attribute 3", this.attribute);
const percentageWithFn = percentOf(5, 80);
*/

this.attribute = "global";

console.log("attribute 1", this.attribute);

const percentOf = function (nbOfPercent, total) {
	this.attritute = "value";
	console.log("attribute 2", this.attribute);
	const result = nbOfPercent / 100 * total;
	return result;
}

const percentOfBis = (nbOfPercent, total) => {
	console.log("attribute 3", this.attribute);
	const result = nbOfPercent / 100 *total;
	return result;
}
console.log("attribute 4", this.attribute);
const percentageWithFn = percentOf(5, 80);