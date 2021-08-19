
let openMenu = document.querySelector('.menu_burger');
let closeMenu = document.querySelector('.mobile_menu_closeBtn');
let mobileMenu = document.querySelector('.mobile_menu');
let mobileTableList = document.querySelector('.mobile_table_item_list');
let openList = document.querySelectorAll('.services_list img');

// open mobile menu
openMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hideMenu')
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('hideMenu')
});


   
  openList.forEach(list => {
    list.addEventListener('click', () => {
      list.parentElement.classList.toggle('openList');
      list.parentElement.children[0].classList.toggle('removeMargin');
      list.classList.toggle('rotateBtn');
    })
  })


// mask phone
  $(document).ready(function() {
    $(".phone").mask("+7 (999) 99-99-999");
  });

  // counter num

  $('.counter_num').counterUp({
    delay: 10,
    time: 1000
  });
