const toggle = $('.menu-toggle');
const menu = $('.menu');
const menuItem = $('.menu-item');
const activeClass = "is-show";
const menuLinks = document.querySelectorAll('.menu-link');
const header = $(".header")

window.addEventListener("scroll", () => {
  activeLink()
})
toggle.click(function() {
  menu.addClass(activeClass);
});
menuItem.click(function(  ) {
  menu.removeClass(activeClass)
})

// active link
function activeLink() {
  let sections = $("section[id]");
  let passedSections = Array.from(sections).map((sct, i) => {
    return {
      y: sct.getBoundingClientRect().top - header.outerHeight(),
      id: i
    };
  }).filter(sct => sct.y <= 0)
  let currSectionID = passedSections.at(-1).id;
  menuLinks.forEach(l => l.classList.remove("active"));
  menuLinks[currSectionID].classList.add("active")
}

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})