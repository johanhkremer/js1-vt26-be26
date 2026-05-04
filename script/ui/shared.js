export const renderLoadstate = (container) => {
    container.innerHTML = "<p class='blue'>Din data laddas</p>"
}

export const renderError = (error, container) => {
    console.log("Something went wrong: ", error)
    container.innerHTML = `
        <p>Någontin gick fel: ${error.message}</p>
        `
    container.classList.add("red")
}