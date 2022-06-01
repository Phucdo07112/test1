const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
const menuItem = document.querySelectorAll('.menu-item');
const activeClass = "is-show";
toggle.addEventListener('click',function() {
  menu.classList.add(activeClass);
})
menuItem.forEach((key, value) => {
    key.addEventListener('click',function() {
        menu.classList.remove(activeClass);
    })
})
// window.addEventListener('click', function(e){   
//   if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")){
//     menu.classList.remove(activeClass);
//   } 
// });