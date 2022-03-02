// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

function duplicateCount(text) {
	// iterate over string
    //  
}


// Day 1: 03/01/22 11:44pm

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
    if (!words.length) return ''

    // seperate string into individual words in array
    let seperateWords = words.split(' ')
    let arr = []

    // Check each word for number
    seperateWords.forEach((word) => {
        let match = word.match(/\d+/g);
        arr[match.toString() - 1] = word;  
    })
    
    return arr.join(' ')
}

// console.log(order('is2 Thi1s T4est 3a'));
// console.log(order(''));
// console.log(order('4of Fo1r pe6ople g3ood th5e the2'));