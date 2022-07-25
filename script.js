let chantier = document.querySelectorAll('.chantier')
let burger = document.querySelector('.burger')
let menu = document.getElementsByTagName('nav')


chantier.forEach(item => {
    item.addEventListener('click', () => alert('Page en chantier, revenez bientôt ! :)'))
})


burger.addEventListener('click', () => {
    menu[0].style.display == 'none'? 'flex' : 'none'
    alert(menu)
})