/* Sync */

const coffee = "☕️"

console.log(coffee)

/* Aync */

let asyncCoffee

function makeCoffee() {
    console.log("Start making coffee")

    setTimeout(() => {
        asyncCoffee = "☕️"
    }, 2000)

    console.log("Your coffee is beeing made")
}

makeCoffee()

setTimeout(() => {
    console.log(`Your ${asyncCoffee} is ready`)
}, 2500);

/* 💎 Pure functions och 💥 side effects */

// Pure function = same input same output för given input

function pureNumbers(a, b) {
    return a + b
}

console.log(pureNumbers(1, 7))

let impureNumber = 7

function impureFunction() {
    console.log(impureNumber)
}

impureFunction()

// Callback function

const cookRamen = (eatRamen) => {
    setTimeout(() => {
        const ramen = "🍲"
        eatRamen(ramen)
    }, 4000)
}

const eatRamen = (ramen) => {
    console.log(`Eat ${ramen}`)
}

cookRamen(eatRamen)

console.log("Gör något medans ramen tillagas")