const number = 125;
const float = 125.5;
const str = "Hello";
const bool =  3 > 2;
const undef  = undefined;
const nullVar = null;

const square = (n) => {
    return n*n;
    // your code here
}

const hello = (name) => {
    console.log(`Hello, ${name}!`);  
}

const concat = (strings) => {
    // your code here
    return `${strings[0]}${strings[1]}`;
}

const getType = (value) => {
    return (typeof value);
    // your code here
}

const max = (a, b) => {

    if (a > b ) {
        return a;
    } else {
        return b;
    }
    // your code here
}

const max3 = (a, b, c) => {

    let max;

    if (a > b) {
        max = a;
    } else {
        max = b;
    }

    if (c > max) {
        max = c;
    }
    return max;
    // your code here
}

const change = (N, C, K, L) => {

    if (K - N < 0) {
        return "no enough";
    }
     let a  = K - N;
     let b = L - C;
    return `$${a}.${b}`;
    // your code here
}



const triangle = (height) => {
    let text = "";
    for (let i = 1; i <= height; i++) {
        for (let z = 0; z < i; z++) {
            text = text + "#";
        }
        text = text + "\n";
    }
    return text;
    // your code here
}

const fizzbuzz = (N) => {
    let array = [];

    for (let i = 0; i < N; i++) {
        if (i % 3 === 0) {
                array.push("Fizz");
        }
        if ( i % 5 === 0) {
            array.push("Buzz");
        }
        if( i % 3 != 0 &&  i % 5 != 0 ) {
            array.push(i);
        }
    }
    return array;
    // your code here
}

const countChar = (str, char) => {
    let count = 0;
    for( let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count = count + 1;
        }
    }

    console.log(count);
    // your code here
}

// 🚫 don't edit this export
module.exports = {
    number, float, str, bool, undef, nullVar,
    square,
    hello,
    concat,
    getType,
    max,
    max3,
    change,
    triangle,
    fizzbuzz,
    countChar
}
