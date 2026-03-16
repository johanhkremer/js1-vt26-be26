const fruits = ["kiwi 🥝", "banan 🍌", "apelsin 🍊", "äpple 🍎", "ananans 🍍"]

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}

const names = ["Johan", "Mohammed", "Anna", "Josef", "Stina"]

for (let i = 0; i < names.length; i++) {
    if (names[i] === "Johan") {
        console.log("⭐️ VIP hälsning till Johan!")
    } else {
        console.log("Hej " + names[i] + "!")
    }
}

const students = [
    { id: 1, name: "Alice", age: 23, active: true, course: "JavaScript" },
    { id: 2, name: "Bob", age: 25, active: false, course: "HTML/CSS" },
    { id: 3, name: "Charlie", age: 22, active: true, course: "JavaScript" },
    { id: 4, name: "Diana", age: 24, active: true, course: "React" },
    { id: 5, name: "Elias", age: 26, active: false, course: "HTML/CSS" },
    { id: 6, name: "Fatima", age: 21, active: true, course: "JavaScript" },
    { id: 7, name: "Gabriel", age: 23, active: true, course: "React" },
    { id: 8, name: "Hanna", age: 22, active: false, course: "HTML/CSS" },
    { id: 9, name: "Isak", age: 27, active: true, course: "JavaScript" },
    { id: 10, name: "Julia", age: 24, active: true, course: "React" },
    { id: 11, name: "Kevin", age: 23, active: false, course: "HTML/CSS" },
    { id: 12, name: "Lina", age: 21, active: true, course: "JavaScript" },
    { id: 13, name: "Marcus", age: 25, active: true, course: "React" },
    { id: 14, name: "Nora", age: 22, active: true, course: "JavaScript" },
    { id: 15, name: "Oskar", age: 26, active: false, course: "HTML/CSS" },
    { id: 16, name: "Petra", age: 24, active: true, course: "React" },
    { id: 17, name: "Quentin", age: 23, active: true, course: "JavaScript" },
    { id: 18, name: "Rashid", age: 27, active: false, course: "HTML/CSS" },
    { id: 19, name: "Sara", age: 22, active: true, course: "React" },
    { id: 20, name: "Tom", age: 25, active: true, course: "JavaScript" }
]

for (let i = 0; i < students.length; i++) {
    if (students[i].course === "JavaScript") {
        console.log(students[i].name, " studerar javascript! ⚡️")
    }

    if (students[i].course === "React") {
        console.log(students[i].name, " studerar react! ⚛️")
    }
}