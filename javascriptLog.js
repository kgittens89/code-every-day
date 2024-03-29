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
	const regexp = /[_-]+/g;
	str.replaceAll(regexp, 'a');
	console.log(str);
	console.log(regexp);
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
	let splitStr = str.split(' ');
	splitStr.forEach((word, index) => {
		if (word.length) {
			let splitWord = word.split('').reverse().join('');
			splitStr[index] = splitWord;
		}
	});
	return splitStr.join(' ');
}

reverseWords('The quick brown fox jumps over the lazy dog.');
reverseWords('apple');
reverseWords('a b c d');
reverseWords('double  spaced  words');

// Day: 3/20/22 10:43pm

// Today's Progress: Feel like I need to work through one

// Thoughts:

// Link(s) to work: https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript

// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName('http://github.com/carbonfive/raygun') == 'github';
// domainName('http://www.zombie-bites.com') == 'zombie-bites';
// domainName('https://www.cnet.com') == 'cnet';

function domainName(url) {
	//your code here
	let fullUrl = new URL(url);
	console.log(fullUrl);
	let hostName = fullUrl.hostname;
	hostName = hostName.substring(0, hostName.indexOf('.'));
	console.log(hostName);
}

// domainName('http://google.com');
// domainName('http://google.co.jp');
// domainName('www.xakep.ru');
// domainName('https://youtube.com');

function smallestPositiveInteger(A) {
	const sortedArr = A.sort();
	for (let i = 0; i < sortedArr.length; i++) {
		if (!sortedArr.includes(i) && i > 0) {
			return i;
		}
	}
	return sortedArr[sortedArr.length - 1] + 1;
}

// console.log(smallestPositiveInteger([1, 3, 6, 4, 1, 2]))
// console.log(smallestPositiveInteger([1, 2, 3]))
// console.log(smallestPositiveInteger([-1, -3]))

// A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

// [2, 10, 9, 3] is a nice array because

//  2 =  3 - 1
// 10 =  9 + 1
//  3 =  2 + 1
//  9 = 10 - 1

// [4, 2, 3] is a nice array because

// 4 = 3 + 1
// 2 = 3 - 1
// 3 = 2 + 1 (or 3 = 4 - 1)

// [4, 2, 1] is a not a nice array because

// for n = 4, there is neither n - 1 = 3 nor n + 1 = 5

function isNice(arr) {
	if (!arr.length) {
		return false;
	} else {
		return arr.every((num) => {
			return arr.includes(num + 1) || arr.includes(num - 1);
		});
	}
}

// console.log(isNice([2, 10, 9, 3]))
// console.log(isNice([3, 4, 5, 7]))
// console.log(isNice([4, 2, 3]))
// console.log(isNice([4, 2, 1]))
// console.log(isNice([]))

// function solution(S, K) {
// 	const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
// 	let dayIndex = days.indexOf(S)
// 	return days[(K + dayIndex) % 7];
// }

// console.log(solution('Wed', 2))
// console.log(solution('Sat', 23));

// function solution(A) {
// 	if (A.length <= 2) return A.length;
// 	let maxLength = 0;
// 	for (i = 0; i < A.length - 1; i++) {
// 		let curLength = 0;
// 		let num1 = A[i];
// 		let num2 = A[i + 1];

// 		A.forEach(num => {
// 			if (num === num1 || num === num2) {
// 				curLength++
// 				if (curLength > maxLength) {
// 					maxLength = curLength
// 				}
// 			} else {
// 				curLength = 0
// 			}
// 		})
// 	}
// 	return maxLength;
// }

// console.log(solution([4, 2, 2, 4, 2]));
// console.log(solution([1, 2, 3, 2]));
// console.log(solution([0, 5, 4, 4, 5, 12]));
// console.log(solution([4, 4]));

// Day:3/30/22

// Today's Progress: Well today I made it through to the technical round at Revelry!!

// Thoughts:

// Link(s) to work: https://www.codewars.com/kata/523a86aa4230ebb5420001e1/train/javascript

// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & ('baab' == true);

// 'abba' & ('bbaa' == true);

// 'abba' & ('abbba' == false);

// 'abba' & ('abca' == false);

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

function anagrams(word, words) {
	// seperate word into array of individual letters
	const wordToLetters = word.split('').sort().join('');
	// console.log(wordToLetters)
	// iterate through each word in words array
	// let anagrams = []
	let anagrams = words.filter((word, index) => {
		return word.split('').sort().join('') === wordToLetters;
		// break each word down into letters and compare to first 'word>letters' array to broken down word.
		// const wordToCompare = word.split('').sort().join('')
		// console.log(wordToCompare)
		// // if letters match, push into array to hold anagrams
		// if (wordToCompare === wordToLetters) {
		// 	anagrams.push(words[index])
		// }
	});
	// console.log(words)
	// return anagram array
	return anagrams;
}

// console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
// console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']));
// console.log(anagrams('laser', ['lazing', 'lazy', 'lacer']));

