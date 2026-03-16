// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)
// console.log(10)

//Inte DRY, väldigt upprapande

//! for loop 
//! (loop variabel, villkor, uppdatering) {}

for (let i = 1; i <= 10; i++) {
    console.log("🔁 for loop", i)
}

//! While loop

let i = 0

while (i <= 10) {
    if (i <= 0) {
        console.log("Starta räkningen!")
    }

    console.log("🔁 while loop", i)

    if (i >= 10) {
        console.log("Räkning färdig!")
    }

    i++
}

//! do-while

let number = 0

do {
    console.log("🔁 do-while loop", number)
    number++
}

while (number <= 10)

//! Operator %
//Operatorn % ger resten efter en division.

console.log(10 % 2)

for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i, "🔥")
    }
}