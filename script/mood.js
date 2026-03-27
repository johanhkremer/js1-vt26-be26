const buttonHappy = document.getElementById("button-happy")
const buttonAngry = document.getElementById("button-angry")
const buttonCalm = document.getElementById("button-calm")
const moodBox = document.getElementById("mood-box")
const moodBoxText = document.getElementById("mood-box-text")
const buttonReset = document.getElementById("button-reset")
const previousMoodText = document.getElementById("previous-mood-text")

let currentMood = ""

const setMood = (color, text) => {
    const previousMood = currentMood
    currentMood = text
    moodBox.classList.remove("green", "red", "violet")
    moodBox.classList.add(color)
    moodBoxText.textContent = text
    previousMoodText.textContent = `Previous mood: ${previousMood}`
}

buttonHappy.addEventListener("click", () => {
    setMood("green", "Happy 😀")
})

buttonAngry.addEventListener("click", () => {
    setMood("red", "Angry 😡")
})

buttonCalm.addEventListener("click", () => {
    setMood("violet", "Calm 😌")
})

buttonReset.addEventListener("click", () => {
    moodBox.classList.remove("red", "green", "violet")
    moodBoxText.textContent = ""
    previousMoodText.textContent = ""
})