// Regler:
//! 1. Personen får komma in om:
//      ○ Den är 18 år eller äldre
//      ○ OCH har biljett
//! 2. Personen får också komma in om:
//      ○ Den är under 18
//      ○ MEN har en förälder med sig
//! 3. VIP-personer får alltid komma in.

//! Fundera också på:
//      ● Vad händer om någon är 18 men saknar biljett?
//      ● Vad händer om någon är 17 utan förälder?
//      ● Vad händer om någon är VIP men saknar biljett?

const age = 17
const hasTicket = false
const hasParent = true
const isVip = false

if (isVip || (age >= 18 && hasTicket) || (age < 18 && hasParent)) {
    console.log("Du får komma in")
} else {
    console.log("Du får inte komma in")
}

// const age = 17
// const hasTicket = false
// const hasParent = true
// const isVip = false

// if (isVip) {
//     console.log("Du får komma in")
// } else if (age >= 18 && hasTicket) {
//     console.log("Du får komma in")
// } else if (age < 18 && hasParent) {
//     console.log("Du får komma in")
// } else {
//     console.log("Du får inte komma in")
// }

