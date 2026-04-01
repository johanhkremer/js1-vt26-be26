const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")
const todoInputHelp = document.getElementById("todoInputHelp")
const todoListView = document.getElementById("todoListView")
const todoDetailView = document.getElementById("todoDetailView")
const numberOfTodos = document.getElementById("numberOfTodos")

// Arrayen där alla todo-objekt sparas medan appen körs.
let todos = []

// Sparar id:t för den todo som just nu är vald.
// Om värdet är `null` betyder det att ingen todo är vald och att listvyn ska visas.
let selectedTodoId = null

// Skapar ett nytt todo-objekt från texten användaren skriver in.
// Varje todo får ett unikt id, en text, en status och ett datum när den skapades.
const createTodo = (text) => {
    return {
        id: crypto.randomUUID(),
        text: text,
        done: false,
        createdAt: new Date().toISOString()
    }
}

// Sparar hela todo-listan i webbläsarens localStorage.
// Vi gör om arrayen till en textsträng med JSON så att den kan sparas mellan sidladdningar.
const saveTodosToLocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
}

// Läser in sparade todos från localStorage när appen startar.
// Om det finns sparad data omvandlas den tillbaka till en vanlig JavaScript-array.
const loadTodosFromLocalStorage = () => {
    const storedTodos = localStorage.getItem("todos")

    if (storedTodos) {
        todos = JSON.parse(storedTodos)
    }
}

// Hämtar den todo som just nu är vald i detaljvyn.
// Vi letar i arrayen efter det objekt vars id matchar `selectedTodoId`.
const getSelectedTodo = () => {
    return todos.find((todo) => todo.id === selectedTodoId)
}

// Bygger ett list-element (`li`) för en todo i listvyn.
// Här skapas texten, klick på texten öppnar detaljvyn,
// och raden får en grön bakgrund om todo är klar.
const createTodoLi = (todo) => {
    const todoLiText = document.createElement("span")
    todoLiText.textContent = todo.text

    todoLiText.addEventListener("click", () => {
        selectedTodoId = todo.id

        renderApp()
    })

    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "mt-3", "d-flex", "justify-content-between", "align-items-center")

    if (todo.done) {
        todoLi.classList.toggle("bg-success-subtle")
    }

    todoLi.appendChild(todoLiText)

    return todoLi
}

// Visar hur många todos som finns just nu.
// Texten uppdateras varje gång appen renderas om.
const renderNumberOfTodos = () => {
    numberOfTodos.textContent = todos.length
}

// Skapar kortet som visas i detaljvyn för en vald todo.
// Kortet visar titel, status och när uppgiften skapades.
const createTodoDetailCard = (todo) => {
    const todoDetailCard = document.createElement("div")
    todoDetailCard.classList.add("p-3", "border", "rounded", "mt-3")

    if (todo.done) {
        todoDetailCard.classList.add("bg-success-subtle")
    }

    const todoTitle = document.createElement("h2")
    todoTitle.textContent = todo.text

    const todoStatus = document.createElement("p")
    todoStatus.textContent = todo.done ? "Status: Klar ✅" : "Status: Inte klar 🛑"

    const todoCreatedAt = document.createElement("p")
    todoCreatedAt.textContent = `Skapad: ${new Date(todo.createdAt).toLocaleString("sv-SE")}`

    todoDetailCard.appendChild(todoTitle)
    todoDetailCard.appendChild(todoStatus)
    todoDetailCard.appendChild(todoCreatedAt)

    return todoDetailCard
}

// Skapar delete-knappen för en specifik todo.
// När man klickar filtreras den valda todo:n bort från arrayen,
// sedan nollställs detaljvyn och appen ritas om.
const createButtonDelete = (todo) => {
    const buttonDelete = document.createElement("button")
    buttonDelete.textContent = "x"
    buttonDelete.classList.add("btn", "btn-danger", "btn-sm")


    buttonDelete.addEventListener("click", () => {
        todos = todos.filter((currentTodo) => currentTodo.id !== todo.id)
        selectedTodoId = null
        saveTodosToLocalStorage()
        renderApp()
    })

    return buttonDelete
}

// Skapar en knapp som växlar om en todo är klar eller inte.
// Vi ändrar `done` till motsatt värde och uppdaterar sedan vyn.
const createButtonDone = (todo) => {
    const buttonDone = document.createElement("button")
    buttonDone.textContent = "Done"
    buttonDone.classList.add("btn", "btn-success", "btn-sm")

    buttonDone.addEventListener("click", () => {
        todo.done = !todo.done
        saveTodosToLocalStorage()
        renderApp()
    })

    return buttonDone
}

// Skapar en knapp för att gå tillbaka från detaljvyn till listvyn.
// Den tar bort valet av todo och renderar sedan appen på nytt.
const createBackButton = () => {
    const backButton = document.createElement("button")
    backButton.textContent = "Back to list"
    backButton.classList.add("btn", "btn-secondary", "mb-3", "mt-3")

    backButton.addEventListener("click", () => {
        selectedTodoId = null
        renderApp()
    })

    return backButton
}


// Skapar en behållare för knapparna.
// Den används för att visa delete- och done-knappen bredvid varandra.
const createButtonWrapper = () => {
    const buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-flex", "gap-2")

    return buttonWrapper
}

// Bygger ihop en komplett rad i todo-listan.
// Funktionen använder flera mindre hjälpfunktioner och returnerar ett färdigt `li`.
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

// Renderar listvyn.
// Den visar listsektionen, gömmer detaljsektionen och bygger upp listan från `todos`.
const renderTodoListView = () => {
    todoListView.classList.remove("d-none")
    todoDetailView.classList.add("d-none")
    todoList.innerHTML = ""

    todos.forEach((todo) => {
        const todoElement = createLiElement(todo)

        todoList.appendChild(todoElement)
    })
}

// Renderar detaljvyn för den todo som är vald.
// Först hämtas rätt todo, sedan visas ett detaljkort och en tillbaka-knapp.
const renderTodoDetailView = () => {
    const selectedTodo = getSelectedTodo()

    todoDetailView.classList.remove("d-none")
    todoListView.classList.add("d-none")
    todoDetailView.innerHTML = ""

    const todoDetailCard = createTodoDetailCard(selectedTodo)

    const backButton = createBackButton()

    todoDetailView.appendChild(todoDetailCard)
    todoDetailView.appendChild(backButton)
}

// Bestämmer vilken vy som ska visas.
// Om ingen todo är vald visas listan, annars visas detaljvyn.
const renderApp = () => {
    renderNumberOfTodos()

    if (selectedTodoId === null) {
        renderTodoListView()
    } else {
        renderTodoDetailView()
    }
}

// Körs när formuläret skickas.
// Den läser texten från inputfältet, skapar en ny todo,
// lägger till den i arrayen, uppdaterar sidan och återställer inputfältet.
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = todoInput.value.trim()

    const newTodo = createTodo(text)

    todos.push(newTodo)

    saveTodosToLocalStorage()
    renderApp()

    todoInput.value = ""
    todoInput.focus()
})

// När sidan laddas in hämtar vi först tidigare sparade todos
// och ritar sedan upp appen med det aktuella innehållet.
loadTodosFromLocalStorage()
renderApp()

/*
? event.preventDefault()

Ett formulär försöker som standard skicka data och ladda om sidan.
Eftersom vi vill hantera formuläret själva med JavaScript
stoppar vi det vanliga beteendet med preventDefault().
Annars hinner sidan laddas om innan vi kan jobba vidare med värdet.
*/
