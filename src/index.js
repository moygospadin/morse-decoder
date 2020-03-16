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

const cutStrToArr = (word, number) => {
    const result = [];
    for (let i = 0; i < word.length; i += 1) {
        if (i % number === 0) {
            result.push(word.substr(i, number));
        }
    }
    return result;
}

function decode(expr) {
   
    let str = '';
    let decodeStr = '';
    
    for (let i=0; i < expr.length; i+=10) {
        let subExp = expr.slice(i, i+10);

        if (subExp === '**********') decodeStr += ' ';
        else {
            for (let j=0; j<subExp.length; j+=2) {
                if (subExp[j] + '' + subExp[j+1] === '10') str+='.';
                else if (subExp[j] + '' + subExp[j+1] === '11') str+='-';
            }

            decodeStr += MORSE_TABLE[str];
            str = '';
        }
    }
  
    return decodeStr;
  }

module.exports = {
    decode
}
