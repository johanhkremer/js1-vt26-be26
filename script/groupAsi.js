function greetUser(name) {
    return "Hej " + (name || "gäst 👤")
}

function isValidUser(name, age) {
    return name && age >= 18
}

let counter = 0

function incrementCounter() {
    counter++
    return counter
}

function handleUser(name, age) {
    if (!isValidUser(name, age)) {
        return "Ogiltig användare ❌"
    }

    const greeting = greetUser(name)
    const count = incrementCounter()

    return greeting + " (besök: " + count + ")"
}

console.log(handleUser("Johan", 44))
console.log(handleUser("Astrid", 24))
console.log(handleUser("Lina", 16))
console.log(handleUser("Astrid", 24))

