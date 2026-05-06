const box1 = document.getElementById("box1")
const box2 = document.getElementById("box2")
const boxes = document.getElementsByClassName("boxes")
const finnsinte = document.getElementById("finnsinte")

box1.textContent = "<p>hello world</p>"

box2.innerHTML = "<p>hello world</p>"

box1.addEventListener("mouseenter", () => {
    box1.classList.add("red")
})

// boxes.addEventListener("", () => {

// })

finnsinte.textContent = "hello world"

const async = async () => {
    try {
        const response = await fetch("API")

        if (!response.ok) {
            throw new Error("Någonting gick fel")
        }

        const data = response.json() //string json

        return data

        fulfilled
    } catch (error) {
        rejected
    }

    if (villkor) {

    } else { }
}

// ?code=malmö&stadel=hullie