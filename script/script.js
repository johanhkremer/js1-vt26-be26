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

let fruits = ["🍎 äpple", "🍌 banan", "🥭 mango", "🥝 kiwi", "🍊 apelsin"]

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