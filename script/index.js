const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")
const todoInputHelp = document.getElementById("todoInputHelp")

const todos = []

const createTodo = (text) => {
    return {
        id: crypto.randomUUID(),
        text: text,
        done: false,
        createdAt: new Date().toISOString()
    }
}

const createTodoLi = (todo) => {
    const todoLiText = document.createElement("span")
    todoLiText.textContent = todo.text

    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "mt-3", "d-flex", "justify-content-between", "align-items-center")

    if (todo.done) {
        todoLi.classList.toggle("bg-success-subtle")
    }

    todoLi.appendChild(todoLiText)

    return todoLi
}

// Skapar en delete-knapp som tar bort just den todo-rad den hör till.
const createButtonDelete = (todo) => {
    const buttonDelete = document.createElement("button")
    buttonDelete.textContent = "x"
    buttonDelete.classList.add("btn", "btn-danger", "btn-sm")

    buttonDelete.addEventListener("click", () => {
        todos = todos.filter((currentTodo) => currentTodo.id !== todo.id)
        renderApp()
    })

    return buttonDelete
}

// Skapar en knapp som markerar todo-raden som klar genom att växla klass.
const createButtonDone = (todo) => {
    const buttonDone = document.createElement("button")
    buttonDone.textContent = "Done"
    buttonDone.classList.add("btn", "btn-success", "btn-sm")

    buttonDone.addEventListener("click", () => {
        todo.done = !todo.done

        renderApp()
    })

    return buttonDone
}

// Skapar en wrapper så att knapparna kan ligga bredvid varandra.
const createButtonWrapper = () => {
    const buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-flex", "gap-2")

    return buttonWrapper
}

// Bygger ihop en komplett todo-rad med text, delete-knapp och done-knapp.
const createLiElement = (todo) => {
    const todoLi = createTodoLi(todo)

    const buttonWrapper = createButtonWrapper()
    const buttonDelete = createButtonDelete(todo)
    const buttonDone = createButtonDone(todo)

    buttonWrapper.appendChild(buttonDelete)
    buttonWrapper.appendChild(buttonDone)
    todoLi.appendChild(buttonWrapper)

    return todoLi
}

const renderTodoListView = () => {
    todoList.innerHTML = ""

    todos.forEach((todo) => {
        const todoElement = createLiElement(todo)

        todoList.appendChild(todoElement)
    })
}

const renderApp = () => {
    renderTodoListView()
}

// När formuläret skickas skapas en ny todo som läggs till i listan.
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = todoInput.value.trim()

    // const todoLi = createLiElement(text)

    const newTodo = createTodo(text)

    todos.push(newTodo)

    console.log(todos)

    renderApp()

    todoInput.value = ""
    todoInput.focus()
})

/*
? event.preventDefault()

Ett formulär försöker som standard skicka data och ladda om sidan.
Eftersom vi vill hantera formuläret själva med JavaScript
stoppar vi det vanliga beteendet med preventDefault().
Annars hinner sidan laddas om innan vi kan jobba vidare med värdet.
*/


