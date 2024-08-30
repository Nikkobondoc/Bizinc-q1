function doubleEven (arr) {
    return arr.map(num => {
        if (num % 2 === 0) {
            return num * 2;
        } else {
            return num;
        }
    });
}

let input = [1,2,3,4,5,6]
let output = doubleEven(input);

console.log(output);

// the difference is "==" means it checks for equality and "===" checks for equality without performing type conversion