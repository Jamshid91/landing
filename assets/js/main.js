
let openMenu = document.querySelector('.menu_burger');
let closeMenu = document.querySelector('.mobile_menu_closeBtn');
let mobileMenu = document.querySelector('.mobile_menu');
let mobileTableList = document.querySelector('.mobile_table_item_list');
let userFile = document.getElementById('userFile');
let openList = document.querySelectorAll('.services_list img');

// open mobile menu
openMenu.addEventListener('click', () => {
    mobileMenu.classList.add('hideMenu')
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('hideMenu')
});

// add user file
userFile.addEventListener('change', (e) => {
    let label = userFile.parentElement.parentElement.children[2],
     checkIcon = userFile.parentElement.parentElement.children[1],
     img = userFile.parentElement.parentElement.children[0];
    label.innerText = 'Файл загрузил';
    label.style.color = '#61BF1A';
    checkIcon.style.display = 'inline-block';
    img.style.display = 'none';
  });

   
  openList.forEach(list => {
    list.addEventListener('click', () => {
      list.parentElement.classList.toggle('openList');
      list.parentElement.children[0].classList.toggle('removeMargin');
      list.classList.toggle('rotateBtn');
    })
  })



  $(document).ready(function() {
    $(".phone").mask("+7 (999) 99-99-999");
  })




// let docItem = document.querySelectorAll('.doc_list');
// let hoverDoc = document.querySelector('.doc_list .hover');
// let zoomDocImg = document.querySelector('.zoom_doc_img img');
// let closeZoomDoc = document.querySelector('.zoom_doc_img i');
// let zoomDoc = document.querySelector('.zoom_doc_img');
// let body = document.body

// function disabledScroll() {
//   body.scrollTo(0, 0)
// }

// docItem.forEach(doc => {

//   doc.addEventListener('click', () => {
//     zoomDoc.style.display = 'flex'
//     zoomDocImg.src = doc.children[0].src
//   })
//   disabledScroll()
// });


// closeZoomDoc.addEventListener('click', () => {
//   zoomDoc.style.display = 'none'
// })