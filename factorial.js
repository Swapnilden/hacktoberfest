function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calculateFactorial(n - 1);
}

let num = 5; // Change this to calculate factorial of a different number
let factorial = calculateFactorial(num);
console.log(`${num}! = ${factorial}`);
