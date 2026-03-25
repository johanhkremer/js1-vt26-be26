/*
SORTERING I JAVASCRIPT

1. sort() utan callback
- JavaScript använder standardsortering
- värden jämförs som text
- fungerar ofta för vanliga ord
- fungerar dåligt för nummer

2. sort() muterar originalarrayen
- originalarrayen ändras direkt

3. toSorted()
- skapar en ny sorterad array
- originalarrayen ändras inte

4. toSorted((a, b) => a - b)
- används för nummer
- negativt tal => a före b
- positivt tal => b före a
- 0 => ingen skillnad

5. sortering av objekt
- a och b är objekt
- du jämför en property, t.ex. age

6. localeCompare()
- används för text
- bättre för alfabetisk sortering
- särskilt bra för svenska tecken som å, ä och ö
*/

// 1. Vanlig sortering med sort()
const fruits = ["mango", "apple", "banana", "kiwi"]
console.log("Innan sort", fruits)

fruits.sort()

//sort() muterar/ändrar arrayen
console.log("Efter sort", fruits)

const sortedFruits = fruits.toSorted()

console.log("Sorterad frukter i ny array", sortedFruits)

const numbers = [1, 3, 10, 7, 12, 5]

console.log(numbers)

// const sortedNumbers = numbers.toSorted()

// console.log(sortedNumbers)

const sortedNumbers = numbers.toSorted((a, b) => a - b)

/*
a - b

negativt tal => a före b
positivt tal => b före a
0 => ingen skillnad
*/

console.log(sortedNumbers)

// 5. Sortera objekt på ett numeriskt värde
const students = [
    { id: 1, name: "Alice", age: 23, active: true },
    { id: 2, name: "Bob", age: 19, active: false },
    { id: 3, name: "Charlie", age: 25, active: true },
    { id: 4, name: "Diana", age: 28, active: true },
    { id: 5, name: "Elias", age: 17, active: false },
    { id: 6, name: "Åke", age: 32, active: false },
    { id: 6, name: "Örjan", age: 32, active: false },
]

const studentsByAge = students.toSorted((a, b) => {
    return a.age - b.age
})

console.log(studentsByAge)

// 6. Sortera text med localeCompare()
const letters = ["z", "ä", "a"]

const sortedLetters = letters.toSorted((a, b) => {
    return a.localeCompare(b, "sv")
})

console.log(sortedLetters)