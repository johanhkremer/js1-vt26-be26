// function checkAge(age) {
//     if (age < 18) {
//         return "Child"
//     } else {
//         return "Adult"
//     }
// }
// console.log("Ålderskontroll")
// console.log(checkAge(10))
// console.log(checkAge(22))

const fruits = ["🍎 äpple", "🍌 banan", "🥭 mango", "🥝 kiwi", "🍊 apelsin"]

console.log("Fruits: ", fruits)

console.log("Fruits length: ", fruits.length)

/*
🔹 push()

👉 Lägger till i slutet av arrayen
*/

fruits.push("🍍 ananas")

console.log("Fruits: ", fruits)

console.log("Fruits length: ", fruits.length)

console.log("Last fruit is: ", fruits.at(-1))

/*
🔹 pop()

👉 Tar bort från slutet av arrayen
*/

fruits.pop()

console.log("Last fruit is: ", fruits.at(-1))

console.log("Finns 🍌 banan i listan?: ", fruits.includes("🍌 banan"))
console.log("Finns 🫐 blåbär i listan?: ", fruits.includes("🫐 blåbär"))

console.log("🥝 kiwi har platsen: ", fruits.indexOf("🥝 kiwi"))

/*
🔹 unshift()

👉 Lägger till i början av arrayen
*/

fruits.unshift("🫐 blåbär")

console.log("Finns 🫐 blåbär i listan?: ", fruits.includes("🫐 blåbär"))
console.log("🫐 blåbär har platsen: ", fruits.indexOf("🫐 blåbär"))

/*
🔹 shift()

👉 Tar bort från början av arrayen
*/

fruits.shift()
console.log("Finns 🫐 blåbär i listan?: ", fruits.includes("🫐 blåbär"))

const someFruits = fruits.slice(2, 4)

console.log(someFruits)

console.log(fruits.join(", 😋"))

/*
==============================
ARRAYMETODER – FÖRMIDDAG
==============================

🟢 GRUNDER

length
- Antal element i arrayen
- Syntax: array.length

at()
- Hämtar element på index (kan använda -1 för sista)
- Syntax: array.at(index)

push()
- Lägger till i slutet
- Syntax: array.push(value)

pop()
- Tar bort sista elementet
- Syntax: array.pop()

shift()
- Tar bort första elementet
- Syntax: array.shift()

unshift()
- Lägger till i början
- Syntax: array.unshift(value)

includes()
- Kollar om värde finns (true/false)
- Syntax: array.includes(value)

indexOf()
- Returnerar index för värde (eller -1)
- Syntax: array.indexOf(value)

join()
- Gör om array till sträng
- Syntax: array.join(separator)

slice()
- Skapar kopia av del av array (ändrar inte original)
- Syntax: array.slice(start, end)
*/

// 1. Filmlista
// Som användare vill jag kunna lägga till en ny film i min filmlista. 
// - Skapa en array med filmer 
// - Lägg till en ny film sist i listan - Skriv ut listan och hur många filmer den innehåller

const movies = [
    "Arrival (2016)",
    "Ex Machina (2014)",
    "Blade Runner 2049 (2017)",
    "Interstellar (2014)",
    "Annihilation (2018)",
    "Children of Men (2006)",
    "Moon (2009)",
    "Under the Skin (2013)",
    "Upgrade (2018)",
    "Her (2013)",
    "Edge of Tomorrow (2014)",
    "The Martian (2015)",
    "Dune (2021)",
    "Oblivion (2013)",
    "District 9 (2009)",
    "Solaris (1972)",
    "Stalker (1979)",
    "Contact (1997)",
]

movies.push("Primer (2004)")

console.log("Movies:", movies, "Number of movies", movies.length)

// 1. Aktiva studenter
// Filtrera ut alla studenter som är aktiva.

// Studenter:
const students = [
    { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" },
    { id: 2, name: "Bob", age: 19, active: false, course: "HTML/CSS" },
    { id: 3, name: "Charlie", age: 25, active: true, course: "JavaScript" },
    { id: 4, name: "Diana", age: 28, active: true, course: "React" },
    { id: 5, name: "Elias", age: 17, active: false, course: "HTML/CSS" },
    { id: 6, name: "Fatima", age: 22, active: true, course: "JavaScript" },
    { id: 7, name: "Gabriel", age: 31, active: true, course: "React" },
    { id: 8, name: "Hanna", age: 20, active: false, course: "UX/UI" }
]

const activeStudents = students.filter(student => student.active)

console.log(activeStudents)