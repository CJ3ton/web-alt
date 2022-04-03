const arrows = document.querySelectorAll('.how__item-arrow'),
    howText = document.querySelectorAll('.how__item-text'),
    howItems = document.querySelectorAll('.how__item');

console.log(howItems);

    arrows.forEach((arrow, i) => {
    arrow.addEventListener('click', (e) => {
        if(howItems[i].clientHeight == 70) {
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