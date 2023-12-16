const buttonWidth = "120px"

const buttonsContainer = document.createElement("div")
document.body.prepend(buttonsContainer)
buttonsContainer.style.width = "400px"
buttonsContainer.style.display = "flex"
buttonsContainer.style.justifyContent = "center"

const buttonRight = document.createElement("button")
buttonsContainer.prepend(buttonRight)
buttonRight.textContent = "Вправо"
buttonRight.style.width = buttonWidth
buttonRight.style.height = "50px"


const buttonLeft = document.createElement("button")
buttonsContainer.prepend(buttonLeft)
buttonLeft.textContent = "Влево"
buttonLeft.style.marginRight = "15px"
buttonLeft.style.width = buttonWidth





const images = [
    "snowforest.jpg",
    "ship.jpg",
    "эрмитаж.jpg",
    "baikal.jpg",
    "monkey.jpg",
    "forest.jpg",
    "leopard.jpg",
]

const img = document.createElement("img")
document.body.prepend(img)
img.setAttribute("src", `${images[images.length - 1]}`)
img.style.width = "400px"
img.style.height = "285px"
img.style.marginBottom = "25px"

let slide = 0
function switchRight() {
    if (slide === images.length) {
        slide = 0
    }
    img.setAttribute("src", `${images[slide++]}`)
}

function switchLeft() {
    if (slide === 0) {
        slide = images.length-1
    }
    img.setAttribute("src", `${images[slide--]}`)
}

buttonRight.addEventListener("click", switchRight)
buttonLeft.addEventListener("click", switchLeft)

document.body.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        switchRight()
    }
})
document.body.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        switchLeft()
    }
})

const inputSrc = document.createElement("input")
document.body.prepend(inputSrc)
inputSrc.style.display = "block"
inputSrc.style.marginBottom = "15px"

inputSrc.setAttribute("placeholder", `введите значение от 0 до ${images.length - 1}`)
inputSrc.style.width = "400px"
inputSrc.style.border = "none"
inputSrc.style.outline = "2px solid green"
inputSrc.style.fontSize = "30px"

const title = document.createElement("h1")
title.textContent = "Переключай картинки!"
document.body.prepend(title)

inputSrc.addEventListener("keydown", (event) => {
    //  console.log(event)
    const inputValue = inputSrc.value
    if (event.key === "Enter" && inputValue && !isNaN(inputValue)) {
        console.log(inputValue - Math.trunc(inputValue))
        if (inputValue >= 0 && inputValue < images.length && !(inputValue - Math.trunc(inputValue))) {
            img.setAttribute("src", images[+inputValue])
        }
    }
})