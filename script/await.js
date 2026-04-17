/*
async/await används för att hantera asynkron kod på ett sätt som ser mer synkront och lättläst ut.

- async gör att en funktion alltid returnerar ett Promise
- await pausar koden tills ett Promise är klart
- det gör koden enklare att läsa än .then()

Exempel:
const getData = async () => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}

Kort sagt:
async = funktionen hanterar asynkron kod
await = vänta på att något ska bli klart
*/

const ramenContainer = document.getElementById("ramen")
const todosContainer = document.getElementById("todos")

//Create Promise
const waitForRamen = () => {
    return new Promise((resolve, rejected) => {
        const hasNoodles = true

        if (hasNoodles) {
            setTimeout(() => {
                resolve("🍜")
            }, 2000)
        } else {
            rejected("🛑 No noodles left")
        }
    })
}

//Recieve Promise
const makeRamen = async () => {
    // if/else = för vanliga beslut i logiken
    // try/catch = för felhantering

    try {
        console.log("Making ramen")
        const ramen = await waitForRamen()
        console.log(`Eat ${ramen}`)

        ramenContainer.innerHTML = `<h2>Eat ${ramen}</h2>`

        return ramen

    } catch (error) {
        console.log("Somthing went wrong: ", error)
    }
}

// makeRamen()
//-----------------------------------------

let todos

const getTodos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/")

    const data = await response.json()

    console.log(data)

    todos = data

    renderTodos()
}

const renderTodos = () => {
    const todosList = todos.map((todo) => {
        return `<p>${todo.id} ${todo.title}</p>`
    }).join("")

    todosContainer.innerHTML = todosList
}

getTodos()


//-----------------------------------------

//Steps

const step1 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 1 klart")
            resolve()
        }, 2500)
    })
}

const step2 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 2 klart")
            resolve()
        }, 500)
    })
}

const step3 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 3 klart")
            resolve()
        }, 2000)
    })
}

const step4 = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Steg 4 klart")
            resolve()
        }, 500)
    })
}

const runSteps = async () => {
    await step4()
    await step3()
    await step2()
    await step1()
    console.log("Alla steg klara")
}

// runSteps()