// # String Exercises
let str1 = "Hello World";
// 1. `console.log` the first character of a string.
console.log(`1) ${str1[0]}`);
// 2. `console.log` the length of a string.
console.log(`2) ${str1.length}`)
// 3. `console.log` the last character of any string. 
console.log(`3) ${str1[str1.length - 1]}`);
// 4. Create a code block that takes a single string variable, and returns a copy of the string with the last letter capitalized. For example:
// ```js
// 'jimmy'
// // => 'jimmY'
// ```
let lastLtrCap = str1.slice(0, str1.length - 1) + (str1.toUpperCase().slice(str1.length - 1));
console.log(`4) ${lastLtrCap}`)
// 5. Create a drEvil code block that will take a single number variable, and log the '<variableAmount> dollars',
// your code block should add '(pinky)' at the end of the amount if it's 1 million. For example:
// ```js
// let amount = 10
// // => 10 dollars
// let amount = 1000000
// // =>  1000000 dollars (pinky)
// ```
let amount = 1000000;
let drEvil = amount + ' dollars';
if (amount == 1000000) {
    drEvil += ' (pinky)';
}
console.log(`5) ${drEvil}`);
// 6. Create a `verbing` code block. It should take a single string variable. If its length is at least 3, 
// it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. 
// If the string length is less than 3, it should leave it unchanged. 
// For example:
// ```js
// verbing('box')
// // => 'boxing'
// verbing('train')
// // => 'training'
// verbing('swimming')
// // =>  'swimmingly'
// verbing('go')
// // =>  'go'
// ```
let verbing = 'according';
if (verbing.length >= 3 && verbing.slice((verbing.length - 3)) === 'ing') {
    verbing += 'ly';
} else if (verbing.length >= 3) {
    verbing += 'ing';
}
console.log(`6) ${verbing}`);
// 7. Create a `withoutLast` code block that takes a single string variable, and returns a copy of the string without the last word.
let origStr = 'JavaScript is the best programming language on Earth';
let arr = origStr.split(' ');
let withoutLast = '';
arr.pop();
withoutLast = arr.join(' ');
console.log(`7) ${withoutLast}`);
// ## Bonus Questions

// 1. Write a code block that adds a "#" to a string if the string has an odd number of characters, otherwise leave it as is.
// print/log the result
let hashCheck = 'ownYourPursuit';
let tweet = '';
if(hashCheck.length % 2 === 1 || hashCheck === 'ownYourPursuit') {
    tweet += '#' + hashCheck;
} else {
    tweet += hashCheck;
}
console.log(`Bonus 1) ${tweet}`);
//     Examples:

//   ```js
//   let name = 'taq'  // should log 'taq#'
//   let name2 ='john' // should log 'john'
//   ```
// ___

// 2. Write a code block that prints/logs the 3rd to last characters of a string.
// If the string is not at least 3 characters long then log an error message.
// <details>
//     <summary>
//         Hint
//     </summary>
//     It should work for strings of any length. 
// </details>

// Examples, for variables: 
// ```js
// let name1 = 'Taq' // Should log 'Taq'
// let sentence = 'He is Taq'// Should log 'Taq'
// ```
// ___
let charLogTest = 'The best time to start something is always now';
let thrCharLog = '';
if (charLogTest.length >= 3) {
    thrCharLog += charLogTest.slice(charLogTest.length - 3);
    thrCharLog = thrCharLog.toUpperCase();
} else if (charLogTest.length < 3) {
    thrCharLog = 'Error!'
}
console.log(`Bonus 2) ${thrCharLog}`);
// 3. Write a code block that prints/logs whether a string `x` starts with a vowel.
// <details>
//   <summary>
//     Extra
//   </summary>

//   Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity)

// </details>
// ___
let x = 'I am a vowel';
let vowel = 'aeiouAEIOU';
if (vowel.includes(x.trim()[0])) {
    console.log('Bonus 3) ' + '👍')
} else {
    console.log('Bonus 3) ' + '👎');
}
// 4. Write a code block that given two strings, `str1` and `str2`, prints/logs a new string with `str2` mashed into the middle of `str1`

// Examples:

//   - For `str1` = 'help' and `str2` = 'me'. Your program should log `'hemelp'`

//    - For `str1` = 'hello' and `str2` = 'world'. Your program should log `'helworldlo'`

// ___
let string1 = "What doesn't kill makes you stronger";
let string2 = "you";
let output = '';
if (string1.split(' ').join('').length % 2 !== 0) {
    output = string1.slice(0,(string1.length)/2);
    output += string2;
    output += ' ' + string1.slice(string1.length/2,);
    console.log(`Bonus 4) ${output}`);
}
// 5. Write a code block that prints/logs whether a string `x` has at least one vowel in it.

// Examples:
//   - For `x` = 'taq'. Your program should log `'taq' has a vowel'`
//   - For `x` = 'dfghjkl'. Your program should log `'dfghjkl' does not have a vowel'`
//   - For `x` = '' Your program should log `'' does not have a vowel'`

// <details>
//   <summary>
//     Extra & Hint:
//   </summary>
  
//   - **Hint**: Abstain from using loops. Explore string methods.

//   - **Extra**: Make it [case insensitive](https://en.wikipedia.org/wiki/Case_sensitivity). So that for `x` = 'TAQ' it should log 
//   `'TAQ' has a vowel`
// </details>

// ___
let vowelCheck = 'Pursuit';
hold = vowelCheck.toLowerCase();
switch (hold.search("a") >= 0 || 
    hold.search("e") >= 0 ||
    hold.search("i") >= 0 ||
    hold.search("o") >= 0 ||
    hold.search("u") >= 0) {
    case true:
        console.log(`Bonus 5) ${vowelCheck} has a vowel`);
        break;
    default:
        console.log(`Bonus 5) ${vowelCheck} has no vowels`);
}
// ### Practice Makes Perfect.
// Find at [CodingBat](https://codingbat.com/java/String-1) more problems/questions to keep practicing. You can pick which ones to do. You can ignore the fact that their solutions are supposed to be written in Java, I trust you that you can write a solution code block in JavaScript. Create a file `codingBatStrings.js` copy and paste the problem statement as a comment, underneath write your solution.

// > **Remember**: This are bonuses and extra points. You don't have to do them but if you do, you will just get better.

