const student = {
    namn: "Pelle",
    age: 25,
    isStudingJs: true
}

// console.log(student)

const students = [
    {
        namn: "Pelle",
        age: 25,
        isStudingJs: true,
        courses: ["javascript", "html", "css"]
    },
    {
        namn: "Maja",
        age: 23,
        isStudingJs: true,
        courses: ["javascript"]
    },
    {
        namn: "Mohammed",
        age: 27,
        isStudingJs: true,
        courses: ["javascript", "html", "css"]
    },
]

//Array methods

//Lägg till string i array
students[1].courses.push("html")

console.log(students[1].courses)

//Ta bort sista delen i arrayen
students[1].courses.pop()

console.log(students[1].courses)

