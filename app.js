const catResult = document.getElementById('catResult')
const dogResult = document.getElementById("dogResult")

const cat_btn = document.getElementById('cat_btn')
const dog_btn = document.getElementById('dog_btn')


cat_btn.addEventListener("click", getRandomCat)
dog_btn.addEventListener("click", getRandomDog)

function getRandomCat() {
    fetch('https://aws.random.cat/meow')
        .then(response=> response.json())
        .then(data=> {
            catResult.innerHTML = `<img src="${data.file}"/>`
        })
}

function getRandomDog() {
    fetch("https://random.dog/woof.json")
        .then(response=> response.json())
        .then(data=> {
            dogResult.innerHTML = `<img src='${data.url}'/>`

        })
}

