
document.querySelectorAll('nav a').forEach(link =>{
    link.addEventListener('click' , function(e) {
        e.preventdefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behaviour : 'smooth'
        })
    })
})

particlesJS("particles-js", {
  particles: {
    number: {
      value: 80
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});
