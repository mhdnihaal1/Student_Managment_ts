"use strict";
class Counter {
    constructor() {
        // Increment the count every time a new instance is created
        Counter.count++;
    }
    // Static method to get the current count
    static getCount() {
        return Counter.count;
    }
}
// Static variable to keep track of the number of instances
Counter.count = 0;
// Creating instances of Counter
const counter1 = new Counter();
const counter2 = new Counter();
const counter3 = new Counter();
const counter4 = new Counter();
// Accessing the static variable using the class name
console.log(Counter.getCount()); // Output: 3
console.log(Counter.count); // Output: 3