// Day: 4/5/22

// Today's Progress:

// Thoughts:

// Link(s) to work: https://www.codewars.com/kata/520b9d2ad5c005041100000f/train/javascript

// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
	let words = str.split(' ');
	// console.log(words)
	let pigLatin = words.map((word) => {
		let splitWord = word.split('');
		// let firstLetter = splitWord.shift()
		// console.log(firstLetter)
		// let pig = splitWord.splice(splitWord.length, 0, firstLetter);
		if (/[a-zA-Z]/.test(splitWord)) {
			splitWord.splice(splitWord.length, 0, `${splitWord.shift()}ay`);
		}
		return splitWord.join('');
		// console.log(splitWord.splice(splitWord.shift(), 0, word.length));
	});
	return pigLatin.join(' ');
}

// console.log(pigIt('Pig latin is cool'))
// console.log(pigIt('This is my string !'))

// Day: 4/13/22

// Today's Progress:

// Thoughts:

// Link(s) to work: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
	return parseInt(
		n
			.toString()
			.split('')
			.sort((a, b) => b - a)
			.join('')
	);
}

// console.log(descendingOrder(0))
// console.log(descendingOrder(1))
// console.log(descendingOrder(111))
// console.log(descendingOrder(15))
// console.log(descendingOrder(1021))
// console.log(descendingOrder(123456789))

// Day:4/18/22

// Today's Progress:

// Thoughts:

// Link(s) to work: https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
	if (A.length === 1) return A[0];
	let count;
	let oddNumber;
	A.forEach((num, i, arr) => {
		count = arr.filter((numbers) => num === numbers);
		console.log(count);
		if (!count.length % 2 === 0) oddNumber = num;
	});
	return oddNumber;
}

// console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));
// console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
// console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
// console.log(findOdd([10]));
// console.log(findOdd([1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]));
// console.log(findOdd([5, 4, 3, 2, 1, 5, 4, 3, 2, 10, 10]));

// Link : https://www.codewars.com/kata/57eb8fcdf670e99d9b000272/train/javascript

// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
	// Initialize highestScore variable, maybe make obj to hold index of word
	let highestScore = { score: 0, index: 0 };
	// Seperate the string into array of words, split(), wordsArr
	let wordsArr = x.split(' ');
	// Loop through array wordsArr
	wordsArr.forEach((word, index) => {
		// Initialize curScore variable
		let curScore = 0;
		// In each loop, loop again through string
		[...word].forEach((letter, i) => {
			// 	// Evaluate each letter and increment curScore
			// console.log(word.charCodeAt(i));
			curScore += word.charCodeAt(i) - 96;
		});
		// Compare curScore & highestScore, assign greatest to highestScore
		// console.log(word, curScore)
		if (curScore > highestScore.score) {
			highestScore = { score: curScore, index: index };
		}
	});
	// Return highestScore index value
	return wordsArr[highestScore.index];
}

// console.log(high('man i need a taxi up to ubud'));
// console.log(high('what time are we climbing up the volcano'))
// console.log(high('take me to semynak'));
// console.log(high('aa b'));
// console.log(high('b aa'));

// Day: 6/7/22

// Today's Progress:

// Thoughts:

// Link(s) to work: https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Note: For 4 or more names, the number in "and 2 others" simply increases.

function likes(names) {
	let str;
	if (names.length <= 1) {
		str = `${!names.length ? 'no one' : names.toString()} likes this`;
	} else if (names.length <= 2) {
		str = `${names.join(' and ')} like this`;
	} else {
		let num = names.length - 2;
		str = `${names.slice(0, -num).join(', ')} and ${
			names.length > 3 ? num + ' others' : names.slice(-1)
		} like this`;
	}
	return str;
}

// console.log(likes([]))
// console.log(likes(['Peter']))
// console.log(likes(['Jacob', 'Alex']))
// console.log(likes(['Max', 'John', 'Mark']))
// console.log(likes(['Max', 'John', 'Mark', 'Keisha']))
// console.log(likes(['Max', 'John', 'Mark', 'Keisha', 'Ray']))
// console.log(likes(['Max', 'John', 'Mark', 'Keisha', 'Ray', 'Roscoe']))

// Day: 10/28/22

// Today's Progress:

// Thoughts:

// Link(s) to work: https://www.codewars.com/kata/5546180ca783b6d2d5000062/train/javascript

// Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.

// 2, 5  -->  [2, 4, 16, 256, 65536]
// 3, 3  -->  [3, 9, 81]

function squares(x, n) {
	if (n <= 0) return [];
	let arr = [];
	let i = 0;

	do {
		arr.push(x);
		x = x * x;
		i++;
	} while (i < n);
	return arr;
}

// console.log(squares(2, 5));
// console.log(squares(3, 3));
// console.log(squares(5, 3));
// console.log(squares(10, 4));
// console.log(squares(2, 0));
// console.log(squares(2, -5));
