// Task 1
let name = "Pathmakanth";
let age = 31;
let city = "Namakkal";

console.log("My name is " + name + ".");
console.log("I am " + age + " years old.");
console.log("I am from " + city + ".");

// Task 2
let userName = prompt("Enter your name:");
alert("Welcome " + userName + "!");

let choice = confirm("Do you want to learn JavaScript?");

if (choice) {
    alert("Great Choice!");
} else {
    alert("No Problem!");
}

// Task 3
let str = "Hello";
let num = 100;
let bool = true;
let undef;
let empty = null;

console.log("Value: " + str + " | Type: " + typeof str);
console.log("Value: " + num + " | Type: " + typeof num);
console.log("Value: " + bool + " | Type: " + typeof bool);
console.log("Value: " + undef + " | Type: " + typeof undef);
console.log("Value: " + empty + " | Type: " + typeof empty);

// Task 4
let colors = ["Red", "Blue", "Green", "Yellow", "Pink", "Black"];

console.log("First color: " + colors[0]);
console.log("Last color: " + colors[colors.length - 1]);
console.log("Total colors: " + colors.length);

for (let i = 0; i < colors.length; i++) {
    console.log("Color " + i + ": " + colors[i]);
}

// Task 5
let subjects = ["Math", "Science", "English", "History", "Computer"];

let index = prompt("Enter index (0 to 4):");
console.log("Selected subject: " + subjects[index]);

// Task 6
let student = {
    name: "Pathmakanth",
    age: 30,
    course: "EEE",
    skills: ["HTML", "FIGMA", "JavaScript"]
};

console.log("Student name: " + student.name);
console.log("Second skill: " + student.skills[1]);
console.log("Course name: " + student.course);

// Task 7
let product = {
    name: "Laptop",
    price: 45000,
    category: "Electronics",
    inStock: true
};

console.log("Product Name: " + product.name);
console.log("Price: " + product.price);
console.log("Available: " + (product.inStock ? "Yes" : "No"));

if (!product.inStock) {
    console.log("Out of Stock");
}

// Task 8
let fruits = {
    tropical: ["mango", "pineapple"],
    berries: ["strawberry", "blueberry"],
    citrus: ["orange", "lemon"]
};

console.log("Blueberry: " + fruits.berries[1]);
console.log("Mango: " + fruits.tropical[0]);
console.log("Lemon: " + fruits.citrus[1]);

console.log("Total categories: " + Object.keys(fruits).length);