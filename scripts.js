
const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicators = document.querySelector('.indicators')
let dots = indicators.querySelectorAll('ul li')
let list = container.querySelector('.list')
let section = document.querySelector('section')
let button1 = document.getElementById('saiba1')
const button2 = document.querySelector('saiba2')
const button3 = document.querySelector('saiba3')

let active = 0
let firstPosition = 0
let lastPosition = itens.length - 1

function setSlider(){
    section.classList.remove("bg1", "bg2", "bg3")
    section.classList.add(`bg${active + 1}`)

    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')

     let dotsOld = indicators.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicators.querySelector('.number').innerHTML = '0' + (active + 1)
};

nextButton.onclick = () => {
    list.style.setProperty('--calculation', 1)

    if (active + 1 > lastPosition) {
        active = 0
    }
    else{
        active = active + 1
    }
    setSlider()
    itens[active].classList.add('active')
};


prevButton.onclick = () => {
    list.style.setProperty('--calculation', -1)

    if (active - 1 < firstPosition) {
        active = lastPosition
    }
    else{
        active = active - 1
    }
    setSlider()
    itens[active].classList.add('active')
};

button1.addEventListener("click", () => {
    window.location.href = "./pages/saibaferrari.html"
});