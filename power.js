function power(base, exponent) {
    // Base case
    if (exponent === 0) {
        return 1;
    }
    // Recursive case
    return base * power(base, exponent - 1);
}

const base = 2;
const exponent = 5;
console.log(`${base} raised to the power of ${exponent} is ${power(base, exponent)}`);
