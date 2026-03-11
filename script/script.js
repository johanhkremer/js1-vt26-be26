//! Scope
console.log("❌ Utanför kodblocket:")
const x = "1 const 🔥"
console.log("första:", x)

{
    const x = "2 const 🌊"
    let y = "let"
    var z = "var"

    console.log("✅ Inne i kodblocket:")
    console.log("andra:", x)
    // console.log(y)
    // console.log(z)
}

console.log("❌ Utanför kodblocket:")
console.log("tredje", x)
//console.log(y)
// console.log(z)

//! Hoisting 🏗️
varTest = "ny hoistad var 🏗️😵‍💫"

console.log(varTest)

var varTest = "hoistad var 🏗️"

console.log(varTest)

//! UNDEFINED & NULL
let undefinedUser

console.log(undefinedUser, typeof undefinedUser)

let nullUser = null

console.log(nullUser, typeof nullUser)

//! Intro till Arrayer

const array = ["banan", "kiwi", "melon", "apelsin", 1, false, 5]

console.log(typeof array[1])

console.log("Det finns:", array.length, "produkter på sidan")

//! Intro Objects

const teacher = {
    user: "johan",
    role: "teacher",
    age: 44,
}

console.log("Teacher:", teacher.user)

const teachers = [
    {
        user: "Johan",
        role: "teacher",
        age: 44,
    },
    {
        user: "Pelle",
        role: "teacher",
        age: 32,
    },
]

console.log(teachers)