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

/*
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
