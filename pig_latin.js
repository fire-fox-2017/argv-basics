'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isVowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isVowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}

// Your CLI code here
const argv = process.argv;

let inputArr = [];
for (let i = 2; i < argv.length; i++) {
  inputArr.push(argv[i]);
}
let input = inputArr.join(" ");

console.log(convert(input));
