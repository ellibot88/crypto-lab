const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const cipher = (str) => {
  let coded = "";
  for (let i = 0; i < str.length; i++) {
    let num = i % 10;
    let code = alphabet.findIndex((element) => element === str[i]) + num;
    //console.log(alphabet[letter])
    //console.log(num);
    let letter = alphabet[code];
    coded += letter;
    //console.log(coded);
  }
  return coded;
};

console.log(cipher("elliott"));

const decipher = (str) => {
  let coded = "";
  for (let i = 0; i < str.length; i++) {
    let num = i % 10;
    let code = alphabet.findIndex((element) => element === str[i]) - num;
    //console.log(alphabet[letter])
    //console.log(num);
    let letter = alphabet[code];
    coded += letter;
    //console.log(coded);
  }
  return coded;
};

console.log(decipher("emnlsyz"));
