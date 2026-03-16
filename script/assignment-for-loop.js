// =========================
// Lösningar – for-loop övningar i JavaScript
// =========================


// 1. Skriv ut talen 1 till 10
for (let i = 1; i <= 10; i++) {
    console.log(i)
}


// 2. Skriv ut talen 10 till 1
for (let i = 10; i >= 1; i--) {
    console.log(i)
}


// 3. Skriv ut alla jämna tal mellan 0 och 20
for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i)
    }
}


// Alternativ lösning
for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}


// 4. Skriv ut alla udda tal mellan 1 och 19
for (let i = 1; i <= 19; i++) {
    if (i % 2 !== 0) {
        console.log(i)
    }
}


// Alternativ lösning
for (let i = 1; i <= 19; i += 2) {
    console.log(i)
}


// 5. Skriv ut 5:ans gångertabell
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i))
}


// 6. Räkna ut summan av talen 1 till 100
let sum = 0

for (let i = 1; i <= 100; i++) {
    sum += i
}

console.log(sum)


// 7. Räkna hur många tal som är delbara med 3 mellan 1 och 30
let count = 0

for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) {
        count++
    }
}

console.log(count)


// 8. Bygg en text med stjärnor
let stars = ""

for (let i = 1; i <= 5; i++) {
    stars += "*"
    console.log(stars)
}


// 9. FizzBuzz
for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz")
    } else if (i % 3 === 0) {
        console.log("Fizz")
    } else if (i % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(i)
    }
}


// 10. Hitta det största talet i en array
const numbers = [4, 12, 7, 25, 3, 18]
let biggest = numbers[0]

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > biggest) {
        biggest = numbers[i]
    }
}

console.log(biggest)