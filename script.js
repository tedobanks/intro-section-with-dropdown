const mediaQuery = window.matchMedia('(max-width: 768px)')

const leading = document.querySelector(".leading br")
const description = document.querySelectorAll(".description br")
const navContainer = document.querySelector(".nav-container")
const menu = document.querySelector(".menu")
const firstDropdown = document.querySelector(".first-dropdown")
const secondDropdown = document.querySelector(".second-dropdown")

if (mediaQuery.matches) {
    if (leading) {
        leading.parentNode.removeChild(leading)
    }

    description.forEach((br) => {
        br.remove();
    })
}

mediaQuery.addEventListener('change', () => {
    if (leading) {
        leading.parentNode.removeChild(leading)
    }

    if (description) {
        description.parentNode.removeChild(description)
    }
})

menu.addEventListener('click', () => {
    let currentMenuState = menu.getAttribute('data-open')

    if (currentMenuState == 'false') {
        menu.setAttribute('data-open', 'true')
        navContainer.setAttribute('data-open', 'true')
    } else {
        menu.setAttribute('data-open', 'false')
        navContainer.setAttribute('data-open', 'false')
    }
})

firstDropdown.addEventListener('click', () => {
    let currentState = firstDropdown.getAttribute('data-open')

    if (currentState == 'false') {
        firstDropdown.setAttribute('data-open', 'true')
    }
    else {
        firstDropdown.setAttribute('data-open', 'false')
    }
})

secondDropdown.addEventListener('click', () => {
    let currentState = secondDropdown.getAttribute('data-open')

    if (currentState == 'false') {
        secondDropdown.setAttribute('data-open', 'true')
    }
    else {
        secondDropdown.setAttribute('data-open', 'false')
    }
})