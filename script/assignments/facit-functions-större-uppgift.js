const characters = [
    { name: "Aragon", level: 12, isAlive: true, hasWeapon: true, xp: 120 },
    { name: "Luna", level: 5, isAlive: true, hasWeapon: false, xp: 40 },
    { name: "Drako", level: 20, isAlive: false, hasWeapon: true, xp: 300 },
    { name: "Mira", level: 8, isAlive: true, hasWeapon: true, xp: 90 }
]

// 1. Visa karaktärer
console.log("----- All characters -----")

for (let i = 0; i < characters.length; i++) {
    console.log(
        characters[i].name +
        " | Level: " +
        characters[i].level +
        " | XP: " +
        characters[i].xp
    )
}

// 2. XP-check
function isHighLevel(xp) {
    if (xp >= 100) {
        return true
    } else {
        return false
    }
}

console.log("----- High level tests -----")
console.log(isHighLevel(120)) // true
console.log(isHighLevel(40)) // false

// 3. Karaktärsstatus
function getCharacterStatus(character) {
    if (!character.isAlive) {
        return "Dead"
    } else if (character.isAlive && character.hasWeapon && isHighLevel(character.xp)) {
        return "Ready for battle"
    } else if (character.isAlive && !character.hasWeapon) {
        return "Unarmed"
    } else {
        return "Training"
    }
}

// 4. Visa status
console.log("----- Character status -----")

for (let i = 0; i < characters.length; i++) {
    console.log(characters[i].name + ": " + getCharacterStatus(characters[i]))
}

// 5. Filter - visa vilka som är redo för strid
console.log("----- Ready for battle -----")

for (let i = 0; i < characters.length; i++) {
    if (
        characters[i].isAlive &&
        characters[i].hasWeapon &&
        isHighLevel(characters[i].xp)
    ) {
        console.log(characters[i].name)
    }
}

// 6. Top character
function getTopCharacter(characters) {
    let topCharacter = characters[0]

    for (let i = 1; i < characters.length; i++) {
        if (characters[i].xp > topCharacter.xp) {
            topCharacter = characters[i]
        }
    }

    return topCharacter
}

console.log("----- Top character -----")
console.log(getTopCharacter(characters))

// Bonus – Statistik
let aliveCount = 0
let deadCount = 0
let highLevelCount = 0

for (let i = 0; i < characters.length; i++) {
    if (characters[i].isAlive) {
        aliveCount++
    } else {
        deadCount++
    }

    if (isHighLevel(characters[i].xp)) {
        highLevelCount++
    }
}

console.log("----- Statistics -----")
console.log("Alive: " + aliveCount)
console.log("Dead: " + deadCount)
console.log("High level: " + highLevelCount)