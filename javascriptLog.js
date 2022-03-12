
// TEMPLATE //
// Day:

// Today's Progress:

// Thoughts:

// Link(s) to work:



// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
	// iterate over string
	//
}

// Day 1: 03/01/22 11:44am

// Today's Progress: Getting back into it

// Thoughts: Ended up finishing this 3/02/22. Threw me for a loop initiall because I'm rusty, but it came together in the end. I definitely see that coding everyday, or just doing the katas/challenges is necessary. Anyway, I liked the use of the regular expressions, super clean. I also like doing the reverse(!) check initially to if string is empty vs trying to add in logic for it later. It shortens the code and just gets that use case out of the way.

// Link(s) to work: https://www.codewars.com/kata/55c45be3b2079eccff00010f/train/javascript

// Your order, please

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
	if (!words.length) return '';

	// seperate string into individual words in array
	let seperateWords = words.split(' ');
	let arr = [];

	// Check each word for number
	seperateWords.forEach((word) => {
		let match = word.match(/\d+/g);
		arr[match.toString() - 1] = word;
	});

	return arr.join(' ');
}

// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order(''));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

// Day : 03/03/22

// Today's Progress: Getting back into it

// Thoughts: Boy this one threw me. And to think the answer was just n**3 lol. Anyway, I definitely felt the 'layered' thinking is rusty. Need to do more of these. .reduce() didn't feel to terrible to use though .

// Link(s) to work: https://www.codewars.com/kata/55fd2d567d94ac3bc9000064/train/javascript

function rowSumOddNumbers(n) {
	let triangleArr = [];
	let count = 1;

	for (let i = 0; i < n; i++) {
		let subArr = [];
		for (let j = 0; j <= i; j++) {
			subArr.push(count);
			count += 2;
		}
		triangleArr.push(subArr);
	}

	return triangleArr[n - 1].reduce((a, b) => a + b);
}

// rowSumOddNumbers(4);
// rowSumOddNumbers(1);
// rowSumOddNumbers(42);

// Day: 03/06/22

// Today's Progress: Just trying to stay in it

// Thoughts:

// Link(s) to work: https://www.codewars.com/dashboard

// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
    // const regexp = /^[\w-_]+$/g
    const regexp = /[_-]+/g
    str.replaceAll(regexp, 'a')
    console.log(str)
    console.log(regexp)
}

// toCamelCase('the_stealth_warrior');
// toCamelCase('The-Stealth-Warrior');
// toCamelCase('A-B-C');


// Day: 3/12/22 10:00am

// Today's Progress: Warming up fo the day 

// Thoughts: Felt pretty comfortable with this one. 

// Link(s) to work: https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript

// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
	let splitStr = str.split(' ')
	splitStr.forEach((word, index) => {
		if (word.length) {
			let splitWord = word.split('').reverse().join('')
			splitStr[index]= splitWord
		}
	})
	return splitStr.join(' ');
}


reverseWords('The quick brown fox jumps over the lazy dog.');
reverseWords('apple');
reverseWords('a b c d');
reverseWords('double  spaced  words');