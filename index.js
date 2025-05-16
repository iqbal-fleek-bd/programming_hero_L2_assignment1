"use strict";
// Problem 1: Format String
function formatString(input, toUpper = true) {
    return toUpper ? input.toUpperCase() : input.toLowerCase();
}
// Problem 2: Filter by Rating
function filterByRating(items) {
    return items.filter(item => item.rating >= 4);
}
// Problem 3: Concatenate Arrays
function concatenateArrays(...arrays) {
    return arrays.flat();
}
// Problem 4: Vehicle & Car Classes
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        return `Make: ${this.make}, Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        return `Model: ${this.model}`;
    }
}
// Problem 5: Process Value
function processValue(value) {
    return typeof value === 'string' ? value.length : value * 2;
}
function getMostExpensiveProduct(products) {
    if (products.length === 0)
        return null;
    return products.reduce((max, current) => current.price > max.price ? current : max);
}
// Problem 7: Day Enum & Type Function
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    return day === Day.Saturday || day === Day.Sunday ? "Weekend" : "Weekday";
}
// Problem 8: Async Square
async function squareAsync(n) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            n < 0 ? reject(new Error("Negative number not allowed")) : resolve(n * n);
        }, 1000);
    });
}
