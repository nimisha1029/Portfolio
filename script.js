
document.querySelectorAll('nav a').forEach(link =>{
    link.addEventListener('click' , function(e) {
        e.preventdefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behaviour : 'smooth'
        })
    })
})