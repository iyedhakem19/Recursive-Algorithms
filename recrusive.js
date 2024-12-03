//1
function weatherClothingAdviser() {
    
    const temperature = parseInt(prompt("Enter the current temperature in °C: "), 10);
    const isRaining = prompt("Is it raining? (yes/no)").toLowerCase() === "yes";

    
    let clothingAdvice;

    switch (true) {
        case (temperature >= 30):
            if (isRaining) {
                clothingAdvice = "It's hot and raining! Wear a lightweight waterproof jacket and shorts.";
            } else {
                clothingAdvice = "It's hot! Wear light clothing, shorts, and sunglasses.";
            }
            break;

        case (temperature >= 20 && temperature < 30):
            if (isRaining) {
                clothingAdvice = "It's warm and raining! Wear a raincoat and light pants.";
            } else {
                clothingAdvice = "It's warm! Wear a t-shirt and light pants.";
            }
            break;

        case (temperature >= 10 && temperature < 20):
            if (isRaining) {
                clothingAdvice = "It's cool and raining! Wear a jacket and an umbrella.";
            } else {
                clothingAdvice = "It's cool! Wear a jacket and jeans.";
            }
            break;

        default:
            if (isRaining) {
                clothingAdvice = "It's cold and raining! Wear a warm coat, gloves, and a waterproof jacket.";
            } else {
                clothingAdvice = "It's cold! Wear a warm coat, gloves, and a scarf.";
            }
            break;
    }

    
}

// Example usage:
weatherClothingAdviser();










function ticketPricing() {
   
    const age = parseInt(prompt("Enter your age: "), 10);

    
    let price;

    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else if (age >= 18) {
        price = 20;
    }

    
    let priceSwitch;
    switch (true) {
        case (age <= 12):
            priceSwitch = 10;
            break;
        case (age >= 13 && age <= 17):
            priceSwitch = 15;
            break;
        case (age >= 18):
            priceSwitch = 20;
            break;
        default:
            priceSwitch = 0;  
    }

   
}

// Example usage:
ticketPricing();




//2
// Recursive function to calculate nth Fibonacci number
function fibonacci(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

// Example usage:
const n = parseInt(prompt("Enter the value of n to get the nth Fibonacci number: "), 10);
console.log(`The ${n}th Fibonacci number is: ${fibonacci(n)}`);










// Recursive function to calculate power
function power(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent > 0) {
        return base * power(base, exponent - 1);
    } else {
        return 1 / power(base, -exponent);
    }
}

const base = parseFloat(prompt("Enter the base: "));
const exponent = parseInt(prompt("Enter the exponent: "), 10);
console.log(`${base} raised to the power of ${exponent} is: ${power(base, exponent)}`);

