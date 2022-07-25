let chantier = document.querySelectorAll('.chantier')
let burger = document.querySelector('.burger')
let menu = document.querySelector('.menu')


chantier.forEach(item => {
    item.addEventListener('click', () => alert('Page en chantier, revenez bientôt ! :)'))
})


burger.addEventListener('click', () => {
    menu.style.display = menu.style.display == 'flex'? 'none' : 'flex'
})
