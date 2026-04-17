/*
Ett Promise är ett löfte om att ett värde kommer senare.
- används när något tar tid, t.ex. API-anrop eller timers
- först är Promise "pending"
- sedan blir det antingen:
  - "fulfilled" = lyckades
  - "rejected" = misslyckades

Man kan ta emot resultatet med .then()
och hantera fel med .catch()

Exempel:
fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

Kort sagt:
Promise = ett framtida värde
.then() = vad som ska hända om det lyckas
.catch() = vad som ska hända om det blir fel
*/

//Promises 🤝

//Create promise
function makeRamen() {
    console.log("Trying to make ramen...")

    return new Promise(function (resolve, rejected) {
        const hasNoodles = true

        if (hasNoodles) {
            setTimeout(() => {
                resolve("🍜")
            }, 2000)
        } else {
            rejected("🛑 has no noodles left!")
        }
    })
}

function boilEgg() {
    return new Promise(function (resolve, rejected) {
        const hasEgg = false

        if (hasEgg) {
            setTimeout(() => {
                resolve("🥚")
            }, 2000)
        } else {
            rejected("All the chickens are dead 🐓💀")
        }
    })
}

const ramenPromise = makeRamen()

console.log(ramenPromise)

function eatRamen() {
    console.log("Let's eat ramen")
}

function onSuccess(data) {
    console.log("We made:", data)
}

function onError(error) {
    console.log("We couldn't make ramen because:", error)
}

//Receive promise
makeRamen()
    .then(boilEgg)
    .then(onSuccess)
    .catch(onError)
    .finally(eatRamen)

//Steps

const step1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 1 klart")
            resolve()
        }, 4000)
    })
}

const step2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 2 klart")
            resolve()
        }, 2000)
    })
}

const step3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 3 klart")
            resolve()
        }, 500)
    })
}

const step4 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 4 klart")
            resolve()
        }, 2000)
    })
}

step1()
    .then(step2)
    .then(step3)
    .then(step4)
    .then(() => {
        console.log("Alla steg klara")
    })