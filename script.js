const nav = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 2) {
    nav.classList.add("navSticky");
  } else {
    nav.classList.remove("navSticky");
    nav.style.scrollBehavior = "smooth";
  }
});



$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    margin: 10,
    loop: true,
    autoWidth: true,
    items: 1,
    autoplay: true,
    autoplayTimeout: 3000,
    
    autoplayHoverPause: true,
  });
});

$('.counter').counterUp(
  {  
  }
);


const menuItem = document.querySelectorAll('.menuItem');

// console.log(menuItem);
menuItem.forEach(item=>{
  const menuBtn = item.querySelector('.menuBtn');
  const subMenu = item.querySelector('.subMenu');
  
    menuBtn.addEventListener('click',()=>{
      subMenu.classList.toggle('active')
      menuBtn.classList.toggle('active')
    })

})
