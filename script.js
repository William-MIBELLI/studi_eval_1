let contact_btn = document.getElementById('contact-btn')
let articles = document.querySelectorAll('.article')
let contact = document.getElementById('contact')
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