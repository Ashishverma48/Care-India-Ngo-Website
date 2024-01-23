const nav = document.getElementById('navbar')

window.addEventListener('scroll', ()=>{
    if (window.scrollY > 2){
        nav.classList.add('navSticky')
    }
    else{
        nav.classList.remove('navSticky')
        nav.style.scrollBehavior = 'smooth'
    }
})
