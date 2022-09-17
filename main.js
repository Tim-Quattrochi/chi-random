const btn = document.querySelector('#btn')
const container = document.querySelector('.container')
const content = document.querySelector('#content')
const img = document.createElement("img")





function getRandomDog() {
    fetch('https://dog.ceo/api/breed/chihuahua/images/random')
        .then((res) => res.json())
        .then((data) => img.src = data.message)
}

function renderRandomDog() {
    container.append(img)
    img.id = "image"
    getRandomDog()



}

renderRandomDog()
btn.addEventListener('click', renderRandomDog)

