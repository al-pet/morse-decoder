const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
 
  let result = "";
  let key = "";
  for (let i = 0; i < expr.length; i = i + 10) {
    const decade = expr.slice(i, i + 10).replace(/^0+/, "");
    if (decade[0] === "*") {
      result = result + " ";
    } else {
        let key = "";  
        for (let i = 0; i < decade.length; i = i + 2) {
          key += decade.slice(i, i + 2) === "10" ? "." : "-";
        }
      result = result + MORSE_TABLE[key];
    }
  }

  return result;
}

module.exports = {
    decode
}