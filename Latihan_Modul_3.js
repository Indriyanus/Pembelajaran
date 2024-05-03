/* 
1. Write a code to display the multiplication table of a given integer.
Example : Number → 9
○ Output :
■ 9 x 1
■ 9 x 2
■ …
■ 9 x 10
*/
let number = 9
for (let a = 1; a <= 10; a++) {
    console.log ( number, " x ", a ) ;
}

/* 
2. Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome
*/
let word = "katak"
let newWord = ""
/*
- Balik dahulu si word
- dibandingkan kata word yang dibalik dengan word
*/
for (let b = word.length-1; b >= 0; b--) {
    newWord += word[b]
}
if(word=== newWord) {
    console.log("palindrome")
} else {
    console.log("bukan palidrome")
}

/*
3. Write a code to convert centimeter to kilometer.
○ Example : 100000 → “1 km”
*/
let cm = 100000
let km = Math.floor(cm / 1000) + " KM "

console.log(km)

/*
4. Write a code to format number as currency (IDR)
○ Example : 1000 → “Rp. 1.000,00”
*/
let num = 1000
let format = ""
let result = ''
let counterDigit = 1
let numString = String(num)

for ( let d = numString.length-1; d >= 0; d--) {
    if ( counterDigit === 3) {
        console.log( "counterDigit 3 "," digit -> ", numString [d], ' ke ',d )
        format += numString [d] + '.'
        counterDigit = 1
    } else {
        console.log( " digit -> ", numString [d], ' ke ', d)
        format += numString [d]
        counterDigit += 1
    }
}
for ( let d = format.length-1; d >= 0; d--) {
    result += format[d]
}
console.log("RP.",result,",00")

/*
5. Write a code to remove the first occurrence of a given “search string” from a string
○ Example : string = “Hello world”, search string = “ell” → “Ho world”
*/
let kata = "Hello world"
let target = "ell"

kata = kata.replace(target, "")
console.log(kata)

/*
6. Write a code to capitalize the first letter of each word in a string
○ Example : “hello world” → “Hello World”
*/
word = "hello world"
let result2 = ""
let space = false

for (let e = 0; e < word.length; e++){
    if(e === 0){
        result2 += word[e].toUpperCase()
    }
    else if(word[e] === " "){
        space = true
        result2 += " "
    }
    else {
        if (space){
            result2 += word[e].toUpperCase()
            space = false
        } else {
            result2 += word [e]
        }
    }
}
console.log(result2)

/*
7. Write a code to reverse a string.
○ Example : “hello” → “olleh”
*/
let word2 = "hello"
let newWord2 = ""

for (let f = word2.length-1; f >= 0; f--) {
    newWord2 += word2[f]
}
console.log(newWord2)

/*
8. Write a code to swap the case of each character from string
○ Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
*/
let word3 = "The QuiCk BrOwN fOX"
const wordplus = 'The QuiCk BrOwN Fox';
let newWord3 = '';

for (let g = 0; g < wordplus.length; g++) {
    const letter = wordplus[g];
    if (letter === letter.toUpperCase()) {
        newWord3 += letter.toLowerCase();
    } else {
        newWord3 += letter.toUpperCase();
    }
}
console.log(newWord3);

/*
9. Write a code to find the largest of two given integers
○ Example : num1 = 42, num2 = 27 → 42
*/
let num3 = 42
let num4 = 27

if(num3 > num4) {
    console.log(num3)
} else if(num3 < num4) {
    console.log(num4)
} else if(num3 === num4) {
    console.log("both numbers are the same")
}

/*
10. Write a conditional statement to sort three numbers
○ Example : num1 = 42, num2 = 27, num3 = 18 → 18, 27, 42
*/
let num5 = 42, num6 = 27, num7 = 18
newNum = [num5, num6, num7]

Line = newNum.sort();

console.log(Line)

/*
11. Write a code that shows 1 if the input is a string, 2 if the input is a number, and 3 for others data
type.
○ Example : “hello” → 1
*/
let word4 = 1
if(word4 = String) {
    console.log(1)
} else if(word4 = Number) {
    console.log(" ")
} else {
    console.log("other data types")
}

/*
12. Write a code to change every letter a into * from a string of input
○ Example : ‘An apple a day keeps the doctor away’ -> `*n *pple * d*y keeps the doctor *w*y`
*/
const word5 = 'An apple a day keeps the doctor away';
let newWord5 = '';

for (let i = 0; i < word5.length; i++) {
    if (word5[i] === 'a') {
        newWord5 += '*';
    } else {
        newWord5 += word5[i];
    }
}
console.log(newWord5);

// ===================================================================== //