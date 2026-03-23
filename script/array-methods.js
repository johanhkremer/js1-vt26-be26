let fruits = ["🍎 äpple", "🍌 banan", "🥭 mango", "🥝 kiwi", "🍊 apelsin"]

const fruitsWith = fruits.find(fruit => fruit.startsWith("🥝"))

console.log(fruitsWith)

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

console.log("-- Skriv ut alla studenter --")

students.forEach((student) => {
    console.log(`namn: ${student.name}`)
    console.log(`kurs: ${student.course}`)
    console.log(`aktiv: ${student.active}`)
    console.log("-----------------")
})

//Förändra datan / mutera

//Ger en ny array
const resultMap = students.map(student => student.name)

//Ger inte en ny array
const resultForEach = students.forEach(student => student.name)

console.log("🗺️ 🔁", resultMap)
// console.log("🔥 🔁", resultForEach)

const products = [
    { id: 1, name: "Laptop", category: "electronics", price: 12999, inStock: true },
    { id: 2, name: "Headphones", category: "electronics", price: 799, inStock: true },
    { id: 3, name: "Coffee Maker", category: "home", price: 599, inStock: false },
    { id: 4, name: "Desk Lamp", category: "home", price: 349, inStock: true },
    { id: 5, name: "Running Shoes", category: "fashion", price: 999, inStock: true },
    { id: 6, name: "Winter Jacket", category: "fashion", price: 1499, inStock: false },
    { id: 7, name: "Smartphone", category: "electronics", price: 8999, inStock: true },
    { id: 8, name: "Backpack", category: "fashion", price: 499, inStock: true },
    { id: 9, name: "Blender", category: "home", price: 699, inStock: true },
    { id: 10, name: "Monitor", category: "electronics", price: 2499, inStock: false },
    { id: 11, name: "Keyboard", category: "electronics", price: 899, inStock: true },
    { id: 12, name: "Mouse", category: "electronics", price: 499, inStock: true },
    { id: 13, name: "T-shirt", category: "fashion", price: 299, inStock: true },
    { id: 14, name: "Jeans", category: "fashion", price: 799, inStock: false },
    { id: 15, name: "Sneakers", category: "fashion", price: 1199, inStock: true },
    { id: 16, name: "Sofa Cushion", category: "home", price: 199, inStock: true },
    { id: 17, name: "Dining Table", category: "home", price: 4999, inStock: false },
    { id: 18, name: "Bookshelf", category: "home", price: 1499, inStock: true },
    { id: 19, name: "Tablet", category: "electronics", price: 5999, inStock: true },
    { id: 20, name: "Smartwatch", category: "electronics", price: 2999, inStock: false }
]

//Skapa en ny array med endast "electronics"
const electronics = products.filter((product) => {
    if (product.category === "electronics") {
        return product
    }
})

console.log("🔌", electronics)

const findProduct = products.find(product => product.id === 7)

console.log("📱", findProduct)

//Promta products för att hitta ett specifikt produkt-id
const promtFindProduct = prompt("Skriv produkt-id")

const productNumber = parseInt(promtFindProduct)

const foundProduct = products.find(product => product.id === productNumber)

console.log(foundProduct)

/*
==============================
ARRAYMETODER – SNABBÖVERSIKT
==============================

🟢 UTAN CALLBACK
- Gör en sak direkt på arrayen (ingen egen funktion behövs)

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

concat()
- Slår ihop arrayer
- Syntax: array.concat(otherArray)


🟡 MED CALLBACK (vanliga)
- Du skickar in en funktion som körs för varje element

forEach()
- Kör kod för varje element
- Syntax: array.forEach(element => { })

find()
- Returnerar första matchande värdet
- Syntax: array.find(element => condition)

findIndex()
- Returnerar index för första match
- Syntax: array.findIndex(element => condition)

some()
- Minst ett element uppfyller villkoret (true/false)
- Syntax: array.some(element => condition)

every()
- Alla element uppfyller villkoret (true/false)
- Syntax: array.every(element => condition)

------------------------------------------------------
Ger tillbaka en ny array
------------------------------------------------------
filter()
- Returnerar alla som matchar villkor
- Syntax: array.filter(element => condition)

map()
- Skapar ny array genom att ändra varje element
- Syntax: array.map(element => newValue)


🔵 MER AVANCERAD

reduce()
- Samlar ihop array till ett värde (t.ex. summa)
- Syntax: array.reduce((acc, element) => { return newValue }, startValue)

sort()
- Sorterar array (ändrar original)
- Syntax: array.sort()
- Med compare: array.sort((a, b) => a - b)
*/