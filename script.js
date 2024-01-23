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

$(document).ready(function(){
    
    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:1
    })
  });
  
