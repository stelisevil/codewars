/* 7kyu
  You are going to be given a word. Your job is to return the middle character
  of the word. If the word's length is odd, return the middle character.
  If the word's length is even, return the middle 2 characters.

  #Examples:
  Kata.getMiddle("test") should return "es"
  Kata.getMiddle("testing") should return "t"
  Kata.getMiddle("middle") should return "dd"
  Kata.getMiddle("A") should return "A"
  #Input
  A word (string) of length 0 < str < 1000 (In javascript you may get slightly
  more than 1000 in some test cases due to an error in the test cases).
  You do not need to test for this. This is only here to tell you that
  you do not need to worry about your solution timing out.

  #Output
  The middle character(s) of the word represented as a string.
*/
function getMiddle(s)
{
  let charactersToRemove = Math.floor((s.length-1)/2)
  return s.slice(charactersToRemove, s.length-charactersToRemove)
}

/* 6kyu
  Write a function that takes an (unsigned) integer as input,
  and returns the number of bits that are equal to one in
  the binary representation of that number.

  Example: The binary representation of 1234 is 10011010010,
  so the function should return 5 in this case
*/
var countBits = function(n) {
  let bin = n.toString(2);
  let result = 0;
  for (let i = 0; i < bin.length; i++) {
    if (bin[i] === '1') {
      result++;
    }
  }
  return result;
};

/* 6kyu
  You are given an array (which will have a length of at least 3,
  but could be very large) containing integers. The array is either
  entirely comprised of odd integers or entirely comprised of even integers
  except for a single integer N. Write a method that takes the array
  as an argument and returns this "outlier" N.

  Examples
  [2, 4, 0, 100, 4, 11, 2602, 36]
  Should return: 11 (the only odd number)

  [160, 3, 1719, 19, 11, 13, -21]
  Should return: 160 (the only even number)
*/
function findOutlier(integers){
  const even = [];
  const odd = [];
  integers.forEach(i => {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  })
  if (even.length === 1) {
    return even[0];
  } else {
    return odd[0];
  }
}

/* 6kyu
  Write a function that accepts an array of 10 integers (between 0 and 9),
  that returns a string of those numbers in the form of a phone number.

  Example:
  createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
  The returned format must be correct in order to complete this challenge.
  Don't forget the space after the closing parentheses!
*/

function createPhoneNumber(numbers){
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
}

/* 7kyu
  Given two integers a and b, which can be positive or negative,
  find the sum of all the numbers between including them too and return it.
  If the two numbers are equal return a or b.

  Note: a and b are not ordered!

  Examples
  GetSum(1, 0) == 1   // 1 + 0 = 1
  GetSum(1, 2) == 3   // 1 + 2 = 3
  GetSum(0, 1) == 1   // 0 + 1 = 1
  GetSum(1, 1) == 1   // 1 Since both are same
  GetSum(-1, 0) == -1 // -1 + 0 = -1
  GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/

function GetSum(a,b) {
  return (a+b)*(Math.abs(a-b)+1)*0.5;
}

/* 6kyu
  Write a function that takes in a string of one or more words,
  and returns the same string, but with all five or more letter
  words reversed (Just like the name of this Kata). Strings passed
  in will consist of only letters and spaces. Spaces will be included
  only when more than one word is present.

  Examples:

  spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw"
  spinWords( "This is a test") => returns "This is a test"
  spinWords( "This is another test" )=> returns "This is rehtona test"
*/

function spinWords(str) {
  let words = str.split(' ');
  let newStr = words.map((word, i) => {
    if (word.length > 4) {
      return word.split('').reverse().join('');
    } else {
      return word
    }
  })
  return newStr.join(' ');
}

/*
  Create a function taking a positive integer as its parameter and returning a
  string containing the Roman Numeral representation of that integer.

  Modern Roman numerals are written by expressing each digit separately
  starting with the left most digit and skipping any digit with a value of zero.
  In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
  2008 is written as 2000=MM, 8=VIII; or MMVIII.
  1666 uses each Roman symbol in descending order: MDCLXVI.

  Example:
  solution(1000); // should return 'M'

  Help:
  Symbol    Value
  I          1
  V          5
  X          10
  L          50
  C          100
  D          500
  M          1,000
  Remember that there can't be more than 3 identical symbols in a row.
*/

function solution(number){
  roman = [];
  for (number; number >= 1000; number = number - 1000) {
    roman.push('M');
  }
  for (number; number >= 900; number = number - 900) {
    roman.push('CM');
  }
  for (number; number >= 500; number = number - 500) {
    roman.push('D');
  }
  for (number; number >= 400; number = number - 400) {
    roman.push('CD');
  }
  for (number; number >= 100; number = number - 100) {
    roman.push('C');
  }
  for (number; number >= 90; number = number - 90) {
    roman.push('XC');
  }
  for (number; number >= 50; number = number - 50) {
    roman.push('L');
  }
  for (number; number >= 40; number = number - 40) {
    roman.push('XL');
  }
  for (number; number >= 10; number = number - 10) {
    roman.push('X');
  }
  for (number; number >= 9; number = number - 9) {
    roman.push('IX');
  }
  for (number; number >= 5; number = number - 5) {
    roman.push('V');
  }
  for (number; number >= 4; number = number - 4) {
    roman.push('IV');
  }
  for (number; number >= 1; number = number - 1) {
    roman.push('I');
  }
  return roman.join('');
}

