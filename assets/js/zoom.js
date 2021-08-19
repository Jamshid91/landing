let documentLists = document.querySelectorAll('.doc_list');
let zoomImg = document.querySelector('.zoom_document_img');
let closezoom = document.querySelector('.close_zom_btn');
let zoom = document.querySelector('.zoom');
let body = document.body


documentLists.forEach(doc => {
    doc.addEventListener('click', () => {
        zoom.style.display = 'flex'

        zoomImg.src = doc.children[0].src
    });
});

closezoom.addEventListener('click', () => {
    zoom.style.display = 'none'
})