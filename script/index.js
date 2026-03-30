const todoForm = document.getElementById("todoForm")
const todoInput = document.getElementById("todoInput")
const todoList = document.getElementById("todoList")

todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const text = todoInput.value

    console.log(text)

    /* List Item Text */
    const todoLiText = document.createElement("span")
    todoLiText.textContent = text

    /* Buttons */
    const buttonWrapper = document.createElement("div")
    buttonWrapper.classList.add("d-flex", "gap-2")

    const buttonDelete = document.createElement("button")
    buttonDelete.textContent = "x"
    buttonDelete.classList.add("btn", "btn-danger", "btn-sm")

    buttonDelete.addEventListener("click", () => {
        todoLi.remove()
    })

    const buttonDone = document.createElement("button")
    buttonDone.textContent = "Done"
    buttonDone.classList.add("btn", "btn-success", "btn-sm")

    /* List item */
    const todoLi = document.createElement("li")
    todoLi.classList.add("list-group-item", "mt-3", "d-flex", "justify-content-between", "align-items-center")

    buttonWrapper.appendChild(buttonDelete)
    buttonWrapper.appendChild(buttonDone)
    todoLi.appendChild(todoLiText)
    todoLi.appendChild(buttonWrapper)
    todoList.appendChild(todoLi)

})