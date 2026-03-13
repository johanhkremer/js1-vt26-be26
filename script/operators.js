//Logiska operatorer


//!Jämförelser

// == jämför bara value, === jämför value & type

console.log("☀️ 5 == '5': ", 5 == "5")

console.log("🌝 5 === '5': ", 5 === "5")

console.log("🔥 Johan är lika med Johan:", "johan" === "johan")

// Större/mindre än: < >, Större/mindre eller lika med: =< =>
console.log("🧡 4 är mindre än 5: ", 4 < 5)
console.log("💜 4 är större än 5: ", 4 > 5)
console.log("💚 4 är större än eller lika stort som 5: ", 4 >= 5)

//!if

if (5 == "5") {
    console.log("✅ if är true!")
}

const age = 17

// if (age >= 18) {
//     console.log("✅ Du är myndig!")
// }

// if (age < 18) {
//     console.log("❌ Du är inte myndig")
// }

if (age >= 18) {
    console.log("✅ Du är myndig!")
} else {
    console.log("❌ Du är inte myndig")
}

//! &&, ||

const hasPassword = true
const isAdmin = true
const user = "oskar"

if (hasPassword && isAdmin && user === "johan") {
    console.log("Du får tillgång till systemet ✅🔓")
} else {
    console.log("Du får inte tillgång till systemet ❌🔒")
}

const isMember = true
const hasCoupon = true

if (isMember || hasCoupon) {
    console.log("Du får rabatt! 💰")
} else {
    console.log("Du får ingen rabatt! ❌")
}

//! ! logical not


console.log(5 + 5)

console.log(5 + "5", "☀️")

console.log(5 - 3)

console.log(5 - "3")

console.log(3 == "3")

console.log("johan" + "kremer")