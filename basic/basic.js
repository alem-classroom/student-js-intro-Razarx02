const number = 125;
const float = 125.5;
const str = "Hello";
const bool =  true;
const undef = undefined;
const nullVar = null;

const square = (n) => {
    return n*n;
    // your code here
}

const hello = (name) => {
   console.log("Hello, " + name + "!");
}

const concat = (strings) => {
    // your code here
    return `${strings[0]} ${strings[1]}`; 
 }

function getType(value) {
    return typeof (value);
    // your code here
}

const max = (a, b) => {

    if (a > b ) {
        return a;
    } else {
        return b;
    }
    return a;
    // your code here
}

const max3 = (a, b, c) => {

    if (a > b && a > c) {
        return a;
    } else if ( b > a && a > c) {
        return b;
    } else {
        return c;
    }
    // your code here
}

const change = (N, C, K, L) => {

    if (K - N < 0) {
        return "no enough";
    }

    return "$" + (K - N) + "." + (L - C);
    // your code here
}



const triangle = (height) => {
    let text = "";
    for (i = 1; i <= height; i++) {
        for (z = 0; z < i; z++) {
            text = text + "#";
        }
        text = text + "\n";
    }
    return text;
    // your code here
}

const fizzbuzz = (N) => {
    let array = [];

    for (i = 0; i < N; i++) {
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
    for( i = 0; i < str.length; i++) {
        if (str.charAt(i) == char) {
            count = count + 1;
        }
    }

    return count;
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
