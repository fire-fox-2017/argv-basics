/*'use strict'

let pigLatin = (word) => {
  let firstLetter = word.charAt(0);
  if(isPowel(firstLetter)){
    return word
  }else{
    return `${word.substr(1)}${firstLetter}ay`;
  }
}

let isPowel = (char) => {
  return (/^[aeiou]$/i).test(char);
}

let convert = (sentence) => {
  let result = []
  let words = sentence.trim().split(/\s+/g)
  for (let i=0;i<words.length;i++) {
    result[i] = pigLatin(words[i])
  }

  return result.join(" ")
}*/

// converting pig latin word
function pigLatin(word) {
  var hurufhidup = /[aiueo]/gi;
  {
    if (hurufhidup === null) {
      return word + "ay";
    }
  }
    if (word.charAt(0) === "a" || word.charAt(0) === "i" || word.charAt(0) === "u" || word.charAt(0) === "e" || word.charAt(0) === "O"
    || word.charAt(0) === "A" || word.charAt(0) === "I" || word.charAt(0) === "U" || word.charAt(0) === "E" || word.charAt(0) === "O"){
      return word;
  }
    else {
      var hurufmati= word.indexOf(word.match(hurufhidup)[0]);
      var pig =  word.substr(hurufmati) + word.substr(0,hurufmati) + "ay";
    }

    return pig;
}

// converting pig latin sentence
function pigLatin2(sentence) {
  var result = [];
  var split = sentence.split(' ');
  for(var i = 0; i < split.length; i++) {
      result.push(pigLatin(split[i]));
    }
  return result.join(' ');
}




// Your CLI code here
var pigread = process.argv
var convert = ""
    for (let x = 2; x < pigread.length; x++){
      convert += pigLatin(pigread[x]) + " "}
console.log(convert)
