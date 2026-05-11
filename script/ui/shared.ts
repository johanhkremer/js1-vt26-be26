export const renderLoadState = (container: HTMLElement): void => {
    container.innerHTML = "<p class='blue'>Din data laddas</p>"
}

export const renderError = (error: unknown, container: HTMLElement): void => {
    console.log("Something went wrong: ", error)

    const message = error instanceof Error ? error.message : "Okänt fel"

    container.innerHTML = `
        <p>Någonting gick fel: ${message}</p>
        `
    container.classList.add("red")
}
