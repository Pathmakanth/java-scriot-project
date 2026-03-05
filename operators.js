// =======================================
// SECTION 1 – Basic Arithmetic (1–10)
// =======================================

console.log("Addition:", 25 + 4)
console.log("Subtraction:", 25 - 4)
console.log("Multiplication:", 25 * 4)
console.log("Division:", 25 / 4)

console.log(100 % 30)

console.log(7 ** 2)

console.log(2 ** 5)

let num = 50
console.log(num / 5)

console.log(45 % 6)

console.log(0.5 * 8)

console.log(75 - 200)

console.log(10 + 20 + 30)

console.log(9 % 2)


// =======================================
// SECTION 2 – Increment / Decrement (11–25)
// =======================================

let a = 5
console.log(a++)
console.log(a)

a = 5
console.log(++a)
console.log(a)

a = 10
let b = a++
console.log(a, b)

a = 10
b = ++a
console.log(a, b)

a = 1
b = a++ + a++
console.log(a, b)

a = 1
b = ++a + ++a
console.log(a, b)

a = 3
a = a++
console.log(a)

a = 3
a = ++a
console.log(a)

let x = 5
let y = --x
console.log(x, y)

x = 5
y = x--
console.log(x, y)

a = 2
b = a++ + ++a + a++
console.log(a, b)

a = 4
b = --a + a-- + --a
console.log(a, b)

a = 1
b = ++a + a++ + ++a
console.log(a, b)

a = 5
b = a++ + a++ + a++
console.log(a, b)

a = 10
a += a++
console.log(a)


// =======================================
// SECTION 3 – Assignment Operators (26–35)
// =======================================

let c = 10
c += 5
console.log(c)

c = 20
c -= 8
console.log(c)

c = 7
c *= 3
console.log(c)

c = 40
c /= 5
console.log(c)

c = 25
c %= 4
console.log(c)

a = 5
a += 3
a *= 2
console.log(a)

a = 10
a -= 2
a /= 4
console.log(a)

a = 8
a %= 3
console.log(a)

a = 6
a += a
console.log(a)

a = 2
a *= a += 3
console.log(a)


// =======================================
// SECTION 4 – Comparison (36–45)
// =======================================

console.log(5 == "5")
console.log(5 === "5")
console.log(0 == false)
console.log(0 === false)
console.log(null == undefined)
console.log(null === undefined)
console.log("10" > 5)
console.log("2" > "10")
console.log(true == 1)
console.log(true === 1)


// =======================================
// SECTION 5 – Logical Operators (46–55)
// =======================================

console.log(true && false)
console.log(true || false)
console.log(false || false)
console.log(!true)
console.log(!(5 > 2))
console.log(5 > 3 && 10 > 5)
console.log(5 > 3 && 10 < 5)
console.log(5 < 3 || 10 < 5)
console.log(5 < 3 || 10 > 5)
console.log((5 > 2 && 3 > 1) || (10 < 2))


// =======================================
// SECTION 6 – Ternary (56–60)
// =======================================

let age = 20
console.log(age >= 18 ? "Adult" : "Minor")

let marks = 45
console.log(marks >= 50 ? "Pass" : "Fail")

let number = 7
console.log(number % 2 == 0 ? "Even" : "Odd")

let score = 82
let grade = score >= 90 ? "A" :
            score >= 75 ? "B" :
            score >= 50 ? "C" : "Fail"
console.log(grade)

let n = -5
console.log(n >= 0 ? "Positive" : "Negative")


// =======================================
// SECTION 7 – String & Concatenation (61–65)
// =======================================

console.log("Hello" + " " + "World")

let firstName = "John"
let lastName = "Doe"
console.log(firstName + " " + lastName)

console.log(`${firstName} ${lastName}`)

console.log("10" + 5)

console.log(5 + "10")


// =======================================
// SECTION 8 – Implicit Type Conversion (66–70)
// =======================================

console.log("5" + 2)
console.log("5" - 2)
console.log("5" * 2)
console.log(true + 1)
console.log(false + "1")


// =======================================
// SECTION 9 – Explicit Conversion (71–75)
// =======================================

console.log(Number("123"))
console.log(Number("abc"))
console.log(Number(true))

console.log(Boolean(""))
console.log(Boolean("hello"))


// =======================================
// FINAL RAPID FIRE ROUND
// =======================================

// 1. Difference between == and ===
// == compares value only (type conversion allowed)
// === compares value AND type (no conversion)

// 2. Difference between a++ and ++a
// a++ → post increment (use value first then add 1)
// ++a → pre increment (add 1 first then use value)

// 3. Falsy values
// false
// 0
// ""
// null
// undefined
// NaN

// 4. Why "5" - 2 works but "5" + 2 behaves differently
// "-" converts string to number → 5 - 2 = 3
// "+" does string concatenation → "5" + 2 = "52"

// 5. Why null == undefined is true
// Because JavaScript loosely treats them as equal in loose comparison (==)