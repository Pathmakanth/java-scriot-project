// ===============================
// 1. FUNCTIONS (1–6)
// ===============================

// 1
function greetUser(name){
    console.log(`Welcome to Stackly, ${name}`);
}
greetUser("John");

// 2
function calculateSalary(basic, bonus){
    return basic + bonus;
}
console.log(calculateSalary(20000,5000));

// 3
function checkEvenOdd(num){
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(7));

// 4
function findMax(a,b,c){
    return Math.max(a,b,c);
}
console.log(findMax(5,9,2));

// 5
function calculateGST(price){
    return price + price * 0.18;
}
console.log(calculateGST(1000));

// 6
function login(username,password){
    if(username === "admin" && password === "1234"){
        console.log("Login Successful");
    }else{
        console.log("Invalid Credentials");
    }
}
login("admin","1234");


// ===============================
// 2. DEFAULT PARAMETERS (7–9)
// ===============================

// 7
function createEmployee(name, role="Trainee"){
    console.log(`Name: ${name}, Role: ${role}`);
}
createEmployee("Arun");

// 8
function calculateDiscount(price, discount=10){
    let finalPrice = price - (price * discount/100);
    return finalPrice;
}
console.log(calculateDiscount(1000));

// 9
function orderFood(item, quantity=1){
    console.log(`${quantity} ${item} ordered`);
}
orderFood("Pizza");


// ===============================
// 3. SCOPE (10–12)
// ===============================

// 10
var company = "Stackly";

function showCompany(){
    console.log(company);
}
showCompany();

// 11
if(true){
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); // works
// console.log(b); // error
// console.log(c); // error

// 12
function testScope(){
    let insideVar = "I am inside";
}
testScope();
// console.log(insideVar); // error


// ===============================
// 4. HOISTING (13–15)
// ===============================

// 13
console.log(x);
var x = 10;

// 14
// console.log(y); // error
let y = 20;

// 15
sayHello();

function sayHello(){
    console.log("Hello!");
}


// ===============================
// 5. FUNCTION TYPES (16–18)
// ===============================

// 16
function namedExample(){
    console.log("Named Function Example");
}
namedExample();

// 17
let multiply = function(a,b){
    return a*b;
}
console.log(multiply(4,5));

// 18
let square = (num) => num * num;
console.log(square(6));


// ===============================
// 6. CALLBACK & HIGHER ORDER FUNCTIONS (19–22)
// ===============================

// 19
function processData(callback){
    console.log("Processing data...");
    callback();
}

processData(function(){
    console.log("Callback executed");
});

// 20
function calculate(a,b,operation){
    return operation(a,b);
}

function add(a,b){ return a+b; }
function sub(a,b){ return a-b; }

console.log(calculate(10,5,add));
console.log(calculate(10,5,sub));

// 21
function taskDone(){
    console.log("Task Completed");
}

function performCalculation(){
    console.log(5+5);
    taskDone();
}

performCalculation();

// 22
function userData(callback){
    let user = {name:"John", age:25};
    callback(user);
}

userData(function(data){
    console.log(data);
});


// ===============================
// 7. CURRYING (23–24)
// ===============================

// 23
function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(add(2)(3)(4));

// 24
function multiplyCurried(a){
    return function(b){
        return function(c){
            return a*b*c;
        }
    }
}
console.log(multiplyCurried(2)(3)(4));


// ===============================
// 8. IIFE (25–26)
// ===============================

// 25
(function(){
    console.log("Website Loaded");
})();

// 26
(function(price){
    let discount = price * 0.1;
    console.log("Final Price:", price-discount);
})(1000);


// ===============================
// 9. GENERATOR FUNCTIONS (27–28)
// ===============================

// 27
function* coupons(){
    yield "DISCOUNT10";
    yield "SAVE20";
    yield "OFFER30";
}

let c = coupons();
console.log(c.next().value);
console.log(c.next().value);
console.log(c.next().value);

// 28
function* motivation(){
    yield "Keep coding!";
    yield "Never give up!";
    yield "Practice daily!";
}

let m = motivation();
console.log(m.next().value);
console.log(m.next().value);
console.log(m.next().value);


// ===============================
// 10. SPREAD OPERATOR (29–31)
// ===============================

// 29
let arr1 = [1,2,3];
let arr2 = [4,5,6];
let merged = [...arr1,...arr2];
console.log(merged);

// 30
let original = [10,20,30];
let clone = [...original];
console.log(clone);

// 31
let obj1 = {name:"John"};
let obj2 = {role:"Developer"};

let mergedObj = {...obj1,...obj2};
console.log(mergedObj);


// ===============================
// 11. REST OPERATOR (32–34)
// ===============================

// 32
function sumAll(...numbers){
    return numbers.reduce((a,b)=>a+b);
}
console.log(sumAll(1,2,3,4,5));

// 33
function showArgs(first,...rest){
    console.log("First:",first);
    console.log("Rest:",rest);
}
showArgs(1,2,3,4);

// 34
function totalBill(...prices){
    return prices.reduce((a,b)=>a+b);
}
console.log(totalBill(100,200,300));


// ===============================
// 12. DESTRUCTURING (35–38)
// ===============================

// 35
let arr = [10,20,30,40];
let [a1,a2,a3,a4] = arr;
console.log(a1,a2,a3,a4);

// 36
let employee = {name:"Naveen", role:"Developer", salary:40000};
let {name,role,salary} = employee;
console.log(name,role,salary);

// 37
let numbers = [5,10,15,20];
let [first,,,last] = numbers;
console.log(first,last);

// 38
let nested = [1,2,[3,4]];
let [n1,n2,[n3,n4]] = nested;
console.log(n3,n4);


// ===============================
// 13. ARRAY MANIPULATION (39–40)
// ===============================

// 39
let arrTest = [1,2,3,4,5];

arrTest.push(6);
arrTest.pop();
arrTest.shift();
arrTest.unshift(0);

console.log(arrTest);

// 40
let arrReplace = [1,2,3,40,50,6];
arrReplace.splice(3,2,4,5);

console.log(arrReplace);