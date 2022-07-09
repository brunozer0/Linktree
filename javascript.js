let button = document.querySelector('.button')
let body = document.querySelector('body')
button.addEventListener('click', () => {
    button.classList.toggle('dark-blue')
    body.classList.toggle('dark-blue')
}) 