const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    loop: true,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    /* breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 40
        }
    } 
      */
});

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main__display-button');

buttonModal.addEventListener('click', () => {
    modalWindow.classList.add('active');
})

modalWindow.addEventListener('click', (e) => {
    const isModal = e.target.closest('.modal__inner');

    modalWindow.classList.remove('active');
})