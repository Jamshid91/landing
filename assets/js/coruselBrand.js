 // Corusel
 if (window.matchMedia("(min-width: 1024px)").matches) {
    let position = 0;
    const coruselToShow = 5;
    const coruselToScroll = 1;
    const container = document.querySelector('.trustUs_carousel');
    const track = document.querySelector('.trustUs_carousel_item');
    // const item = document.querySelector('.trustUs_corusel_list');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const items = document.querySelectorAll('.trustUs_corusel_list')
    const itemCount = items.length;
    const itemWidth = container.clientWidth / coruselToShow;
    const movePosition = coruselToScroll * itemWidth;
    
    items.forEach(item => {
        item.style.minWidth = `${itemWidth}px`
    })
    
    btnNext.addEventListener('click', function() {
        const itemLeft = itemCount - (Math.abs(position) + coruselToShow * itemWidth) / itemWidth;
    
        position -= itemLeft >= coruselToScroll ? movePosition : itemLeft * itemWidth;
    
        setPosition();
        checkBtns();
    });
    
    btnPrev.addEventListener('click', function() {
        const itemLeft = Math.abs(position) / itemWidth;
    
        position += itemLeft >= coruselToScroll ? movePosition : itemLeft * itemWidth;
    
        setPosition();
        checkBtns();
        
    });
    
    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`
    };
    
    const checkBtns = () => {
        //  = position === 0;
        if (position === 0) {
            btnPrev.disabled
            btnPrev.style.opacity = '.2'
        } else {
            btnPrev.style.opacity = '1'
        }
    
        if(position <= -(itemCount - coruselToShow) * itemWidth) {
            btnNext.disabled
            btnNext.style.opacity = '.2'
        } else {
            btnNext.style.opacity = '1'
        }
    }
    
        checkBtns();
      }   
      
      if (window.matchMedia("(max-width: 992px)").matches) {
        let position = 0;
    const coruselToShow = 3;
    const coruselToScroll = 1;
    const container = document.querySelector('.trustUs_carousel');
    const track = document.querySelector('.trustUs_carousel_item');
    // const item = document.querySelector('.trustUs_corusel_list');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const items = document.querySelectorAll('.trustUs_corusel_list')
    const itemCount = items.length;
    const itemWidth = container.clientWidth / coruselToShow;
    const movePosition = coruselToScroll * itemWidth;
    
    items.forEach(item => {
        item.style.minWidth = `${itemWidth}px`
    })
    
    btnNext.addEventListener('click', function() {
        const itemLeft = itemCount - (Math.abs(position) + coruselToShow * itemWidth) / itemWidth;
    
        position -= itemLeft >= coruselToScroll ? movePosition : itemLeft * itemWidth;
    
        setPosition();
        checkBtns();
    });
    
    btnPrev.addEventListener('click', function() {
        const itemLeft = Math.abs(position) / itemWidth;
    
        position += itemLeft >= coruselToScroll ? movePosition : itemLeft * itemWidth;
    
        setPosition();
        checkBtns();
        
    });
    
    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`
    };
    
    const checkBtns = () => {
        if (position === 0) {
            btnPrev.disabled
            btnPrev.style.opacity = '.2'
        } else {
            btnPrev.style.opacity = '1'
        }
    
        if(position <= -(itemCount - coruselToShow) * itemWidth) {
            btnNext.disabled
            btnNext.style.opacity = '.2'
        } else {
            btnNext.style.opacity = '1'
        }
    }
        checkBtns();
    }
    
    if (window.matchMedia("(max-width: 576px)").matches) {
        let position = 0;
    const coruselToShow = 2;
    const coruselToScroll = 2;
    const container = document.querySelector('.trustUs_carousel');
    const track = document.querySelector('.trustUs_carousel_item');
    // const item = document.querySelector('.trustUs_corusel_list');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');
    const items = document.querySelectorAll('.trustUs_corusel_list')
    const itemCount = items.length;
    const itemWidth = container.clientWidth / coruselToShow;
    const movePosition = coruselToScroll * itemWidth;
    
    items.forEach(item => {
        item.style.minWidth = `${itemWidth}px`
    })
    
    btnNext.addEventListener('click', function() {
        const itemLeft = itemCount - (Math.abs(position) + coruselToShow * itemWidth) / itemWidth;
    
        position -= itemLeft >= coruselToScroll ? movePosition : itemLeft * itemWidth;
    
        setPosition();
        checkBtns();
    });
    
    btnPrev.addEventListener('click', function() {
        const itemLeft = Math.abs(position) / itemWidth;
    
        position += itemLeft >= coruselToScroll ? movePosition : itemLeft * itemWidth;
    
        setPosition();
        checkBtns();
        
    });
    
    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`
    };
    
    const checkBtns = () => {
        //  = position === 0;
        if (position === 0) {
            btnPrev.disabled
            btnPrev.style.opacity = '.2'
        } else {
            btnPrev.style.opacity = '1'
        }
    
        if(position <= -(itemCount - coruselToShow) * itemWidth) {
            btnNext.disabled
            btnNext.style.opacity = '.2'
        } else {
            btnNext.style.opacity = '1'
        }
    }
        checkBtns();
    
    
    }