// ========================================
// FACIT – FUNKTIONER (MINDRE UPPGIFTER)
// ========================================


// ========================================
// 1. Ålderskontroll
// User story:
// Som användare vill jag kunna ange en ålder
// så att jag får veta om personen är ett barn eller en vuxen.
// ========================================

function checkAge(age) {
    if (age < 18) {
        return "Child"
    } else {
        return "Adult"
    }
}

console.log("1. Ålderskontroll")
console.log(checkAge(12)) // Child
console.log(checkAge(25)) // Adult


// ========================================
// 2. Temperatur
// User story:
// Som användare vill jag kunna ange en temperatur
// så att jag får en beskrivning av hur varmt eller kallt det är.
// ========================================

function getTemperatureStatus(temp) {
    if (temp < 0) {
        return "Freezing"
    } else if (temp <= 20) {
        return "Cold"
    } else if (temp <= 30) {
        return "Warm"
    } else {
        return "Hot"
    }
}

console.log("2. Temperatur")
console.log(getTemperatureStatus(-5)) // Freezing
console.log(getTemperatureStatus(10)) // Cold
console.log(getTemperatureStatus(25)) // Warm
console.log(getTemperatureStatus(35)) // Hot


// ========================================
// 3. Jämna tal
// User story:
// Som utvecklare vill jag kunna kontrollera om ett tal är jämnt
// så att jag kan använda det i andra delar av programmet.
// ========================================

function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}

console.log("3. Jämna tal")
console.log(isEven(10)) // true
console.log(isEven(7)) // false

if (isEven(10)) {
    console.log("10 is even")
} else {
    console.log("10 is odd")
}


// ========================================
// 4. Beskriv tal
// User story:
// Som användare vill jag få en beskrivning av ett tal
// så att jag vet om det är positivt/negativt och jämnt/udda.
// ========================================

function describeNumber(number) {
    let evenOrOdd = ""
    let positiveOrNegative = ""

    if (isEven(number)) {
        evenOrOdd = "Even"
    } else {
        evenOrOdd = "Odd"
    }

    if (number >= 0) {
        positiveOrNegative = "positive"
    } else {
        positiveOrNegative = "negative"
    }

    return evenOrOdd + " and " + positiveOrNegative
}

console.log("4. Beskriv tal")
console.log(describeNumber(8))   // Even and positive
console.log(describeNumber(-3))  // Odd and negative
console.log(describeNumber(0))   // Even and positive


// ========================================
// 5. Entrésystem
// User story:
// Som arrangör vill jag kontrollera vilka som får komma in
// så att bara rätt personer släpps in.
// ========================================

function canEnter(age, hasTicket) {
    if (age >= 18 && hasTicket) {
        return "Welcome"
    } else {
        return "Denied"
    }
}

console.log("5. Entrésystem")
console.log(canEnter(20, true))   // Welcome
console.log(canEnter(17, true))   // Denied
console.log(canEnter(20, false))  // Denied


// Bonus – Entrésystem med VIP
function canEnterWithVip(age, hasTicket, vip) {
    if (vip) {
        return "Welcome"
    } else if (age >= 18 && hasTicket) {
        return "Welcome"
    } else {
        return "Denied"
    }
}

console.log(canEnterWithVip(15, false, true)) // Welcome
console.log(canEnterWithVip(22, true, false)) // Welcome
console.log(canEnterWithVip(16, false, false)) // Denied


// ========================================
// 6. Kassasystem
// User story:
// Som kund vill jag få rätt totalpris i kassan
// så att rabatter räknas korrekt.
// ========================================

function calculateTotal(price, quantity) {
    let total = price * quantity

    if (total > 100) {
        total = total * 0.9
    }

    return total
}

console.log("6. Kassasystem")
console.log(calculateTotal(20, 3))   // 60
console.log(calculateTotal(30, 4))   // 108


// Bonus – Kassasystem med extra rabatt
function calculateTotalWithExtraDiscount(price, quantity) {
    let total = price * quantity

    if (quantity > 10) {
        total = total * 0.95
    }

    if (total > 100) {
        total = total * 0.9
    }

    return total
}

console.log(calculateTotalWithExtraDiscount(10, 12)) // rabatt på quantity + ev total
console.log(calculateTotalWithExtraDiscount(25, 5))  // rabatt på total