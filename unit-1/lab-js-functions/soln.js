// JS Functions Lab Submission
// Saad Khan
// Sep 23 2022
// General Assembly - SEI-TOR -55

// 1.
function maxOfTwoNumbers(x, y) {
	return x >= y ? x : y;
}

console.log("Q1:\tmaxOfTwo\t(3, 9)\t" + maxOfTwoNumbers(3, 9));

//Define a function, as a function expression, `maxOfThree` that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
// 2. maxOfThree
let maxOfThree = function (x, y, z) {
	return maxOfTwoNumbers(maxOfTwoNumbers(x, y), z);
};
console.log("Q2:\tMaxofThree\t(1,2,3)\t" + maxOfThree(1, 2, 3));

// 3.
//Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
function isCharAVowel(char) {
	let vowels = [`a`, "e", "i", "o", "u", "y"];
	return vowels.includes(char.toLowerCase());
}
console.log("Q3:\tisCharAVowel\t('a')\t" + isCharAVowel("a"));

// 4.
//Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
let sumArray = function (array) {
	let total = 0;
	array.forEach((n) => (total += n));
	return total;
};

let array = [2, 3, 4];
console.log("Q4:\tsumArray\t[2,3,4]\t" + sumArray(array));

// 5.
// Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
function multiplyArray(array) {
	let product = 1;
	array.forEach((n) => (product *= n));
	return product;
}

console.log("Q5:\tmultiplyArray\t[2,3,4]\t" + multiplyArray(array));

// 6.
// Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
let numArgs = function (...args) {
	let count = 0;
	args.forEach((n) => count++);
	return count;
};

console.log("Q6:\tnumArgs\t\t[2,3,4]\t" + numArgs(array));

// 7.
// Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters, and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
function reverseString(string) {
	let result = "";
	for (let i = string.length - 1; i >= 0; i--) {
		result += string.charAt(i);
	}

	return result;
}

console.log("Q7:\treverseString\t('hi')\t" + reverseString("hi"));

// 8.
// Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the length of the longest string.
let longestStringInArray = function (array) {
	let len = 0;
	array.forEach((s) => (len = s.length > len ? s.length : len));
	return len;
};
let array2 = ["a", "bb"];
console.log(
	"Q8:\tlongestStringInArray\t['a', 'bb']\t" + longestStringInArray(array2)
);

//9.
//Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.
function stringsLongerThan(array, limit) {
	let result = [];
	array.forEach((s) => {
		if (s.length > limit) result.push(s);
	});
	return result;
}
let array3 = [...array2, "ccc"];
console.log(
	"Q9:\tstringsLongerThan\t(['a', 'bb','ccc'], 1)\t" +
		stringsLongerThan(array3, 1)
);
