const students = [
    "Daniel",
    "Abdala Ali",
    "Albin Dyrenäs",
    "Alice Danielsson",
    "Alicia Holm",
    "Andreas Henker",
    "Apelsina Ögren",
    "Ashley Heather",
    "Catherine Crépault Wibe",
    "Diana Paragina",
    "Disa Johansson",
    "Dzemila Beslija",
    "Fatima Kanbar",
    "Felix Hansson",
    "Filip Norrman",
    "Isa Forsberg",
    "Jeongsook Park",
    "Kevin Dalström",
    "Kiarman Taklif",
    "Kim Rundgren",
    "Molly Dahl Lundell",
    "Oskar Calais",
    "Setareh Adabi",
    "Tatiana Uzan",
    "Therese Jonsson",
    "Yvonne Claassen",
    "Zana Ibrahim"
]

// Blanda listan
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1))

        /*
            Math.floor() används för att avrunda ner ett tal till närmaste heltal
            Math.random() används för att skapa ett slumptal mellan 0 och 1
        */

        let temp = array[i]
        array[i] = array[randomIndex]
        array[randomIndex] = temp
    }

    return array
}

// Skapa grupper
function createGroups(array, groupSize) {
    let groups = []
    let currentGroup = []

    for (let i = 0; i < array.length; i++) {
        currentGroup.push(array[i])

        if (currentGroup.length === groupSize) {
            groups.push(currentGroup)
            currentGroup = []
        }
    }

    if (currentGroup.length > 0) {
        groups.push(currentGroup)
    }

    return groups
}

// Skriv ut grupper
function printGroups(groups) {
    for (let i = 0; i < groups.length; i++) {
        console.log("Grupp " + (i + 1) + ":")

        for (let j = 0; j < groups[i].length; j++) {
            console.log("- " + groups[i][j])
        }

        console.log(" ")
    }
}

// Kör programmet
shuffle(students)

let groups = createGroups(students, 3)

printGroups(groups)

/*
groups.js:76 Grupp 1:
groups.js:76 - Therese Jonsson
groups.js:76 - Molly Dahl Lundell
groups.js:76 - Kevin Dalström
groups.js:79  
groups.js:73 Grupp 2:
groups.js:76 - Isa Forsberg
groups.js:76 - Kiarman Taklif
groups.js:76 - Fatima Kanbar
groups.js:79  
groups.js:73 Grupp 3:
groups.js:76 - Albin Dyrenäs
groups.js:76 - Alice Danielsson
groups.js:76 - Filip Norrman
groups.js:79  
groups.js:73 Grupp 4:
groups.js:76 - Dzemila Beslija
groups.js:76 - Daniel
groups.js:76 - Ashley Heather
groups.js:79  
groups.js:73 Grupp 5:
groups.js:76 - Andreas Henker
groups.js:76 - Kim Rundgren
groups.js:76 - Jeongsook Park
groups.js:79  
groups.js:73 Grupp 6:
groups.js:76 - Disa Johansson
groups.js:76 - Felix Hansson
groups.js:76 - Yvonne Claassen
groups.js:79  
groups.js:73 Grupp 7:
groups.js:76 - Setareh Adabi
groups.js:76 - Apelsina Ögren
groups.js:76 - Abdala Ali
groups.js:79  
groups.js:73 Grupp 8:
groups.js:76 - Diana Paragina
groups.js:76 - Tatiana Uzan
groups.js:76 - Alicia Holm
groups.js:79  
groups.js:73 Grupp 9:
groups.js:76 - Catherine Crépault Wibe
groups.js:76 - Zana Ibrahim
groups.js:76 - Oskar Calais
*/