let contact_btn = document.getElementById('contact-btn')
let articles = document.querySelectorAll('.article')
let contact = document.getElementById('contact')
let pic = document.querySelectorAll('.pic')
console.log(articles)

contact_btn.addEventListener('click' , () => {
    articles.forEach((item,key) => {
        // if(key%2==0){
        //     item.className = 'animateLeft'
        // }else{
        //     item.className = 'animateRight'
        // }
        item.style.display = 'none'
    })
    contact.style.display = 'flex'
})

pic.forEach(item => {
    item.addEventListener('click', (e) => {
        alert(e.target.className)
    })
})