const arrows = document.querySelectorAll('.how__item-arrow'),
    howText = document.querySelectorAll('.how__item-text'),
    howItems = document.querySelectorAll('.how__item'),
    tabs = document.querySelectorAll('.feat__tabs-tab'),
    tabsBtn = document.querySelectorAll('.feat__tabs-nav li a');

console.log(tabs);

arrows.forEach((arrow, i) => {
    arrow.addEventListener('click', (e) => {
        if (howItems[i].clientHeight == 70) {
            howItems[i].style.height = (70 + howText[i].clientHeight) + 'px';
        } else {
            howItems[i].style.height = '70px';
        }

        arrows[i].classList.toggle('active');
        howText[i].classList.toggle('open');
        console.log(howItems[i].clientHeight);
    });
});


const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    centeredSlides: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.clients__slider-next',
        prevEl: '.clients__slider-prev',
    },
});

function hideTabContent() {
    tabs.forEach(tab => {
        tab.classList.remove('feat__tabs-active');
    });
    tabsBtn.forEach(btn => {
        btn.classList.remove('btn__active');
    });
}

function showTabContent(i = 0) {
    tabs[i].classList.add('feat__tabs-active');
    tabsBtn[i].classList.add('btn__active');
}

hideTabContent();
showTabContent();

tabsBtn.forEach((btn, i)=> {
    btn.addEventListener('click', e => {
        e.preventDefault();
        hideTabContent();
        showTabContent(i);
    });
});