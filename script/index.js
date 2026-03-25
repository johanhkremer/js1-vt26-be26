const button = document.getElementById("button")
const countText = document.getElementById("countText")
const colorButton = document.getElementById("colorButton")
const colorBox = document.getElementById("colorBox")

let count = 0

button.addEventListener("click", () => {
    count++
    console.log(count)
    countText.textContent = `Antal klick: ${count}`
})

// colorButton.addEventListener("click", () => {
//     if (colorBox.classList.contains("red")) {
//         colorBox.classList.remove("red")
//         colorBox.classList.add("blue")
//     } else {
//         colorBox.classList.remove("blue")
//         colorBox.classList.add("red")
//     }

//     // colorBox.classList.toggle("red")
//     // colorBox.classList.toggle("blue")

// })

const colors = ["red", "green", "blue", "lilac"]
let index = 0

colorButton.addEventListener("click", () => {
    colorBox.classList.remove("red", "green", "blue", "lilac")

    index++

    if (index >= colors.length) {
        index = 0
    }

    colorBox.classList.add(colors[index])
    console.log(colors[index])
    console.log(index)
})