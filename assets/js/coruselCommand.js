let position = 0;
const coruselToShowCom = 3;
const coruselToScrollCom = 1;
const containerCom = document.querySelector('.our_team_container');
const trackCom = document.querySelector('.our_team_item');
const btnPrevCom = document.querySelector('.prevBtn');
const btnNextCom = document.querySelector('.nextBtn');
const comItems = document.querySelectorAll('.our_team_list')
const itemCountCom = comItems.length;
const itemWidthCom = containerCom.clientWidth / coruselToShowCom;
const movePositionCom = coruselToScrollCom * itemWidthCom;

comItems.forEach(item => {
    item.style.minWidth = `${itemWidthCom}px`
})

btnNextCom.addEventListener('click', function() {
    const itemLeft = itemCountCom - (Math.abs(position) + coruselToShowCom * itemWidthCom) / itemWidthCom;

    position -= itemLeft >= coruselToScrollCom ? movePositionCom : itemLeft * itemWidthCom;

    setPositionCom();
    checkBtnsCom();
});

btnPrevCom.addEventListener('click', function() {
    const itemLeft = Math.abs(position) / itemWidthCom;

    position += itemLeft >= coruselToScrollCom ? movePositionCom : itemLeft * itemWidthCom;

    setPositionCom();
    checkBtnsCom();

});

const setPositionCom = () => {
    trackCom.style.transform = `translateX(${position}px)`
};

const checkBtnsCom = () => {
    //  = position === 0;
    if (position === 0) {
        btnPrevCom.disabled
        btnPrevCom.style.opacity = '.2'
    } else {
        btnPrevCom.style.opacity = '1'
    }

    if(position <= -(itemCountCom - coruselToShowCom) * itemWidthCom) {
        btnNextCom.disabled
        btnNextCom.style.opacity = '.2'
    } else {
        btnNextCom.style.opacity = '1'
    }
}

    checkBtnsCom();

    if (window.matchMedia("(max-width: 992px)").matches) {
        let position = 0;
        const coruselToShowCom = 2;
        const coruselToScrollCom = 1;
        const containerCom = document.querySelector('.our_team_container');
        const trackCom = document.querySelector('.our_team_item');
        const btnPrevCom = document.querySelector('.prevBtn');
        const btnNextCom = document.querySelector('.nextBtn');
        const comItems = document.querySelectorAll('.our_team_list')
        const itemCountCom = comItems.length;
        const itemWidthCom = containerCom.clientWidth / coruselToShowCom;
        const movePositionCom = coruselToScrollCom * itemWidthCom;
        
        comItems.forEach(item => {
            item.style.minWidth = `${itemWidthCom}px`
        })
        
        btnNextCom.addEventListener('click', function() {
            const itemLeft = itemCountCom - (Math.abs(position) + coruselToShowCom * itemWidthCom) / itemWidthCom;
        
            position -= itemLeft >= coruselToScrollCom ? movePositionCom : itemLeft * itemWidthCom;
        
            setPositionCom();
            checkBtnsCom();
        });
        
        btnPrevCom.addEventListener('click', function() {
            const itemLeft = Math.abs(position) / itemWidthCom;
        
            position += itemLeft >= coruselToScrollCom ? movePositionCom : itemLeft * itemWidthCom;
        
            setPositionCom();
            checkBtnsCom();
        
        });
        
        const setPositionCom = () => {
            trackCom.style.transform = `translateX(${position}px)`
        };
        
        const checkBtnsCom = () => {
            //  = position === 0;
            if (position === 0) {
                btnPrevCom.disabled
                btnPrevCom.style.opacity = '.2'
            } else {
                btnPrevCom.style.opacity = '1'
            }
        
            if(position <= -(itemCountCom - coruselToShowCom) * itemWidthCom) {
                btnNextCom.disabled
                btnNextCom.style.opacity = '.2'
            } else {
                btnNextCom.style.opacity = '1'
            }
        }
        
            checkBtnsCom();
    }

    if (window.matchMedia("(max-width: 576px)").matches) {
        let position = 0;
        const coruselToShowCom = 1;
        const coruselToScrollCom = 1;
        const containerCom = document.querySelector('.our_team_container');
        const trackCom = document.querySelector('.our_team_item');
        const btnPrevCom = document.querySelector('.prevBtn');
        const btnNextCom = document.querySelector('.nextBtn');
        const comItems = document.querySelectorAll('.our_team_list')
        const itemCountCom = comItems.length;
        const itemWidthCom = containerCom.clientWidth / coruselToShowCom;
        const movePositionCom = coruselToScrollCom * itemWidthCom;
        
        comItems.forEach(item => {
            item.style.minWidth = `${itemWidthCom}px`
        })
        
        btnNextCom.addEventListener('click', function() {
            const itemLeft = itemCountCom - (Math.abs(position) + coruselToShowCom * itemWidthCom) / itemWidthCom;
        
            position -= itemLeft >= coruselToScrollCom ? movePositionCom : itemLeft * itemWidthCom;
        
            setPositionCom();
            checkBtnsCom();
        });
        
        btnPrevCom.addEventListener('click', function() {
            const itemLeft = Math.abs(position) / itemWidthCom;
        
            position += itemLeft >= coruselToScrollCom ? movePositionCom : itemLeft * itemWidthCom;
        
            setPositionCom();
            checkBtnsCom();
        
        });
        
        const setPositionCom = () => {
            trackCom.style.transform = `translateX(${position}px)`
        };
        
        const checkBtnsCom = () => {
            //  = position === 0;
            if (position === 0) {
                btnPrevCom.disabled
                btnPrevCom.style.opacity = '.2'
            } else {
                btnPrevCom.style.opacity = '1'
            }
        
            if(position <= -(itemCountCom - coruselToShowCom) * itemWidthCom) {
                btnNextCom.disabled
                btnNextCom.style.opacity = '.2'
            } else {
                btnNextCom.style.opacity = '1'
            }
        }
        
            checkBtnsCom();
    }