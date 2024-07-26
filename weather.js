function clothingAdvisor(temperature, raining) {
    if (temperature < 10) {
        if (raining) {
            return "You should wear a warm coat and take an umbrella.";
        } else {
            return "You should wear a warm coat.";
        }
    } else if (temperature >= 10 && temperature < 20) {
        if (raining) {
            return "You should wear a light jacket and take an umbrella.";
        } else {
            return "You should wear a light jacket.";
        }
    } else {
        if (raining) {
            return "You can wear a t-shirt and take an umbrella.";
        } else {
            return "You can wear a t-shirt.";
        }
    }
}


const temperature = parseFloat(prompt("Enter the current temperature in Celsius: "));
const rainInput = prompt("Is it raining? (yes/no): ").toLowerCase();
const raining = rainInput === 'yes';

const advice = clothingAdvisor(temperature, raining);
console.log(advice);
