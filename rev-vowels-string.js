// Reverse Vowels in a String
/*
In this kata, your goal is to write a function which will reverse the vowels in a string. Any characters which are not vowels should remain in their original position. Here are some examples:

"Hello!" => "Holle!"
"Tomatoes" => "Temotaos"
"Reverse Vowels In A String" => "RivArsI Vewols en e Streng"

For simplicity, you can treat the letter y as a consonant, not a vowel. Good luck!
*/

function reverseVowels(str) {
  let map = new Map();
  let arr = [];
  let result = '';

  map.set('a', true);
  map.set('e', true);
  map.set('i', true);
  map.set('o', true);
  map.set('u', true);

  for (let char of str) {
    if (map.has(char.toLowerCase())) {
      arr.push(char);
    }
  }

  arr = arr.reverse();

  for (let char of str) {
    let isVowel = map.has(char.toLowerCase());

    if (isVowel) {
      result += arr.shift();
    } else {
      result += char;
    }
  }
  return result;
}