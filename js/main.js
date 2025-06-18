document.addEventListener('DOMContentLoaded', () => {
    const dotButtons = document.querySelectorAll('.main-banner-dot-button');
    const prevButton = document.querySelector('.main-banner-prev-button');
    const nextButton = document.querySelector('.main-banner-next-button');
    let currentSlide = 0;

    function updateActiveDot(index) {
        dotButtons.forEach((dot, i) => {
            const img = dot.querySelector('img');
            if (i === index) {
                img.src = './img/dot-active.svg';
            } else {
                img.src = './img/dot.svg';
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % dotButtons.length;
        updateActiveDot(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + dotButtons.length) % dotButtons.length;
        updateActiveDot(currentSlide);
    }

    dotButtons.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateActiveDot(currentSlide);
        });
    });

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);

    updateActiveDot(currentSlide);
});