/* 6kyu
  Given a string of words, you need to find the highest scoring word.
  Each letter of a word scores points according to it's
  position in the alphabet: a = 1, b = 2, c = 3 etc.
  You need to return the highest scoring word as a string.
  If two words score the same, return the word that appears
  earliest in the original string.
  All letters will be lowercase and all inputs will be valid.
*/

function high(str) {
  if (str === '') {
    return '';
  } else {
    let words = str.split(' ');
    let points = words.map((word, i) => {
      let lettersValueArray = word.split('').map((letter, j) => {
        return score(letter);
      })
      let wordScore = lettersValueArray.reduce((acc, current) => {
        return acc + current;
      })
      return wordScore
    })
    console.log(points)
    let maxPoints = points.reduce((a,b) => {
      return Math.max(a, b);
    });
    console.log(maxPoints)
    let maxPointsIndex = points.findIndex(lettersValue => maxPoints === lettersValue)
    return words[maxPointsIndex];
  }
}

function score(letter) {
  switch(letter) {
    case 'a':
      return 1;
    case 'b':
      return 2;
    case 'c':
      return 3;
    case 'd':
      return 4;
    case 'e':
      return 5;
    case 'f':
      return 6;
    case 'g':
      return 7;
    case 'h':
      return 8;
    case 'i':
      return 9;
    case 'j':
      return 10;
    case 'k':
      return 11;
    case 'l':
      return 12;
    case 'm':
      return 13;
    case 'n':
      return 14;
    case 'o':
      return 15;
    case 'p':
      return 16;
    case 'q':
      return 17;
    case 'r':
      return 18;
    case 's':
      return 19;
    case 't':
      return 20;
    case 'u':
      return 21;
    case 'v':
      return 22;
    case 'w':
      return 23;
    case 'x':
      return 24;
    case 'y':
      return 25;
    case 'z':
      return 26;
  }
}

/* 5kyu
  Given a positive number n > 1 find the prime factor decomposition of n.
  The result will be a string with the following form :

   "(p1**n1)(p2**n2)...(pk**nk)"
  with the p(i) in increasing order and n(i) empty if n(i) is 1.

  Example: n = 86240 should return "(2**5)(5)(7**2)(11)"
*/

function primeFactors(number){
  let primeArray = [];
  let singleValueArray = [];
  let allPrimes = findLowestPrimeFactor(number, primeArray)
  allPrimes.forEach(prime => {
    if (!singleValueArray.includes(prime)) {
      singleValueArray.push(prime)
    }
  })
  let primeString = [];
  singleValueArray.forEach(prime => {
    primeString.push(`(${prime}`)
    let primeCount = 0
    primeArray.forEach(factor => {
      if (factor === prime) {
        primeCount++
      }
    })
    if (primeCount === 1) {
      primeString.push(`)`);
    } else {
      primeString.push(`**${primeCount})`)
    }
  })
  return primeString.join('');
}

function findLowestPrimeFactor(n, primeArray) {
  if (n === 1) {
    return primeArray;
  }
  for (let i = 2; i <= n; i++) {
    if (n % i === 0) {
      primeArray.push(i);
      n = n / i;
      return findLowestPrimeFactor(n, primeArray);
    }
  }
}

/* 5kyu
  The marketing team is spending way too much time typing in hashtags.
  Let's help them with out own Hashtag Generator!

  Here's the deal:

  It must start with a hashtag (#).
  All words must have their first letter capitalized.
  If the final result is longer than 140 chars it must return false.
  If the input or the result is an empty string it must return false.
  Examples
  " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
  "    Hello     World   "                  =>  "#HelloWorld"
  ""                                        =>  false
*/

function generateHashtag(str) {
  if (str.trim() === '') {
    return false
  }
  let wordsArray = str.split(' ');
  let capitalisedWords = wordsArray.map((word, i) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });
  let joinedWords = capitalisedWords.join('');
  if (joinedWords.length > 139) {
    return false
  }
  return `#${joinedWords}`;
}

/* 5kyu
  Write a function named firstNonRepeatingLetter† that takes a string input,
  and returns the first character that is not repeated anywhere in the string.

  For example, if given the input 'stress', the function should return 't',
  since the letter t only occurs once in the string, and occurs first in the
  string.

  As an added challenge, upper- and lowercase letters are considered the same
  character, but the function should return the correct case for the initial
  letter. For example, the input 'sTreSS' should return 'T'.

  If a string contains all repeating characters, it should return the empty
  string ("").

  † Note: the function is called firstNonRepeatingLetter for historical reasons,
   but your function should handle any Unicode character.
*/

function firstNonRepeatingLetter(str) {
  let lettersArray = str.toLowerCase().split('');
  let nonRepeats = [];
  lettersArray.forEach((letter, i) => {
    let letterCount = 0
    lettersArray.forEach(lett => {
      if (lett === letter) {
        letterCount++
      };
    })
    if (letterCount === 1) {
      nonRepeats.push(i)
    }
  });
  console.log(nonRepeats)
  let char = nonRepeats[0]
  return nonRepeats.length > 0 ? str[char] : "";
}

/* 5kyu ## STILL WORKING ON THIS!! ##
  Write a program that will calculate the number of trailing zeros in a factorial
  of a given number.

  N! = 1 * 2 * 3 * ... * N

  Be careful 1000! has 2568 digits...

  For more info, see: http://mathworld.wolfram.com/Factorial.html

  Examples
  zeros(6) = 1
  # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

  zeros(12) = 2
  # 12! = 479001600 --> 2 trailing zeros
  Hint: You're not meant to calculate the factorial. Find another way to
  find the number of zeros.
*/

function zeros (n) {
  return Math.floor(n/5);
}
