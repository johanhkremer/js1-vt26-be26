const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")
const todoInputHelp = document.getElementById("todoInputHelp")

// Skapar själva todo-raden och lägger in texten användaren skrev.
const createTodo = (text) => {
    const todoLiText = document.createElement("span")
    todoLiText.textContent = text

    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "mt-3", "d-flex", "justify-content-between", "align-items-center")

    todoLi.appendChild(todoLiText)

    return todoLi
}

// Skapar en delete-knapp som tar bort just den todo-rad den hör till.
const createButtonDelete = (todoLi) => {
    const buttonDelete = document.createElement("button")
    buttonDelete.textContent = "x"
    buttonDelete.classList.add("btn", "btn-danger", "btn-sm")

    buttonDelete.addEventListener("click", () => {
        todoLi.remove()
    })

    return buttonDelete
}

// Skapar en knapp som markerar todo-raden som klar genom att växla klass.
const createButtonDone = (todoLi) => {
    const buttonDone = document.createElement("button")
    buttonDone.textContent = "Done"
    buttonDone.classList.add("btn", "btn-success", "btn-sm")

    buttonDone.addEventListener("click", () => {
        todoLi.classList.toggle("bg-success-subtle")
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
const createLiElement = (text) => {
    const todoLi = createTodo(text)

    const buttonWrapper = createButtonWrapper()

    const buttonDelete = createButtonDelete(todoLi)

    const buttonDone = createButtonDone(todoLi)

    buttonWrapper.appendChild(buttonDelete)
    buttonWrapper.appendChild(buttonDone)
    todoLi.appendChild(buttonWrapper)

    return todoLi
}

// När formuläret skickas skapas en ny todo som läggs till i listan.
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = todoInput.value.trim()

    const todoLi = createLiElement(text)

    todoList.appendChild(todoLi)

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
