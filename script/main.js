const toggle = $('.menu-toggle');
const menu = $('.menu');
const menuItem = $('.menu-item');
const activeClass = "is-show";
toggle.click(function() {
  menu.addClass(activeClass);
});
menuItem.click(function(  ) {
  menu.removeClass(activeClass)
})