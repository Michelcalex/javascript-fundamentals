console.log('#1 The Tallest Mountain');

let height = [8611, 8568, 8516, 8848, 8485];
let tallest = 0;

for (let i = 0; i < height.length; i++) {
    // console.log(i);

// if height of current item is bigger than height of tallest seen
    if (tallest < height[i]) {
        tallest = height[i];
    }
}
console.log(tallest);





console.log ('#2: Hangman Lite');

// STEPS
// 1)Pick a word.
// 2)Pick a letter. 
// 3)Check to see if the letter exist in the word. 
//     a) if the letter exist in the word, print out " Yeah, the letter x exists y times in my word"
//     b) if the letter doesn't exist, print out "Nope, that letter doesn't exist in my word."

let hangmanWord = "poopy";
let letter = "p";

// 0,1,2,3,4
// P,O,O,P,Y

// for (i=0; i < hangmanWord.length; i++) {
//     if (letter === hangmanWord[i]) {
//         console.log(letter);
//     } else {
//         console.log("nope");
//     }
// }

// ^^^This will run a total of 5 times. 1)P 2)nope 3)nope 4)p 5)nope

let count=0;

for (i=0; i < hangmanWord.length; i++) {
    if (letter === hangmanWord[i]) {
        count++;
    }
}

if (count !== 0) {
    console.log ("Yeah, the letter " + letter + " exists " + count + " times in my word");
} else {
    console.log ("Nope, " + letter + " doesn't exist in my word.")
};






console.log ('#3: Cherokee Hare');

// STEPS
// 1)Create a variable called startingpopulation that keeps track of initial population.
// 2)Create a variable called birthrate that keeps track of what percentage is born each week. 
// 3)create a variable called numberofweeks that represent how long we're trying to stimulate
// 4)Print out "There will be X cherokeee hares after Y years"
// 5)Replace X with the number of hares and Y with the number of weeks. 

let startingPopulation = 200;
let birthRate = 0.1;
let numberOfWeeks = 5;


//There is x amount of hares after 5 weeks

// Week 1,2,3,4,5
//      0,1,2,3,4

// Week 1 = 200 * 0.1 = 20 + 200 = 220
// Week 2 = 220 * 0.1 = 22+ 220 = 242
// week 3 = 242 * 0.1 = 24.2 + 242 = 266.2
// week 4 = 266.2 * 0.1 = 26.62 + 266.2 = 292.82
// week 5 = 292.82 * 0.1 = 29.28 + 292.82 = 322.10

for (i=0; i < numberofWeeks; i++) {



}

// ^^^^take startingPopulation * birthrate and set it to growth
//     then take growth and add it to startingPopulation++








console.log ('#5: Palindromes');

// STEPS
// 1)Start from the beginning and look at each letter.
// 2)Compare the first letter to the last letter.
// 3)Compare the second to the second to last.
// 4)etc (loop?)
// 5)If any of the don't match, not a palidrome.


// let word="poop";
// word[0] = p
// word.length = 4


// compare letter 0 vs letter 3
// if (word[0] === word[word.length -1]) {
    // palindrone
// } 


let word = 'amma';
let end = word.length -1;
let palindrome = true;
// let palindrome = true; whether the word is a palindrome


for(let index = 0; index < word.length; index++) {
    if (word[index] !== word[end-index]) {
        palindrome = false;
    } 
}

console.log(palindrome);






