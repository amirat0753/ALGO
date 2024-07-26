function ticketPrice(age) {
    if (age <= 12) {
        return 10;
    } else if (age >= 13 && age <= 17) {
        return 15;
    } else {
        return 20;
    }
}


const age = parseInt(prompt("Enter your age: "), 10);
const price = ticketPrice(age);
console.log(`The ticket price for a ${age}-year-old is $${price}.`);